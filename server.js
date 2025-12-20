const express = require('express');
const app = express();
const port = 3000;

const products = [
    {
        id: 501,
        details: {
            name: "Nasi Tempong",
            category: 'Food'
        },
        pricing: {
            base_price: 20000,
            tax: 2000
        },
        stock: 50
    },
    {
        id: 502,
        details: {
            name: "Es Teh Manis",
            category: 'Drink'
        },
        pricing: {
            base_price: 5000,
            tax: 500
        },
        stock: 100
    },
    {
        id: 503,
        details: {
            name: "Sate Ayam",
            category: 'Food'
        },
        pricing: {
            base_price: 15000,
            tax: 1500
        },
        stock: 30
    },
    {
        id: 504,
        details: {
            name: "Jus Jambu",
            category: 'Drink'
        },
        pricing: {
            base_price: 12000,
            tax: 1200
        },
        stock: 20
    }
];

app.get('/', (req, res) => {
    res.json({
        message: 'Vendor C API - Resto & Kuliner',
        endpoints: {
            all_product : 'GET /api/products',
            product_by_id : 'GET /api/products/:id',
            example: "GET /api/menu/501"
        },
        total_products: products.length,
        available_ids: products.map(p => p.id)
    })
});

// get api/products - semua produk
app.get('/api/products', (req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}] GET /api/products`);
    res.json(products);
});

// get api/products/:id - produk berdasarkan id
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`[${new Date().toLocaleTimeString()}] GET /api/products/${id}`);

    const item = products.find(p => p.id === id);
    if (!item) {
        return res.status(404).json({
            success: false,
            error: 'Menu not found',
            message: `Produk dengan ID${id} tidak ditemukan`
        });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;