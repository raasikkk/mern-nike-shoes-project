import CartMain from "../../components/CartMain/CartMain.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import RecSlider from "../../components/RecSlider/RecSlider.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { userId } = useParams();
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a flag to prevent double fetching
    let isSubscribed = true;

    const fetchCart = async () => {
      try {
        const token = document.cookie
          .split(";")
          .find((item) => item.trim().startsWith("token="));
        const authToken = token ? token.split("=")[1] : null;

        if (!authToken) {
          console.error("No authentication token found");
          return;
        }

        const response = await axios.get(
          `http://localhost:3000/api/carts/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        // Only update state if the component is still mounted
        if (isSubscribed) {
          setCart(response.data);
          console.log(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isSubscribed) {
          console.error(
            "Error fetching cart:",
            error.response?.status,
            error.response?.data || error.message
          );
          setIsLoading(false);
        }
      }
    };

    if (userId) {
      fetchCart();
    }

    // Cleanup function
    return () => {
      isSubscribed = false;
    };
  }, [userId]);

  console.log(cart)

  return (
    <>
      <Header />
      <div className="360:px-3 lg:py-20">
        <div className="lg:px-64">
          <CartMain cart={cart} />
        </div>
        <div className="lg:px-36">
          <RecSlider />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
