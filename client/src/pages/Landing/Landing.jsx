// import styles from "./landing.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures.jsx";
import Collection from "../../components/Collection/Collection.jsx";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServiceFeatures />
      <Collection />
      <Footer />
    </>
  );
};

export default Landing;
