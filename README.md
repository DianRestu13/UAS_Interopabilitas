# Vendor A API Service

## 1. Pendahuluan
Vendor A API Service merupakan aplikasi backend sederhana yang dibangun menggunakan Node.js dan Express.js. Aplikasi ini berfungsi sebagai layanan REST API yang menyediakan data produk dari Vendor A dalam format JSON.

API ini dirancang untuk mensimulasikan sistem integrasi data vendor yang dapat digunakan oleh aplikasi lain, seperti sistem manajemen produk, marketplace, maupun aplikasi frontend berbasis web atau mobile.

---

## 2. Tujuan Pengembangan
Tujuan dari pengembangan Vendor A API Service adalah:
1. Menyediakan data produk Vendor A secara terstruktur melalui REST API
2. Melatih implementasi backend sederhana menggunakan Express.js
3. Mensimulasikan integrasi data vendor pada sistem terdistribusi
4. Mempermudah pertukaran data antar aplikasi menggunakan format JSON

---

## 3. Ruang Lingkup Sistem
Ruang lingkup aplikasi ini meliputi:
- Penyediaan data produk Vendor A
- Penyajian data dalam format JSON
- Penyediaan endpoint API yang dapat diakses melalui HTTP
- Dukungan akses lintas domain menggunakan CORS

Aplikasi ini belum mencakup fitur autentikasi, database, maupun manipulasi data (CRUD).

---

## 4. Teknologi yang Digunakan
Aplikasi ini dibangun menggunakan teknologi berikut:
- Node.js
- Express.js
- CORS

---

## 5. Struktur Data Produk
Data produk Vendor A disimpan dalam bentuk array objek JavaScript.  
Setiap objek produk memiliki atribut sebagai berikut:
- `kd_produk` : kode unik untuk mengidentifikasi produk
- `nm_brg` : nama barang atau produk
- `hrg` : harga produk dalam satuan rupiah
- `ket_stok` : keterangan ketersediaan stok produk

Contoh struktur data produk:
```json
{
  "kd_produk": "A001",
  "nm_brg": "Kopi Bubuk 100g",
  "hrg": "15000",
  "ket_stok": "ada"
}
