const admin = require('firebase-admin');
const handlebars = require('handlebars');
const fs = require('fs').promises;
const path = require('path');
const htmlPdf = require('html-pdf-node');

// Pastikan Firebase Admin SDK sudah diinisialisasi di server.js
// Jika belum, Anda perlu menginisialisasinya di sini atau di server.js
// Contoh inisialisasi jika belum ada:
// const serviceAccount = require('../google-service-account.json');
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://your-project-id.firebaseio.com" // Ganti dengan URL database Anda
//   });
// }
const db = admin.firestore(); // Dapatkan instance Firestore

async function getCvData(userId) {
    console.log(`[cvService] Attempting to fetch CV data for userId: ${userId}`);
    const cvDocRef = db.collection('cvData').doc(userId);
    const cvDocSnap = await cvDocRef.get();

    if (cvDocSnap.exists) {
        const data = cvDocSnap.data();
        console.log(`[cvService] CV data found for ${userId}:`, data);
        // Pastikan semua field yang dibutuhkan ada, berikan nilai default jika tidak ada
        return {
            name: data.name || 'N/A',
            title: data.title || 'N/A',
            email: data.email || 'N/A',
            phone: data.phone || 'N/A',
            summary: data.summary || 'No summary provided.',
            experience: data.experience || [],
            education: data.education || [],
            skills: data.skills || []
        };
    } else {
        console.warn(`[cvService] No CV data found for user: ${userId}`);
        // Return default structure if no data exists
        return {
            name: 'User',
            title: 'No Title',
            email: 'no-email@example.com',
            phone: 'N/A',
            summary: 'No CV data available for this user.',
            experience: [],
            education: [],
            skills: []
        };
    }
}

async function generateCvPdf(userId) {
    const cvData = await getCvData(userId);

    // 1. Baca template HTML CV
    const templatePath = path.join(__dirname, '../templates/cv-template.html');
    const templateSource = await fs.readFile(templatePath, 'utf8');
    const template = handlebars.compile(templateSource);

    // 2. Render template dengan data CV
    const htmlContent = template(cvData);

    // 3. Konversi HTML ke PDF menggunakan html-pdf-node (wrapper wkhtmltopdf)
    let options = { 
        format: 'A4', 
        printBackground: true,
        args: ['--enable-local-file-access'] // Penting untuk CSS/gambar lokal jika ada
    };
    let file = { content: htmlContent };

    // Pastikan wkhtmltopdf terinstal di server dan path-nya benar
    // Jika wkhtmltopdf tidak ada di PATH sistem, Anda mungkin perlu menentukannya secara eksplisit
    // options.path = '/usr/local/bin/wkhtmltopdf'; // Contoh path di Linux
    // options.path = 'C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe'; // Contoh path di Windows

    const pdfBuffer = await htmlPdf.generatePdf(file, options);
    return pdfBuffer;
}

module.exports = {
    generateCvPdf
};