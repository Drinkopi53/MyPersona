const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

class GoogleDriveService {
  constructor() {
    this.drive = null;
    this.parentFolderId = '1A6oImHwRJ1U-Psw8E7AimOJpdo6FoqYx'; // ID for the 'MyPersona' parent folder
    this.initializeAuth();
  }


  async initializeAuth() {
    try {
      // Load service account credentials
      const serviceAccountPath = path.join(__dirname, '../google-service-account.json');
      console.log(`Attempting to load service account from: ${serviceAccountPath}`);
      
      if (!fs.existsSync(serviceAccountPath)) {
        console.warn('Google service account file not found. Google Drive integration will be disabled.');
        return;
      }
      console.log('Service account file found. Initializing Google Drive authentication.');

      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
      
      // Create JWT auth client
      const auth = new google.auth.JWT(
        serviceAccount.client_email,
        null,
        serviceAccount.private_key,
        ['https://www.googleapis.com/auth/drive.file']
      );

      // Initialize Drive API
      this.drive = google.drive({ version: 'v3', auth });
      
      console.log('Google Drive service initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Google Drive service:', error.message);
    }
  }

  async isAvailable() {
    return this.drive !== null;
  }

  /**
   * Create a folder in Google Drive.
   * @param {string} folderName - The name of the folder to create.
   * @param {string} parentId - The ID of the parent folder.
   * @returns {Promise<string>} - The ID of the created folder.
   */
  async createFolder(folderName, parentId) {
    if (!this.drive) {
      throw new Error('Google Drive service not available.');
    }

    const fileMetadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentId],
    };

    try {
      const response = await this.drive.files.create({
        resource: fileMetadata,
        fields: 'id',
      });
      console.log(`Created folder '${folderName}' with ID: ${response.data.id}`);
      return response.data.id;
    } catch (error) {
      console.error(`Error creating folder '${folderName}':`, error.message);
      throw new Error(`Failed to create folder '${folderName}': ${error.message}`);
    }
  }

  /**
   * Find an existing folder by name within a parent folder.
   * @param {string} folderName - The name of the folder to find.
   * @param {string} parentId - The ID of the parent folder to search within.
   * @returns {Promise<string|null>} - The ID of the found folder, or null if not found.
   */
  async findFolder(folderName, parentId) {
    if (!this.drive) {
      console.warn('Google Drive service not available when trying to find folder.');
      return null;
    }

    try {
      const query = `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${parentId}' in parents and trashed=false`;
      const response = await this.drive.files.list({
        q: query,
        fields: 'files(id, name)',
      });
      console.log(`[GoogleDriveService] findFolder query: ${query}`);
      console.log(`[GoogleDriveService] findFolder response files:`, response.data.files);

      if (response.data.files && response.data.files.length > 0) {
        console.log(`[GoogleDriveService] Found folder '${folderName}' with ID: ${response.data.files[0].id}`);
        return response.data.files[0].id;
      }
      console.log(`[GoogleDriveService] Folder '${folderName}' not found within parent '${parentId}'.`);
      return null;
    } catch (error) {
      console.error(`[GoogleDriveService] Error finding folder '${folderName}':`, error.message);
      return null;
    }
  }

  /**
   * Ensures a user's dedicated Google Drive folder exists, creating it if necessary.
   * @param {string} username - The username to use for the folder name.
   * @returns {Promise<string>} - The ID of the user's folder.
   */
  async ensureUserFolderExists(username) {
    if (!this.drive) {
      throw new Error('Google Drive service not available.');
    }
    if (!this.parentFolderId) {
      throw new Error('Parent folder ID is not configured.');
    }

    const sanitizedUsername = username.replace(/[^a-zA-Z0-9@._-]/g, '_');
    console.log(`[GoogleDriveService] ensureUserFolderExists: Checking for folder '${sanitizedUsername}' in parent '${this.parentFolderId}'`);
    let userFolderId = await this.findFolder(sanitizedUsername, this.parentFolderId);
    console.log(`[GoogleDriveService] ensureUserFolderExists: Result of findFolder for '${sanitizedUsername}': ${userFolderId}`);

    if (!userFolderId) {
      console.log(`[GoogleDriveService] User folder for '${sanitizedUsername}' not found. Attempting to create.`);
      try {
        userFolderId = await this.createFolder(sanitizedUsername, this.parentFolderId);
        console.log(`[GoogleDriveService] Successfully created user folder with ID: ${userFolderId}`);
      } catch (error) {
        console.error(`[GoogleDriveService] Failed to create user folder for '${sanitizedUsername}':`, error.message);
        throw error; // Re-throw to be handled by the caller
      }
    } else {
      console.log(`[GoogleDriveService] User folder for '${sanitizedUsername}' already exists with ID: ${userFolderId}.`);
    }
    return userFolderId;
  }

  /**
   * Upload file to user's Google Drive folder.
   * @param {string} username - User's username (used for folder identification).
   * @param {Buffer} fileBuffer - File buffer.
   * @param {string} fileName - File name.
   * @param {string} mimeType - File MIME type.
   * @returns {Promise<Object>} - Upload result with file ID and web view link.
   */
  async uploadFile(username, fileBuffer, fileName, mimeType) {
    if (!this.drive) {
      throw new Error('Google Drive service not available');
    }

    try {
      console.log(`Attempting to upload file: ${fileName} for user: ${username}`);
      // Ensure user folder exists and get its ID
      const folderId = await this.ensureUserFolderExists(username);
 
       // Check if file already exists and delete it (for profile photos, assuming 'profile_photo' is a unique prefix)
       if (fileName.startsWith('profile_photo')) { // Changed to 'profile_photo' to match common naming
         console.log(`Profile photo upload detected. Deleting existing profile photos in folder ${folderId}.`);
         await this.deleteExistingFile(folderId, 'profile_photo');
       }

      // Upload file
      const fileMetadata = {
        name: fileName,
        parents: [folderId]
      };

      const media = {
        mimeType: mimeType,
        body: require('stream').Readable.from(fileBuffer)
      };

      const response = await this.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, webViewLink, webContentLink'
      });
      console.log(`File created on Google Drive: ID=${response.data.id}, Name=${fileName}`);

      // Make file publicly viewable
      console.log(`Setting public permissions for file ID: ${response.data.id}`);
      await this.drive.permissions.create({
        fileId: response.data.id,
        resource: {
          role: 'reader',
          type: 'anyone'
        }
      });
      console.log(`Permissions set for file ID: ${response.data.id}`);

      console.log(`Uploaded file ${fileName} for user ${username}: ${response.data.id}`);
      
      return {
        fileId: response.data.id,
        webViewLink: response.data.webViewLink,
        webContentLink: response.data.webContentLink,
        directLink: `https://drive.google.com/uc?id=${response.data.id}`
      };
    } catch (error) {
      console.error('Error uploading file to Google Drive:', error);
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  /**
   * Delete existing file with similar name pattern
   * @param {string} folderId - Folder ID
   * @param {string} fileNamePattern - File name pattern to match
   */
  async deleteExistingFile(folderId, fileNamePattern) {
    try {
      const response = await this.drive.files.list({
        q: `name contains '${fileNamePattern}' and '${folderId}' in parents and trashed=false`, // Ensure parent is correct
        fields: 'files(id, name)'
      });

      if (response.data.files && response.data.files.length > 0) {
        for (const file of response.data.files) {
          await this.drive.files.delete({
            fileId: file.id
          });
          console.log(`Deleted existing file: ${file.name}`);
        }
      }
    } catch (error) {
      console.error('Error deleting existing file:', error);
      // Don't throw error, just log it
    }
  }

  /**
   * Generate systematic filename for portfolio items
   * @param {string} originalName - Original file name
   * @param {string} category - Portfolio category
   * @returns {string} - Systematic filename
   */
  generatePortfolioFileName(originalName, category) {
    const timestamp = Date.now();
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension).replace(/[^a-zA-Z0-9]/g, '_');
    return `${category}_${timestamp}_${baseName}${extension}`;
  }

  /**
   * Get file download URL
   * @param {string} fileId - Google Drive file ID
   * @returns {string} - Direct download URL
   */
  getFileDownloadUrl(fileId) {
    return `https://drive.google.com/uc?id=${fileId}`;
  }

  /**
   * Delete file from Google Drive
   * @param {string} fileId - File ID to delete
   */
  async deleteFile(fileId) {
    if (!this.drive) {
      throw new Error('Google Drive service not available');
    }

    try {
      await this.drive.files.delete({
        fileId: fileId
      });
      console.log(`Deleted file: ${fileId}`);
    } catch (error) {
      console.error('Error deleting file from Google Drive:', error);
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }

  /**
   * Get file metadata
   * @param {string} fileId - File ID
   * @returns {Promise<Object>} - File metadata
   */
  async getFileMetadata(fileId) {
    if (!this.drive) {
      throw new Error('Google Drive service not available');
    }

    try {
      const response = await this.drive.files.get({
        fileId: fileId,
        fields: 'id, name, mimeType, size, createdTime, modifiedTime, webViewLink, webContentLink'
      });

      return response.data;
    } catch (error) {
      console.error('Error getting file metadata:', error);
      throw new Error(`Failed to get file metadata: ${error.message}`);
    }
  }
}

module.exports = new GoogleDriveService();
