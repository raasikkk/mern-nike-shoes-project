import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <motion.div className="hero-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 25,
      }}>
        <div className="hero-content">
          <h1>Find your dream pair</h1>
          <p>{`Find your dream sneakers and elevate your style with Nike's exclusive collections.`}</p>
          <button className="hero-button">Explore More</button>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hero image"></img>
          <p className="hero-image-title title-shoe">NIKE SB DUNK</p>
          <p className="hero-image-title title-discount">30%<br></br>Discount</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
