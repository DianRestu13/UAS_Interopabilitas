const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const vendorAData = [
  { 
    kd_produk: "A001",
    nm_brg: "Kopi Bubuk 100g",
    hrg: "15000",
    ket_stok: "ada"
  },
  { 
    kd_produk: "A002",
    nm_brg: "Kerupuk Rambak 250g",
    hrg: "40000",
    ket_stok: "habis"
  },
  { 
    kd_produk: "A003",
    nm_brg: "Susu Kental Manis",
    hrg: "10000",
    ket_stok: "ada"
  },
  { 
    kd_produk: "A004",
    nm_brg: "Gula Pasir 100g",
    hrg: "10000",
    ket_stok: "ada"
  },
  { 
    kd_produk: "A005",
    nm_brg: "Telur Ayam Kampung 1kg",
    hrg: "25000",
    ket_stok: "habis"
  }
];

app.get('/', (req, res) => {
  res.json(vendorAData);
});

app.get('/api/vendorA', (req, res) => {
  res.json(vendorAData);
});

module.exports = app;