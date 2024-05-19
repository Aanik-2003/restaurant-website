import React, { useState } from 'react';
import { motion } from 'framer-motion';
import m1 from '../../assets/m1.jpg';
import m2 from '../../assets/m2.jpg';
import m3 from '../../assets/m3.jpg';
import m4 from '../../assets/m4.jpg';
import m5 from '../../assets/m5.jpg';
import m6 from '../../assets/m6.jpg';
import m7 from '../../assets/m7.jpg';
import m8 from '../../assets/m8.jpg';
import m9 from '../../assets/m9.jpg';
import m10 from '../../assets/m10.jpg';
import sm from '../../assets/sm.jpg';
import m12 from '../../assets/m12.jpg';

const menuItems = [
  { id: 1, image: m1 },
  { id: 2, image: m2 },
  { id: 3, image: m3 },
  { id: 4, image: m4 },
  { id: 5, image: m5 },
  { id: 6, image: m6 },
  { id: 7, image: m7 },
  { id: 8, image: m8 },
  { id: 9, image: m9 },
  { id: 10, image: m10 },
  { id: 11, image: sm },
  { id: 12, image: m12 },
  // Add more menu items as needed
];

function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-20">Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(index)}
          >
            <img
              src={item.image}
              alt={`Dish ${item.id}`}
              className="w-full h-auto"
              style={{ maxWidth: '100%' }}
            />
          </motion.div>
        ))}
      </div>
      {activeIndex !== null && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.img
            src={menuItems[activeIndex].image}
            alt={`Dish ${menuItems[activeIndex].id}`}
            className="max-w-full"
            style={{ maxHeight: '90vh' }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </div>
  );
}

export default Menu;
