import "./cartMain.css";
import { useState } from "react";

const CartMain = () => {
  const [count, setCount] = useState(1);
  const [openPromoCode, setOpenPromoCode] = useState(false);
  const [isItemVisible, setIsItemVisible] = useState(true);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDelete = () => {
    // Only target the cart-item div
    const cartItem = document.querySelector(".cart-item");
    if (cartItem) {
      cartItem.style.transition = "opacity 0.3s ease-out";
      cartItem.style.opacity = "0";

      setTimeout(() => {
        setIsItemVisible(false);
      }, 300);
    }
  };

  const orderClick = () => {
    alert("Successfully placed an order");
  };

  return (
    <section>
      <div className="lg:flex lg:flex-row lg:justify-between gap-6">
        <div className="w-full">
          <div className="360:text-center 360:py-4 360:border-b border-gray-500 lg:mb-6 lg:text-left lg:py-0 lg:border-0">
            <h1 className="font-medium 360:text-xl lg:text-2xl">Bag</h1>
          </div>
          <div className="360:py-1 lg:py-0">
            {isItemVisible && (
              <div className="cart-item 360:my-5 lg:my-0 lg:mb-6">
                <div className="item-content flex">
                  <div>
                    <img
                      className="360:w-[30vw] lg:w-[12vw]"
                      src="/nike_dunk_low_retro.png"
                      alt="cart_item"
                    />
                  </div>
                  <div className="ml-3">
                    <h2 className="font-medium">Nike Dunk Low Retro</h2>
                    <p className="font-medium text-sm text-gray-500">{`Men's Shoes`}</p>
                    <p className="mt-1 text-sm text-gray-500">Lifestyle</p>
                  </div>
                  <div className="font-medium ml-auto">
                    <h2>$115.00</h2>
                  </div>
                </div>

                <div className="action-button inline-flex gap-5 border border-gray-400 p-2 rounded-3xl mt-4">
                  <div className="action-icon delete-button">
                    <button onClick={handleDelete}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="action-icon active-count">
                    <span>{count}</span>
                  </div>
                  <div className="action-icon add-button">
                    <button onClick={handleIncrement}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="price-summary text-sm font-medium lg:min-w-[20vw]">
          <div className="summary-desc border-b 360:border-t lg:border-t-0 border-gray-300">
            <div className="360:py-4 lg:mb-6 lg:text-left lg:py-0 lg:border-0">
              <h1 className="font-medium 360:text-xl lg:text-2xl">Summary</h1>
            </div>

            <div className="promo-code">
              <button
                className="flex w-full items-center 360:gap-2 lg:gap-0 lg:justify-between"
                onClick={() => setOpenPromoCode(!openPromoCode)}
              >
                <p>Do you have a Promo Code?</p>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
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

            <div className="subtotal py-2 flex justify-between">
              <h2>Subtotal</h2>
              <p>$115.00</p>
            </div>

            <div className="shipping-and-handling py-2 flex justify-between">
              <h2>Estimated Shipping & Handling</h2>
              <p>Free</p>
            </div>

            <div className="estimated-tax pb-4 pt-2 flex justify-between">
              <h2>Estimated Tax</h2>
              <p>-</p>
            </div>
          </div>

          <div className="total py-4 lg:border-b border-gray-300 flex justify-between">
            <h2>Total</h2>
            <p>$115.00</p>
          </div>

          <div className="checkout mt-6">
            <button
              onClick={orderClick}
              className="w-full text-center 360:text-lg py-4 lg:text-sm bg-black text-white rounded-3xl"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartMain;
