# Laporan Praktikum Interopabilitas - Vendor C (Resto & Kuliner)
Laporan ini disusun untuk memenuhi tugas Ujian Praktikum AKhir Semester pada mata kuliah Interopabilitas. Fokus utama tugas ini adalah mensimulasikan penyediaan data API dengan struktur yang kompleks untuk diintegrasikan ke dalam dashboard Pemkab Banyuwangi. Laporan ini mendokumentasikan peran dan implementasi teknis Mahasiswa 3 (Vendor C) dalam proyek Integrasi data UMKM Pemerintah Kabupaten Banyuwangi.

#### 1. Identitas Mahasiswa
- **Nama    :** Nadhifah Afiyah Qurota'ain
- **NIM     :** 362458302100
- **Peran   :** Mahasiswa 3 - Vendor C (Resto & Kuliner)
- **Prodi   :** Teknologi Rekayasa Perangkat Lunak

#### 2. Deskripsi Tugas Vendor C
Sebagai vendor C, saya bertanggung jawab mensimulasikan sistem dengan struktur data kompleks (Nested Object). Spesifikasi utamanya adalah:
- **Nested Pricing:** Memisahkan harga dasar (base-price) dengan pajak (tax)
- **Detailed Information:** Mengelompokkan nama produk dan kategori ke dalam objek details
- **Data Kategori:** Menyediakan informasi kategori ("Food" atau "Drink") untuk mendukung logika bisnis integrasi

#### 3. Implementasi API
API dibangun menggunakan Node.js dan Express.js, berikut adalah endpoint yang tersedia:
1. GET / : informasi umum API dan daftar ID yang tersedia
2. GET /api/products : mengambil seluruh data produk kuliner
3. GET /api/products/:id : mengambil detail produk berdasarkan ID
Contoh Struktus JSON 
{
    "id": 501,
    "details": {
        "name": "Nasi Tempong",
        "category": "Food"
    },
    "pricing": {
        "base_price": 20000,
        "tax": 2000
    },
    "stock": 50
}

#### 4. Langkah Deploy ke Vercel
Proses Deployment dilakukan dengan mengintegrasikan repository GitHub ke platform Vercel:
1. Perbaikan Kode: Memastikan penanganan error menggunakan .json (yang sebelumnya terdapat typo .jsom) agar server tidak crash
2. Konfigurasi Proyek: menambahkan fila package.json untuk dependency express
3. Push GitHub: Mengunggah seluruh kode sumber ke repository GitHub
4. Import Vercel: Menghubungkan repository tersebut di dashboard Vercel untuk deployment otomatis (CI/CD)

URL: https://vendor-c-seven.vercel.app/

#### 5. Kepatuhan Terhadap Rubrik Penilaian
Berdasarkan kriteria penilaian UAS:
- Validitas JSON: Output dipastikan valid dan dapat di-parsing oleh Lead Integrator tanpa error syntax.
- Data Mapping: Berhasil menyediakan struktur Nested Object sesuai ketentuan soal
- Type Safety: Menggunakan tipe data Number untuk ID, harga, dan stok, serta String untuk nama dan kategori.
- Logika Bisnis: Menyediakan field category: "Food" yang memungkinkan Lead Integrator memberikan label "(Recommended)" secara otomatis.
#### 6. Dokumentasi 
1. GET /
    ![alt text](<dokumentasi/Screenshot (428).png>)
2. GET /api/products
    ![alt text](<dokumentasi/Screenshot (429).png>)
3. GET /api/products/:id
    ![alt text](<dokumentasi/Screenshot (431).png>)