import Products from "../models/Product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if (!products) return res.json("Products Empty");
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
