import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role,
    });

    await newUser.save();
    res.status(201).json({ message: "User Registred Sucessfull!" });
  } catch (error) {
    console.log("Registration Failed!", error.message);
  }
};
