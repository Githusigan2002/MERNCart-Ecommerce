const express = require("express");

const router = express.Router();

router.get("/api/products", getAllProducts);
router.get("/api/products/:id", getOneProducts);
router.post("/api/products", addNewProduct);
router.put("/api/products/:id", getOneProducts);
router.delete("/api/products/:id", getOneProducts);
