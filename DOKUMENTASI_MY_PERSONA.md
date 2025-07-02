# Dokumentasi Lengkap Program My Persona

## Daftar Isi
1. [Gambaran Umum](#gambaran-umum)
2. [Arsitektur Sistem](#arsitektur-sistem)
3. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
4. [Struktur Proyek](#struktur-proyek)
5. [Fitur Utama](#fitur-utama)
6. [Komponen Frontend](#komponen-frontend)
7. [Backend Services](#backend-services)
8. [Database Schema](#database-schema)
9. [API Endpoints](#api-endpoints)
10. [Konfigurasi dan Setup](#konfigurasi-dan-setup)
11. [Deployment](#deployment)
12. [Keamanan](#keamanan)
13. [Troubleshooting](#troubleshooting)

## Gambaran Umum

**My Persona** adalah aplikasi web portfolio personal yang memungkinkan pengguna untuk:
- Membuat dan mengelola portfolio digital
- Mengunggah berbagai jenis konten (gambar, video, PDF, link eksternal)
- Membuat dan mengedit CV secara dinamis
- Mengunduh CV dalam format PDF
- Berbagi portfolio dengan link publik
- Mengelola profil dan informasi personal

### Tujuan Aplikasi
- Memberikan platform mudah untuk membuat portfolio profesional
- Menyediakan sistem manajemen CV yang fleksibel
- Mengintegrasikan penyimpanan cloud untuk file media
- Menyediakan antarmuka yang responsif dan modern

## Arsitektur Sistem

### Arsitektur Keseluruhan
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   External      │
│   (React)       │◄──►│   (Express.js)  │◄──►│   Services      │
│                 │    │                 │    │                 │
│ - LoginPage     │    │ - Authentication│    │ - Firebase Auth │
│ - HomePage      │    │ - File Upload   │    │ - Firestore DB  │
│ - Portfolio     │    │ - CV Generation │    │ - Google Drive  │
│ - CV Editor     │    │ - API Routes    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Flow Data
1. **Authentication**: Firebase Authentication untuk login/register
2. **Data Storage**: Firestore untuk metadata, Google Drive untuk file
3. **File Processing**: Backend memproses upload dan menghasilkan PDF
4. **Real-time Updates**: Firestore real-time listeners untuk sinkronisasi

## Teknologi yang Digunakan

### Frontend
- **React 18.2.0**: Library utama untuk UI
- **Vite 4.4.5**: Build tool dan development server
- **Tailwind CSS 3.3.3**: Framework CSS untuk styling
- **Firebase SDK 11.8.1**: Integrasi dengan Firebase services

### Backend
- **Node.js**: Runtime environment
- **Express.js 4.21.2**: Web framework
- **Firebase Admin SDK 12.0.0**: Server-side Firebase integration
- **Firebase Functions 4.9.0**: Serverless functions
- **Multer 1.4.5**: File upload middleware
- **Google APIs 149.0.0**: Google Drive integration
- **Handlebars 4.7.8**: Template engine untuk CV
- **html-pdf-node 1.0.8**: PDF generation

### Database & Storage
- **Firebase Firestore**: NoSQL database untuk metadata
- **Google Drive API**: File storage dan management
- **Firebase Authentication**: User management

### Development Tools
- **Concurrently 8.2.0**: Menjalankan multiple processes
- **Nodemon 3.1.10**: Auto-restart development server
- **PostCSS 8.4.27**: CSS processing
- **Autoprefixer 10.4.14**: CSS vendor prefixes

## Struktur Proyek

```
d:\Games\Portofolio/
├── backend/                    # Backend application
│   ├── services/              # Business logic services
│   │   ├── cvService.js       # CV generation service
│   │   └── googleDriveService.js # Google Drive integration
│   ├── templates/             # HTML templates
│   │   └── cv-template.html   # CV PDF template
│   ├── google-service-account.json # Google service credentials
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   └── vercel.json            # Vercel deployment config
├── src/                       # Frontend source code
│   ├── pages/                 # React page components
│   │   ├── HomePage.jsx       # Main portfolio page
│   │   └── LoginPage.jsx      # Authentication page
│   ├── firebaseConfig.js      # Firebase configuration
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── dist/                      # Build output
├── package.json               # Frontend dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── firebase.json              # Firebase project configuration
└── firestore.rules            # Firestore security rules
```

## Fitur Utama

### 1. Sistem Autentikasi
- **Registrasi**: Email, password, username, foto profil
- **Login**: Email dan password
- **Logout**: Secure session termination
- **Profile Management**: Update foto profil dan informasi

### 2. Portfolio Management
- **Upload Media**: Gambar (PNG, JPG), Video (MP4, WebM), PDF
- **External Links**: Tambah link ke proyek eksternal
- **Kategorisasi**: Web Development, UI/UX Design, Video, Documents
- **Edit/Delete**: Kelola item portfolio
- **View Modes**: Grid dan list view
- **Full Screen Preview**: Preview konten dalam modal

### 3. CV Builder
- **Dynamic Editing**: Edit semua section CV secara real-time
- **Sections**:
  - Personal Information (nama, email, phone, title)
  - Professional Summary
  - Skills (dengan tag system)
  - Work Experience (multiple entries)
  - Education (multiple entries)
- **PDF Export**: Generate CV dalam format PDF
- **Auto-save**: Perubahan tersimpan otomatis ke Firestore

### 4. Sharing & Export
- **Share Link**: Generate link publik untuk portfolio
- **CV Download**: Export CV sebagai PDF
- **Responsive Design**: Optimal di semua device

## Komponen Frontend

### LoginPage.jsx
**Fungsi Utama**: Mengelola autentikasi pengguna

**State Management**:
```javascript
const [view, setView] = useState('login'); // login | register | portfolio
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const [selectedFile, setSelectedFile] = useState(null);
const [user, setUser] = useState(null);
```

**Key Functions**:
- `handleLogin()`: Firebase authentication login
- `handleRegister()`: User registration dengan upload foto profil
- `handleLogout()`: Secure logout
- `onAuthStateChanged()`: Listen untuk perubahan auth state

**Fitur Khusus**:
- Upload foto profil saat registrasi
- Validasi form lengkap
- Error handling yang comprehensive
- Loading states untuk UX yang baik

### HomePage.jsx
**Fungsi Utama**: Dashboard utama dan portfolio management

**State Management**:
```javascript
const [portfolioItems, setPortfolioItems] = useState([]);
const [cvData, setCvData] = useState({...});
const [activeTab, setActiveTab] = useState('all');
const [viewMode, setViewMode] = useState('grid');
const [isEditingCV, setIsEditingCV] = useState(false);
```

**Sections**:
1. **Hero Section**: Profil pengguna dan deskripsi
2. **Portfolio Section**: Grid/list portfolio items
3. **CV Section**: CV editor dan preview
4. **About Section**: Informasi tambahan
5. **Contact Section**: Informasi kontak

**Key Functions**:
- `handleUpload()`: Upload portfolio items
- `handleEdit()`: Edit portfolio items
- `handleDelete()`: Hapus portfolio items
- `saveCV()`: Simpan perubahan CV
- `handleDownloadCv()`: Download CV sebagai PDF
- `generateShareLink()`: Generate sharing link

## Backend Services

### server.js
**Main Express Server** dengan endpoints:

```javascript
// Authentication & File Upload
app.post('/upload-profile-image', upload.single('profileImage'), ...)
app.post('/upload-portfolio-item', uploadPortfolio.single('file'), ...)

// File Management
app.get('/get-drive-file', ...)
app.post('/ensure-user-folder', ...)

// CV Generation
app.get('/api/download-cv/:userId', ...)
```

**Middleware**:
- CORS untuk cross-origin requests
- Multer untuk file uploads
- Firebase Admin untuk authentication
- Error handling middleware

### googleDriveService.js
**Google Drive Integration Service**

**Key Methods**:
```javascript
// Folder Management
async ensureUserFolderExists(username)
async createFolder(folderName, parentId)
async findFolder(folderName, parentId)

// File Operations
async uploadFile(username, fileBuffer, fileName, mimeType)
async deleteFile(fileId)
async getFileMetadata(fileId)

// Utility Functions
generatePortfolioFileName(originalName, category)
getFileDownloadUrl(fileId)
```

**Features**:
- Automatic user folder creation
- File type validation
- Systematic file naming
- Public permission setting
- Error handling dan logging

### cvService.js
**CV Generation Service**

**Key Functions**:
```javascript
async getCvData(userId)      // Fetch CV data from Firestore
async generateCvPdf(userId)  // Generate PDF from template
```

**Process Flow**:
1. Fetch CV data dari Firestore
2. Load HTML template dengan Handlebars
3. Compile template dengan data
4. Convert HTML ke PDF menggunakan html-pdf-node
5. Return PDF buffer

## Database Schema

### Firestore Collections

#### cvData Collection
```javascript
// Document ID: userId
{
  name: string,
  title: string,
  email: string,
  phone: string,
  summary: string,
  heroDescription: string,
  skills: array<string>,
  experience: array<{
    company: string,
    role: string,
    duration: string,
    startDate: string,
    endDate: string,
    description: string,
    location: string
  }>,
  education: array<{
    institution: string,
    degree: string,
    duration: string,
    fieldOfStudy: string,
    graduationDate: string,
    gpa: string,
    location: string
  }>
}
```

#### portfolioItems Collection
```javascript
// Document ID: auto-generated
{
  userId: string,
  title: string,
  description: string,
  type: string, // 'image' | 'video' | 'pdf' | 'link'
  category: string, // 'web' | 'design' | 'video' | 'document'
  fileId: string, // Google Drive file ID (for non-link types)
  mimeType: string, // File MIME type
  url: string, // For external links
  date: string, // ISO date string
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Google Drive Structure
```
MyPersona/ (Parent Folder)
├── username1/
│   ├── profile_photo.jpg
│   ├── web_1234567890_project1.png
│   ├── design_1234567891_mockup.pdf
│   └── video_1234567892_demo.mp4
├── username2/
│   └── ...
```

## API Endpoints

### Authentication Endpoints
```
POST /upload-profile-image
- Purpose: Upload user profile image
- Parameters: profileImage (file), username (query), userId (query)
- Response: { fileId, mimeType, photoURL }
```

### Portfolio Endpoints
```
POST /upload-portfolio-item
- Purpose: Upload portfolio item
- Parameters: file (multipart), username (query), category (query)
- Response: { fileId, mimeType }

GET /get-drive-file
- Purpose: Proxy Google Drive files
- Parameters: fileId (query), mimeType (query)
- Response: File stream
```

### CV Endpoints
```
GET /api/download-cv/:userId
- Purpose: Generate and download CV PDF
- Parameters: userId (path)
- Response: PDF file stream
```

### Utility Endpoints
```
POST /ensure-user-folder
- Purpose: Ensure user folder exists in Google Drive
- Body: { username }
- Response: { folderId }
```

## Konfigurasi dan Setup

### Environment Variables
```bash
# Firebase Configuration
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id

# Google Drive
GOOGLE_DRIVE_PARENT_FOLDER_ID=your_folder_id

# Server
PORT=5000
NODE_ENV=development
```

### Firebase Configuration
```javascript
// firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyASHCL51tHbUxYKx6VD4AT42xvN9Fa7HWs",
  authDomain: "mypersona-45207.firebaseapp.com",
  projectId: "mypersona-45207",
  storageBucket: "mypersona-45207.firebasestorage.app",
  messagingSenderId: "496123681959",
  appId: "1:496123681959:web:6959226f1bf23e914acf82"
};
```

### Google Service Account
File `google-service-account.json` berisi:
- client_email
- private_key
- project_id
- Credentials untuk Google Drive API access

### Installation Steps

1. **Clone Repository**
```bash
git clone <repository-url>
cd Portofolio
```

2. **Install Dependencies**
```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

3. **Setup Firebase**
- Buat project Firebase baru
- Enable Authentication dan Firestore
- Download service account key
- Update firebaseConfig.js

4. **Setup Google Drive**
- Enable Google Drive API
- Buat service account
- Share parent folder dengan service account email
- Update GOOGLE_DRIVE_PARENT_FOLDER_ID

5. **Run Development**
```bash
# Root directory (runs both frontend and backend)
npm run dev
```

## Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
# Build production
npm run build

# Deploy to Vercel
vercel --prod
```

### Backend Deployment (Firebase Functions)
```bash
cd backend
npm run deploy
```

### Environment Setup untuk Production
```bash
# Update base URLs
VITE_BACKEND_BASE_URL=https://your-backend-url
```

## Keamanan

### Authentication Security
- Firebase Authentication untuk secure login
- JWT tokens untuk session management
- Password validation dan hashing otomatis

### File Upload Security
- File type validation (whitelist)
- File size limits
- Malware scanning (recommended)
- Secure file naming conventions

### API Security
- CORS configuration
- Input validation dan sanitization
- Error handling tanpa information disclosure
- Rate limiting (recommended)

### Database Security
```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // CV data - user can only access their own
    match /cvData/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Portfolio items - user can only access their own
    match /portfolioItems/{itemId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

### Google Drive Security
- Service account dengan minimal permissions
- File permissions set ke 'reader' untuk public access
- Folder structure isolation per user

## Troubleshooting

### Common Issues

#### 1. Firebase Authentication Errors
```
Error: Firebase: Error (auth/user-not-found)
Solution: Pastikan user sudah terdaftar atau gunakan correct credentials
```

#### 2. Google Drive Upload Failures
```
Error: Failed to upload file to Google Drive
Solutions:
- Periksa service account permissions
- Pastikan parent folder shared dengan service account
- Cek Google Drive API quota
```

#### 3. CV PDF Generation Issues
```
Error: Failed to generate CV PDF
Solutions:
- Install wkhtmltopdf di server
- Periksa template HTML syntax
- Pastikan data CV complete
```

#### 4. File Upload Size Limits
```
Error: File too large
Solutions:
- Adjust Multer limits
- Implement client-side compression
- Use chunked upload untuk large files
```

### Debug Mode
```javascript
// Enable debug logging
console.log('Debug mode enabled');
localStorage.setItem('debug', 'true');
```

### Performance Optimization
1. **Image Optimization**: Compress images sebelum upload
2. **Lazy Loading**: Load portfolio items on demand
3. **Caching**: Implement browser caching untuk static assets
4. **CDN**: Use CDN untuk file delivery
5. **Database Indexing**: Optimize Firestore queries

### Monitoring & Analytics
- Firebase Analytics untuk user behavior
- Error tracking dengan Sentry (recommended)
- Performance monitoring
- API usage monitoring

## Kesimpulan

My Persona adalah aplikasi portfolio yang comprehensive dengan fitur-fitur modern:
- **User-friendly**: Interface yang intuitif dan responsive
- **Scalable**: Arsitektur yang dapat berkembang
- **Secure**: Implementasi keamanan yang robust
- **Feature-rich**: Fitur lengkap untuk portfolio management
- **Cloud-integrated**: Memanfaatkan cloud services untuk reliability

Aplikasi ini cocok untuk:
- Freelancer yang ingin showcase portfolio
- Job seeker yang butuh CV digital
- Creative professional untuk branding personal
- Developer untuk demonstrasi skills

### Future Enhancements
1. **Social Features**: Comments, likes, sharing ke social media
2. **Analytics**: Portfolio view statistics
3. **Templates**: Multiple CV dan portfolio templates
4. **Collaboration**: Team portfolios
5. **Mobile App**: React Native version
6. **AI Integration**: AI-powered CV suggestions
7. **Payment Integration**: Premium features
8. **Multi-language**: Internationalization support

---

*Dokumentasi ini dibuat untuk memberikan pemahaman lengkap tentang sistem My Persona. Untuk pertanyaan lebih lanjut atau kontribusi, silakan hubungi tim development.*