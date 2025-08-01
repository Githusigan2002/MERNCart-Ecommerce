import express from "express";
import {
  addNewProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/all-products", getAllProducts);
router.get("/:id", getOneProduct);

router.post("/add-products", authMiddleware, isAdmin, addNewProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);
export default router;
