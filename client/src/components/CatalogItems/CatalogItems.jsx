import "./catalogItems.css";
import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import axios from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const CatalogItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getitems');
        console.log(response.data)
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleAddCart = async (itemId) => {
    console.log(itemId)

    try {
      const token = Cookies.get('token');
      const decode = jwtDecode(token);
      console.log(decode)
      const userId = decode._id

      await axios.post(`http://localhost:3000/api/carts/${userId}/items`, {
        itemId: itemId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Added item to your cart')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-6">
      {items.map((item) => (
        <motion.div
          key={item._id}
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
          <button onClick={() => handleAddCart(item._id)} className="text-left 360:mb-6 xl:mb-12">
            <div>
              <img
                className="360:w-[49.5vw] lg:w-[19.5vw] 360:h-[49.5vw] lg:h-[19.5vw] object-cover"
                src={`http://localhost:3000/${item.imageUrl}`}
                alt={item.name}
              />
            </div>
            <div className="mt-2 360:ml-2 lg:ml-0 360:max-w-[49.5vw] lg:max-w-[19.5vw]">
              <h2 className="text-base font-medium xl:text-[3vh]">{item.name}</h2>
              <p className="text-sm text-gray-500 xl:text-[2.5vh]">Shoes</p>
              <p className="text-sm text-gray-500 mt-1 xl:text-[2.5vh]">
                {item.gender === 'Male' ? "Men's" : item.gender === 'Female' ? "Women's": ""}
              </p>
              <h2 className="text-base font-medium mt-1 xl:text-[2.5vh]">${item.price}</h2>
            </div>
          </button>
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default CatalogItems;
