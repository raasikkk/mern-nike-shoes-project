import "./dedication.css/";
import { motion } from "framer-motion";

const Dedication = () => {
  return (
    <section>
      <motion.div className="dedication-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 25,
      }}>
        <div className="dedication-img">
          <img src="/dedication_img.png" alt="nike_shoe" />
        </div>

        <div className="dedication-content">
          <h1>Dedicated to quality and result</h1>
          <p>
            Prodividing the best shoe of varous types and manufacturing them for
            true travel lovers. These items are light and comfortable
          </p>
          <button>Read More</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Dedication;
