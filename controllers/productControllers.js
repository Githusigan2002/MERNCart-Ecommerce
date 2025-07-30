import Products from "../models/Product.model.js";

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updates = req.body;

    const updatedProduct = await Products.findByIdAndUpdate(
      productId,
      updates,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: err.message,
    });
  }
};

export const addNewProduct = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newProduct = new Products({
      name,
      description,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added Sucessfull!" });
  } catch (error) {
    console.log("Failed to add product", error.message);
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
