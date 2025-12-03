import express from "express";
const app = express();

app.get("/api/products", (req, res) => {
  const data = [
    {
      "sku": "TSHIRT-001",
      "productName": "Kaos Ijen Crater",
      "price": 75000,
      "isAvailable": true
    },
    {
      "sku": "BAG-002",
      "productName": "Tas Gunung Kawah Ijen Edition",
      "price": 120000,
      "isAvailable": true
    },
    {
      "sku": "JACKET-003",
      "productName": "Jaket Windbreaker Banyuwangi",
      "price": 200000,
      "isAvailable": false
    }
  ];

  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Vendor B running on port ${port}`));
