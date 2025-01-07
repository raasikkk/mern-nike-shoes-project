import "./catalogItems.css";
import { useState, useEffect } from 'react'
import { Link } from "react-router";
import { motion } from "framer-motion";
import axios from 'axios'

const CatalogItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getitems');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
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
          <Link to={`/item/${item.id}`}>
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19vw]"
                src={`http://localhost:3000/${item.imageUrl}`}
                alt={item.name}
              />
            </div>
            <div className="mt-2 360:ml-2 lg:ml-0">
              <h2 className="text-base font-medium">{item.name}</h2>
              <p className="text-sm text-gray-500">Shoes</p> {/* Assuming 'category' exists */}
              <p className="text-sm text-gray-500 mt-1">{item.gender}</p> {/* Assuming 'gender' exists */}
              <h2 className="text-base font-medium mt-1">${item.price}</h2> {/* Assuming 'price' exists */}
            </div>
          </Link>
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default CatalogItems;
