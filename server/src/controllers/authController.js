import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel from "../models/User.js";
import Cart from "../models/Cart.js"

export const register = async (req, res) => {
  // Getting Name, Password and Role of the User from the request.
  const { name, password, role } = req.body;

  try {
    // Hashing the Password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new User object with hashed password and default role.
    const newUser = new UserModel({
      name: req.body.name,
      password: hashedPassword,
      role: role || "user",
    });

    // Saving the User to the database.
    const user = await newUser.save();

    // Creating a cart for the new user
    const newCart = new Cart({ user: user._id, items: [] });
    await newCart.save();

    // Generating JSON Web Token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    // Sending a response with user data and token to ensure everything worked properly
    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
      token,
      cartId: newCart._id, // Optionally send the cart ID
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const login = async (req, res) => {
    // Getting Name and Password of the User from the request.
  const { name, password } = req.body;

  try {
    // Finding the User in the database by name.
    const user = await UserModel.findOne({ name });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Comparing the provided password with the hashed password in the database.
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credential" });
    }

    // Generating JSON Web Token
    const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );

    // Sending a response with user id and token to make sure everything worked properly
    res.json({
        message: "User logged in successfully",
        userId: user._id,
        token,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
