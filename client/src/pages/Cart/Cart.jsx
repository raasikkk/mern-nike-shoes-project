import CartMain from "../../components/CartMain/CartMain.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import RecSlider from "../../components/RecSlider/RecSlider.jsx";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="360:px-3 lg:py-20">
        <div className="lg:px-64">
          <CartMain />
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
