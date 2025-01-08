import "./cartMain.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router"

const CartMain = ({ cart }) => {
  const { userId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [openPromoCode, setOpenPromoCode] = useState(false);

  useEffect(() => {
    setCartItems(cart?.items || []);
  }, [cart]);

  const handleIncrement = async (itemId) => {
    try {
      const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
  
      if (cartItem) {
        cartItem.style.transition = "opacity 0.3s ease-out";
        cartItem.style.opacity = "0";
      }
  
      await new Promise(resolve => setTimeout(resolve, 300));
  
      const token = document.cookie
        .split(';')
        .find(item => item.trim().startsWith('token='));
      const authToken = token ? token.split('=')[1] : null;
  
      if (!authToken) {
        console.error("No authentication token found");
        return;
      }

      const quantity = 1;
  
      const response = await axios.patch(`http://localhost:3000/api/carts/${userId}/items/${itemId}`, {
        quantity: quantity,
      }, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      setCartItems(prevItems => prevItems.map(item => {
        if (item.itemId._id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }));
  
    } catch (error) {
      console.error("Error incrementing item:", error.response?.data || error.message);
      const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
      if (cartItem) {
        cartItem.style.opacity = "1";
      }
    }
  };

  const deleteCartItem = async (itemId) => {
    try {
      const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
  
      if (cartItem) {
        cartItem.style.transition = "opacity 0.3s ease-out";
        cartItem.style.opacity = "0";
      }
  
      await new Promise(resolve => setTimeout(resolve, 300));
  
      const token = document.cookie
        .split(';')
        .find(item => item.trim().startsWith('token='));
      const authToken = token ? token.split('=')[1] : null;
  
      if (!authToken) {
        console.error("No authentication token found");
        return;
      }

      await axios.delete(`http://localhost:3000/api/carts/${userId}/items/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      // Update cartItems and remove the item from the state
      setCartItems(prevItems => prevItems.filter(item => item.itemId._id !== itemId));
  
    } catch (error) {
      console.error("Error deleting item:", error.response?.data || error.message);
      const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
      if (cartItem) {
        cartItem.style.opacity = "1";
      }
    }
  };

  const orderClick = () => {
    alert("Successfully placed an order");
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="xl:text-3xl 360:mt-10 xl:mt-0">Your cart is empty.</div>;
  }

  return (
    <section>
      <motion.div
        className="lg:flex lg:flex-row lg:justify-between gap-6 xl:gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px", once: true }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
        }}
      >
        <div className="w-full">
          <div className="360:text-center 360:py-4 360:border-b border-gray-500 lg:mb-6 lg:text-left lg:py-0 lg:border-0 xl:mb-10">
            <h1 className="font-medium 360:text-xl lg:text-2xl xl:text-4xl">Bag</h1>
          </div>
          <div className="360:py-1 lg:py-0">
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <motion.div
                  key={item.itemId._id}
                  data-item-id={item.itemId._id}
                  className="cart-item 360:my-5 lg:my-0 lg:mb-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <div className="item-content flex">
                    <div>
                      <img
                        className="360:w-[30vw] 360:h-[30vw] lg:w-[12vw] lg:h-[12vw] object-cover"
                        src={`http://localhost:3000/${item.itemId.imageUrl}`}
                        alt="cart_item"
                      />
                    </div>
                    <div className="ml-3">
                      <h2 className="font-medium xl:text-3xl">{item.itemId.name}</h2>
                      <p className="font-medium text-sm text-gray-500 xl:text-xl xl:mt-1">
                      {item.itemId.gender === 'Male' ? "Men's" : item.itemId.gender === 'Female' ? "Women's" : ""}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 xl:text-xl">{item.itemId.sportsAndActivities}</p>
                    </div>
                    <div className="font-medium ml-auto xl:text-3xl">
                      <h2>${item.itemId.price}</h2>
                    </div>
                  </div>

                  <div className="action-button inline-flex gap-5 border border-gray-400 p-2 rounded-3xl mt-4 xl:p-4 xl:rounded-full xl:gap-10">
                    <div className="action-icon delete-button">
                      <button onClick={() => deleteCartItem(item.itemId._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                          className="xl:w-10 xl:h-10"
                        >
                          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                      </button>
                    </div>
                    <div className="action-icon active-count">
                      <span className="xl:text-3xl">{item.quantity}</span>
                    </div>
                    <div className="action-icon add-button">
                      <button onClick={() => handleIncrement(item.itemId._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                          className="xl:w-10 xl:h-10"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="price-summary text-sm font-medium lg:min-w-[20vw]">
          <div className="summary-desc border-b 360:border-t lg:border-t-0 border-gray-300">
            <div className="360:py-4 lg:mb-6 lg:text-left lg:py-0 lg:border-0 xl:mb-10">
              <h1 className="font-medium 360:text-xl lg:text-2xl xl:text-4xl">Summary</h1>
            </div>

            <div className="promo-code xl:pb-2">
              <button
                className="flex w-full items-center 360:gap-2 lg:gap-0 lg:justify-between"
                onClick={() => setOpenPromoCode(!openPromoCode)}
              >
                <p className="xl:text-2xl">Do you have a Promo Code?</p>
                <svg
                  className={`w-4 h-4 xl:w-6 xl:h-6 transition-transform duration-200 ${
                    openPromoCode ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`
                    transition-all duration-200 ease-in-out
                    origin-top overflow-hidden pb-2
                    ${
                      openPromoCode
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                    `}
              >
                <input
                  className="ml-4 py-2 px-4 mt-4 border-l border-gray-500"
                  type="text"
                  placeholder="Enter your Promo Code"
                />
              </div>
            </div>

            <div className="subtotal py-2 xl:py-4 flex justify-between">
              <h2 className="xl:text-2xl">Subtotal</h2>
              <p className="xl:text-2xl"> {`$${cart.totalPrice}`} </p>
            </div>

            <div className="shipping-and-handling py-2 xl:py-4 flex justify-between">
              <h2 className="xl:text-2xl">Estimated Shipping & Handling</h2>
              <p className="xl:text-2xl">Free</p>
            </div>

            <div className="estimated-tax pb-4 pt-2 xl:pb-8 xl:pt-4 flex justify-between">
              <h2 className="xl:text-2xl">Estimated Tax</h2>
              <p className="xl:text-2xl">-</p>
            </div>
          </div>

          <div className="total py-4 lg:border-b border-gray-300 flex justify-between xl:py-8">
            <h2 className="xl:text-2xl">Total</h2>
            <p className="xl:text-2xl"> {`$${cart.totalPrice}`} </p>
          </div>

          <div className="checkout mt-6 xl:mt-10">
            <button
              onClick={orderClick}
              className="w-full text-center 360:text-lg py-4 lg:text-sm xl:text-2xl xl:py-6 bg-black text-white rounded-3xl"
            >
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CartMain;
