import express from "express";
import { addNewProduct, getAllProducts } from "../controllers/productControllers.js";

const router = express.Router();

router.get("/all-products", getAllProducts);
// router.get("/api/products/:id", getOneProducts);
router.post("/add-products",addNewProduct);
// router.put("/api/products/:id", getOneProducts);
// router.delete("/api/products/:id", getOneProducts);
export default router;
