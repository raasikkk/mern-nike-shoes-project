import "./catalogItems.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

const CatalogItems = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between mb-6">
        <motion.div
          className="catalog-item mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        >
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
              <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
              <p className="text-sm text-gray-500">Shoes</p>
              <p className="text-sm text-gray-500 mt-1">Men's</p>
              <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="catalog-item mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        >
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
              <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
              <p className="text-sm text-gray-500">Shoes</p>
              <p className="text-sm text-gray-500 mt-1">Men's</p>
              <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="catalog-item mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        >
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
              <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
              <p className="text-sm text-gray-500">Shoes</p>
              <p className="text-sm text-gray-500 mt-1">Men's</p>
              <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="catalog-item mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        >
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
              <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
              <p className="text-sm text-gray-500">Shoes</p>
              <p className="text-sm text-gray-500 mt-1">Men's</p>
              <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="catalog-item mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        >
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
              <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
              <p className="text-sm text-gray-500">Shoes</p>
              <p className="text-sm text-gray-500 mt-1">Men's</p>
              <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="catalog-item mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        >
          <Link to="/">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src="/nike_dunk_low_retro.png"
                alt="nike_shoe_image"
              ></img>
            </div>
            <div className="mt-2 360:ml-2 lg-ml-0">
              <h2 className="text-base font-medium">Nike Dunk Low Retro</h2>
              <p className="text-sm text-gray-500">Shoes</p>
              <p className="text-sm text-gray-500 mt-1">Men's</p>
              <h2 className="text-base font-medium mt-1">$130</h2>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogItems;
