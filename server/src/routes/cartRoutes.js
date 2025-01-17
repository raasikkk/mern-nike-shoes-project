import express from "express";

import Cart from "../models/Cart.js";

import { authenticateToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/carts", authenticateToken, async (req, res) => {
  const { userId } = req.body;

  console.log("Request Body:", req.body);
  console.log("Authenticated User ID:", req.user._id);

  // Ensure the userId matches the authenticated user's ID
  if (userId !== req.user._id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const existingCart = await Cart.findOne({ user: userId });
    if (existingCart) {
      return res.status(400).json({ message: "A cart already exists for this user." });
    }

    const newCart = new Cart({ user: userId, items: [] });
    await newCart.save();

    res.status(201).json(newCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating Cart" });
  }
});

router.get("/carts/:userId", authenticateToken, async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.itemId");
    
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving Cart" });
  }
});

router.post("/carts/:userId/items", authenticateToken, async (req, res) => {
  const { userId } = req.params;
  const { itemId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId }).populate('items.itemId');

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.itemId.toString() === itemId
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ itemId, quantity });
      cart = await cart.populate('items.itemId');
    }

    const totalPrice = cart.items.reduce((total, item) => {
      const price = item.itemId && item.itemId.price ? item.itemId.price : 0;
      return total + (price * item.quantity);
    }, 0);

    cart.totalPrice = totalPrice;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding item to Cart" });
  }
});

// Increment the quantity of an item in the cart
router.post("/carts/:userId/items/:itemId", authenticateToken, async (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;

  try {
    console.log('Received request:', {
      userId,
      itemId,
      quantity
    });

    const cart = await Cart.findOne({ user: userId }).populate('items.itemId');

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.itemId.toString() === itemId
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    const totalPrice = cart.items.reduce((total, item) => {
      const price = item.itemId && item.itemId.price ? item.itemId.price : 0;
      return total + (price * item.quantity);
    }, 0);

    cart.totalPrice = totalPrice;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating item quantity in Cart" });
  }
});

// Remove an item from the cart
router.delete("/carts/:userId/items/:itemId", authenticateToken, async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the item from the cart
    cart.items = cart.items.filter((item) => item.itemId.toString() !== itemId);
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Error removing item from cart", error: err });
  }
});

// Export the router
export default router;
