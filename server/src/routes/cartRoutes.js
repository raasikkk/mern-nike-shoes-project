import express from "express";

import Cart from "../models/Cart.js";

import { authenticateToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/carts", authenticateToken, async (req, res) => {
  const { userId } = req.body;
  try {
    const newCart = new Cart({ user: userId, items: [] });
    await newCart.save();
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
    const cart = await Cart.findOne({ user: userId }).populate("items.itemId");

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
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding item to Cart" });
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
