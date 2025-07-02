# Google Drive Media Storage Migration Plan

This document outlines the detailed plan to transition media storage from local file system to Google Drive for user profile images and portfolio items.

## Proposed Plan

**1. Integrate Google Drive Service into `backend/server.js`**
   - Import the `GoogleDriveService` instance into `backend/server.js` to make its functionalities accessible.

**2. Modify `backend/server.js` for Profile Image Upload to Google Drive**
   - **Remove Local Storage Logic:** Eliminate the `multer.diskStorage` configuration for profile images (lines 16-28).
   - **Use Memory Storage:** Configure Multer to use `multer.memoryStorage()` for profile image uploads.
   - **Update `/upload-profile-image` Endpoint:**
     - Remove `fs.mkdirSync` and other `fs` operations (lines 21-22).
     - In the `app.post('/upload-profile-image', ...)` handler (lines 41-50), replace the local file saving logic with a call to `googleDriveService.uploadFile()`. This function will receive the file buffer (`req.file.buffer`), original filename (`req.file.originalname`), and MIME type (`req.file.mimetype`).
     - The `googleDriveService.uploadFile` function already handles finding/creating the user's Google Drive folder and making the file publicly viewable.
     - Modify the response to return the Google Drive `webViewLink` or `directLink` provided by `googleDriveService.uploadFile`, instead of a local file URL.

**3. Modify `backend/server.js` for Portfolio Item Upload to Google Drive**
   - **Remove Local Storage Logic:** Eliminate the `multer.diskStorage` configuration for portfolio items (lines 53-64).
   - **Use Memory Storage:** Configure Multer for portfolio uploads to use `multer.memoryStorage()`.
   - **Update `/upload-portfolio-item` Endpoint:**
     - Remove `fs.mkdirSync` and other `fs` operations (lines 57-58).
     - In the `app.post('/upload-portfolio-item', ...)` handler (lines 83-90), replace the local file saving logic with a call to `googleDriveService.uploadFile()`. This function will receive the file buffer (`req.file.buffer`), a generated unique filename (using `googleDriveService.generatePortfolioFileName(req.file.originalname, req.query.category)`), and MIME type (`req.file.mimetype`).
     - Modify the response to return the Google Drive `webViewLink` or `directLink` provided by `googleDriveService.uploadFile`, instead of a local file URL.

**4. Update Frontend (`src/pages/LoginPage.jsx`) to Use Google Drive Links**
   - In the `handleRegister` function (lines 64-122), specifically at line 106, ensure that `uploadedImageUrl` (which will now be a Google Drive link) is directly used when updating the user's `photoURL` in `updateProfile`.
   - At line 276, update the `img src` to directly use `user.photoURL` without the `http://localhost:5000` prefix: `src={user.photoURL || "https://placehold.co/600x600?text=Upload+Image"}`.

**5. Update Frontend (`src/pages/HomePage.jsx`) to Use Google Drive Links**
   - In the `handleUpload` function (lines 171-251), specifically at line 209, modify `itemUrl = `http://localhost:5000${uploadResult.fileUrl}`;` to `itemUrl = uploadResult.fileUrl;` to directly use the Google Drive link.
   - At line 643, update the `img src` for the profile image to directly use `user.photoURL` without the `http://localhost:5000` prefix: `src={user.photoURL || "https://placehold.co/600x600?text=Upload+Image"}`.
   - For portfolio item display (lines 781, 791, 832, 1786, 1793, 1813), the `item.url` and `fullScreenPreview.url` are already being used directly, which is correct as they will now contain Google Drive links. No changes are needed here.

**6. Remove Redundant Static File Serving in `backend/server.js`**
   - Remove the line `app.use('/profile-images', express.static(path.join(__dirname, '../src/submit')));` (line 14) as it will no longer be needed for newly uploaded files.

## Detailed System Flow

```mermaid
graph TD
    subgraph Frontend (src/pages/LoginPage.jsx)
        A[User Clicks Register] --> B{handleRegister Function};
        B -- FormData (profileImage) --> C[Fetch: POST /upload-profile-image];
        C -- Response (Google Drive Link) --> D[Firebase: createUserWithEmailAndPassword];
        D --> E[Firebase: updateProfile with Google Drive Link];
        E --> F[Redirect to Portfolio];
    end

    subgraph Backend (backend/server.js)
        G[POST /upload-profile-image] --> H{Multer: memoryStorage};
        H -- fileBuffer, email --> I[Call googleDriveService.uploadFile];
        I -- Google Drive Link --> G;

        J[POST /upload-portfolio-item] --> K{Multer: memoryStorage};
        K -- fileBuffer, email, category --> L[Call googleDriveService.uploadFile];
        L -- Google Drive Link --> J;
    end

    subgraph Google Drive Service (backend/services/googleDriveService.js)
        I --> M{findUserFolder / createUserFolder};
        M --> N[Google Drive API: Create/Find Folder];
        N --> O[Google Drive API: Upload File];
        O -- File ID, Links --> I;

        L --> P{findUserFolder / createUserFolder};
        P --> Q[Google Drive API: Create/Find Folder];
        Q --> R[Google Drive API: Upload File];
        R -- File ID, Links --> L;
    end

    subgraph Google Drive
        S[User-specific Folders]
        T[Uploaded Media Files]
    end

    N --> S;
    O --> T;
    Q --> S;
    R --> T;