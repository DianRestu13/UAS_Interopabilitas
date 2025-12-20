### NAMA  : DANISH NAISYILA AZKA
### NIM   : 362458302098
### KELAS : TRPL-2D

## <h1 align="center">LAPORAN UJIAN PRAKTIKUM INTEROPERABILITAS - VENDOR B (DISTRO MODERN)</h1>
Vendor B berperan sebagai Distro Modern yang menyajikan data produk UMKM dengan standar sistem yang lebih modern dan terstruktur. Vendor ini menggunakan bahasa Inggris, format JSON, serta penamaan atribut camelCase agar mudah diintegrasikan oleh sistem Backend Integrator.
Vendor B dibangun menggunakan Node.js dan Express.js dan menyediakan layanan API yang menampilkan daftar produk dalam format JSON yang siap digunakan oleh sistem lain.

### KARAKTERISTIK DAN SPESIFIKASI DATA
1. Format JSON Standar
Data dikirim dalam bentuk JSON valid sehingga dapat langsung di-parse tanpa proses tambahan.
2. Penamaan Atribut CamelCase
Contohnya seperti productName, isAvailable, yang mencerminkan praktik umum pada pengembangan API modern.
3. Tipe Data Jelas
Seperti field sku dan productName menggunakan tipe data String, price menggunakan tipe data Number (integer) untuk menyimpan harga produk, sedangkan isAvailable menggunakan tipe data Boolean untuk menunjukkan status ketersediaan produk.
4. Bahasa Inggris
Ini digunakan untuk meningkatkan kompatibilitas dengan sistem internasional.
5. Contoh Struktur Datanya
    {
      "sku": "TSHIRT-001",
      "productName": "Kaos Ijen Crater",
      "price": 75000,
      "isAvailable": true
    }
### PENGUJIAN API 
1. Teknologi yang Digunakan
    * Node.js
    * Express.js
    * JavaScript (ES Module)

2. Vendor B menyediakan satu endpoint utama yaitu /api/product, nah ini untuk menampilkan seluruh data produk

### PENJELASAN KODE PROGRAM
1. Package.json
File ini berfungsi untuk mengatur konfigurasi proyek dan dependensi yang digunakan. Express digunakan sebagai framework utama untuk membangun API.

2. App.js
    File app.js berisi logika utama aplikasi, yaitu:
    * Membuat server menggunakan Express
    * Menyediakan endpoint /api/products
    * Mengirimkan data produk dalam format JSON
    * Menjalankan server pada port yang tersedia

### PROSES DEPLOY KE VERCEL
Deployment Vendor B dilakukan dengan menghubungkan proyek ke platform Vercel melalui GitHub. Adapun langkah-langkah yang dilakukan adalah sebagai berikut:
1. Pengecekan dan Perbaikan Kode
Memastikan seluruh fungsi berjalan dengan baik dan penulisan res.json() sudah benar agar aplikasi tidak mengalami error saat dijalankan.
2. Menyiapkan Konfigurasi Proyek
Membuat dan melengkapi file package.json untuk mendefinisikan dependency, khususnya framework Express.js.
3. Upload ke GitHub
Seluruh file proyek diunggah ke repository GitHub sebagai sumber utama deployment.
4. Deploy Menggunakan Vercel
Repository GitHub dihubungkan ke akun Vercel sehingga proses build dan deploy dapat berjalan otomatis setiap kali ada perubahan kode.

### KESESUAIAN DENGAN KRITERIA PENILAIAN
Vendor B telah memenuhi kriteria penilaian UAS, yaitu:
* JSON valid dan bisa diparse
* Menggunakan tipe data Number dan Boolean
* Struktur data rapi dan konsisten
* Mudah diintegrasikan dengan Backend Integrator

### KESIMPULAN
Vendor B berhasil mengimplementasikan layanan API modern dengan struktur data yang rapi, konsisten, dan sesuai standar internasional. Dengan penggunaan Express.js serta format JSON yang jelas, Vendor B siap digunakan sebagai salah satu sumber data dalam sistem Banyuwangi Marketplace dan dapat diintegrasikan dengan vendor lain secara optimal.
