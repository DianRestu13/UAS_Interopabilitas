## UAS_Interopabilitas


Matakuliah : Interopabilitas
Dosen Pengampu : Sepyan Purnama Kristanto, S.Kom., M.Kom
Prodi : Teknologi Rekayasa Perangkat Lunak

---

## Peran Anggota 4 - Integrator
Integrator bertugas menggabungkan data produk dari tiga vendor berbeda (Vendor A, Vendor B, Vendor C) yang memiliki struktur JSON, tipe data, dna penamaan field yang tidak seragam. Tujuan utama integrator adalah menghasilkan satu format data standar yang dapat digunakan oleh **Banyuwangi Marketplace** tanpa mengubah data pada sumber vendor.

---

## Tujuan 
- Menggabungkan data dari tiga API vendor berbeda kedalam satu endpoint terpusat
- Menormalisasi struktur dan tipe data JSON
- Menerapkan logika bisnis sesuai ketentuan UAS
- Menghasilkan output JSON yang konsisten dan siap digunakan oleh frontend/ dashboard

---

## Teknologi yang digunakan
- Node.js
- Express.js
- REST API
- Fetch API
- JSON

---

## Sumber Data Vendor
Integrator mengambil data dari API vendor berikut:
- **Vendor A**
    `https://uasinteropabilitas.vercel.app/api/vendorA`
- **Vendor B**
    `https://vendorb-uas.vercel.app/api/products`

- **Vendor C**
    `https://vendor-c-seven.vercel.app/api/prodcts`

--

## Proses Integrasi Data
### 1. Inisialisasi Server
Integrator membangun REST API menggunakan Express.js, menyiapkan middleware CORS, serta menjalankan server pada port 3000 sebagai pusat layanan integrasi.

---

### 2. Pengambilan Data Vendor
Data dari masing-masing vendor diambil menggunakan fungsi `fetchData()` yang melakukan request HTTP ke endpoint vendor.  
Fungsi ini dilengkapi dengan penanganan error untuk menjaga kestabilan sistem apabila salah satu vendor tidak merespons.

---

### 3. Pemrosesan & Normalisasi Data

Karena setiap vendor memiliki struktur JSON berbeda, integrator membuat fungsi pemrosesan terpisah:

#### Vendor A
- Konversi harga dari string ke number  
- Penerapan diskon 10%  
- Konversi status `ada/habis` menjadi `Tersedia/Habis`  

#### Vendor B
- Mapping field `sku`, `productName`, dan `price`  
- Konversi status boolean menjadi teks  

#### Vendor C
- Parsing nested object `details` dan `pricing`  
- Perhitungan harga akhir (`base_price + tax`)  
- Penambahan label `(Recommended)` untuk kategori `Food`  


## Pengujian API
Pengujian dilakukan menggunakan Postman dengan hasil sebagai berikut:
- Endpoint **/api/health** berhasil menampilkan status koneksi vendor
- Endpoint **/api/vendor/:name** berhasil menampilkan data vendor yang sudah dinormalisasi
- Endpoint **/api/integrate** berhasil menampilkan seluruh data vendor dalam satu format standar tanpa error