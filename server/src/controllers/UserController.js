import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel from "../models/User.js";

export const register = async (req, res) => {
  // Getting Name, Password and Role of the User from the request.
  const { name, password, role } = req.body;

  try {
    // Hashing the Password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name: req.body.name,
      password: hashedPassword,
      role: role || "user",
    });

    const savedUser = await user.save();

    // Generating JSON Web Token
    const token = jwt.sign(
      { _id: savedUser._id, role: savedUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    // Sending a response with user data and token to make sure everything worked properly
    res.status(201).json({
      message: "User registered successfully",
      userId: savedUser._id,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
