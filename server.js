// Mengimpor modul Express
const express = require('express');
const app = express();
const port = 3000; // Gunakan port unik, misalnya 3001, karena Vendor B dan C mungkin menggunakan port lain

const cors = require('cors');
app.use(cors());


const vendorAData = [
    {
        "kd_produk": "A001",
        "nm_brg": "Kopi Bubuk 100g",
        "hrg": "15000", 
        "ket_stok": "ada"  
    },
    {
        "kd_produk": "A002",
        "nm_brg": "Kerupuk Rambak 250g",
        "hrg": "40000",
        "ket_stok": "habis"
    },
    {
        "kd_produk": "A003",
        "nm_brg": "Susu Kental Manis",
        "hrg": "10000",
        "ket_stok": "ada"
    },
    {
        "kd_produk": "A004",
        "nm_brg": "Gula Pasir 100g",
        "hrg": "10000", 
        "ket_stok": "ada"  
    },
    {
        "kd_produk": "A005",
        "nm_brg": "Telur Ayam Kampung 1kg",
        "hrg": "25000",
        "ket_stok": "habis"
    }
];

// Endpoint API untuk Vendor A
app.get('/api/vendorA/products', (req, res) => {
    res.json(vendorAData);
    console.log("Request diterima untuk Vendor A.");
});

// Menjalankan server
app.listen(port, () => {
    console.log(`API Vendor A (Warung Legacy) berjalan di http://localhost:${port}`);
    console.log(`Cek data: http://localhost:${port}/api/vendorA/products`);
});

module.exports = app;