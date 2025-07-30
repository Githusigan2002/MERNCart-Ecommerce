import express from "express";
import { addNewProduct, getAllProducts,getOneProduct,updateProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.get("/all-products", getAllProducts);
router.get("/:id", getOneProduct);
router.post("/add-products",addNewProduct);
router.put("/:id", updateProduct);
// router.delete("/api/products/:id", getOneProducts);
export default router;
