const functions = require('firebase-functions');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const GoogleDriveService = require('./services/googleDriveService'); // Import GoogleDriveService
const path = require('path');
const admin = require('firebase-admin'); // Import Firebase Admin SDK
const serviceAccount = require('./google-service-account.json'); // Path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Import cvService AFTER Firebase Admin SDK has been initialized
const cvService = require('./services/cvService');

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Google Drive service
const googleDriveService = GoogleDriveService;

// Configure Multer to use memory storage for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory as buffers
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(new Error('Only .png or .jpg format allowed!'), false);
    }
  }
});

// New route to ensure user folder exists
app.post('/ensure-user-folder', async (req, res) => {
  console.log('Received /ensure-user-folder request.');
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  if (!await googleDriveService.isAvailable()) {
    console.error('Google Drive service is not available.');
    return res.status(500).json({ message: 'Google Drive service is not available.' });
  }

  try {
    const folderId = await googleDriveService.ensureUserFolderExists(username);
    res.json({ message: 'User folder ensured successfully', folderId });
  } catch (error) {
    console.error('Error ensuring user folder:', error.message);
    res.status(500).json({ message: 'Failed to ensure user folder.', error: error.message });
  }
});

// Route handler for profile image upload
app.post('/upload-profile-image', upload.single('profileImage'), async (req, res) => {
  console.log('Received /upload-profile-image request.');

  if (!await googleDriveService.isAvailable()) {
    console.error('Google Drive service is not available.');
    return res.status(500).json({ message: 'Google Drive service is not available.' });
  }

  if (!req.file) {
    console.log('No file received for profile image upload.');
    return res.status(400).json({ message: 'No file uploaded or invalid file type.' });
  }

  // Log the raw mimetype from Multer for debugging
  console.log(`Multer detected mimetype: ${req.file.mimetype}`);

  const username = req.query.username;
  const userId = req.query.userId; // Get userId from query parameters

  if (!username || !userId) {
    console.error('Username and userId are required for profile image upload.');
    return res.status(400).json({ message: 'Username and userId are required.' });
  }

  try {
    const fileName = `profile_photo${path.extname(req.file.originalname)}`;
    const mimeType = req.file.mimetype;

    // Add a check for mimeType before proceeding
    if (!mimeType) {
      console.error('MIME type is missing after Multer processing.');
      return res.status(400).json({ message: 'Failed to determine file type. Please try a different image.' });
    }

    const uploadResult = await googleDriveService.uploadFile(username, req.file.buffer, fileName, mimeType); // Pass username

    // Update user's photoURL in Firebase Authentication
    const photoURL = process.env.NODE_ENV === 'production'
      ? `https://us-central1-mypersona-45207.cloudfunctions.net/api/get-drive-file?fileId=${uploadResult.fileId}&mimeType=${encodeURIComponent(mimeType)}`
      : `http://localhost:5000/get-drive-file?fileId=${uploadResult.fileId}&mimeType=${encodeURIComponent(mimeType)}`;
    await admin.auth().updateUser(userId, { photoURL: photoURL });

    res.json({ message: 'Profile image uploaded and user photoURL updated successfully', fileId: uploadResult.fileId, mimeType: mimeType, photoURL: photoURL });
  } catch (error) {
    console.error('Error uploading profile image or updating user photoURL:', error.message);
    res.status(500).json({ message: 'Failed to upload profile image or update user photoURL.', error: error.message });
  }
});

const uploadPortfolio = multer({
  storage: multer.memoryStorage(), // Store files in memory as buffers
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'image/png', 'image/jpeg', 'image/gif', // Images
      'video/mp4', 'video/webm', 'video/ogg', // Videos
      'application/pdf' // PDFs
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type! Only images, videos, and PDFs are allowed.'), false);
    }
  }
});

// Route handler for portfolio item upload
app.post('/upload-portfolio-item', uploadPortfolio.single('file'), async (req, res) => {
  console.log('Entering /upload-portfolio-item route handler.'); // Log to confirm entry

  // Multer errors are now handled by the global error handler, but we can still check req.file
  if (!req.file) {
    console.log('No file received for portfolio item upload or Multer error occurred.');
    // If Multer already sent an error, this might not be reached.
    // If it is reached, it means no file was provided but Multer didn't error out.
    return res.status(400).json({ message: 'No file uploaded or unsupported file type.' });
  }

  try {
    const username = req.query.username;
    const category = req.query.category || 'uncategorized';
    const fileName = googleDriveService.generatePortfolioFileName(req.file.originalname, category);
    const mimeType = req.file.mimetype;

    console.log(`Attempting to upload portfolio item for user: ${username}, filename: ${fileName}, mimetype: ${mimeType}, category: ${category}`);
    const uploadResult = await googleDriveService.uploadFile(username, req.file.buffer, fileName, mimeType);
    console.log('Portfolio item uploaded successfully to Google Drive:', uploadResult.fileId); // Return fileId for proxy
    res.json({ message: 'File uploaded successfully to Google Drive', fileId: uploadResult.fileId, mimeType: mimeType });
  } catch (error) {
    console.error('Detailed error uploading portfolio item:', error);
    res.status(500).json({ message: 'Failed to upload portfolio item to Google Drive.', error: error.message });
  }
});

// New route to proxy Google Drive files for display
app.get('/get-drive-file', async (req, res) => {
  const { fileId, mimeType } = req.query;

  if (!fileId || !mimeType) {
    return res.status(400).json({ message: 'File ID and MIME type are required.' });
  }

  if (!await googleDriveService.isAvailable()) {
    return res.status(500).json({ message: 'Google Drive service is not available.' });
  }

  try {
    // Get the file content as a stream
    const response = await googleDriveService.drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    res.setHeader('Content-Type', mimeType);
    response.data
      .on('end', () => console.log(`Successfully streamed file ${fileId}`))
      .on('error', err => {
        console.error(`Error streaming file ${fileId}:`, err);
        res.status(500).json({ message: 'Failed to stream file from Google Drive.' });
      })
      .pipe(res);
  } catch (error) {
    console.error('Error fetching file from Google Drive:', error);
    res.status(500).json({ message: 'Failed to retrieve file from Google Drive.', error: error.message });
  }
});

// New route for downloading CV
app.get('/api/download-cv/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const pdfBuffer = await cvService.generateCvPdf(userId);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=cv-${userId}.pdf`);
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating CV PDF:', error);
        res.status(500).send('Failed to generate CV PDF');
    }
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler caught an error:', err);
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: `Multer error: ${err.message}` });
  }
  // For other errors, send a generic 500 response
  res.status(500).json({ message: 'An unexpected server error occurred.', error: err.message });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
  });
}

exports.api = functions.https.onRequest(app);
