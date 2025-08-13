
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import images
import spicesImg from "../assets/spices.jpg";
import cinnamonImg from "../assets/Cinnamon4.jpg";
import herbsImg from "../assets/herbs.jpg";
import coconutProductsImg from "../assets/Ceylon-coconut.png";
import coconutOilImg from "../assets/coconut-oil.png";
import fruitsImg from "../assets/fruits-ceylon.jpg";
import pineappleImg from "../assets/pineapple.png";
import teaImg from "../assets/Tea.jpg";
import coffeeImg from "../assets/tea-and-coffee.jpg";

// Product data
const products = [
  { id: 1, name: "SPICES", image: spicesImg, span: "lg:col-span-3 lg:row-span-2" },
  { id: 2, name: "CINNAMON", image: cinnamonImg, span: "lg:col-span-3 lg:row-span-1" },
  { id: 3, name: "HERBS", image: herbsImg, span: "lg:col-span-3 lg:row-span-1" },
  { id: 4, name: "COCONUT PRODUCTS", image: coconutProductsImg, span: "lg:col-span-2 lg:row-span-2" },
  { id: 5, name: "COCONUT OIL", image: coconutOilImg, span: "lg:col-span-2 lg:row-span-2" },
  { id: 6, name: "FRUITS", image: fruitsImg, span: "lg:col-span-2 lg:row-span-1" },
  { id: 7, name: "PINEAPPLE", image: pineappleImg, span: "lg:col-span-2 lg:row-span-1" },
  { id: 8, name: "TEA", image: teaImg, span: "lg:col-span-3 lg:row-span-2" },
  { id: 9, name: "COFFEE", image: coffeeImg, span: "lg:col-span-3 lg:row-span-2" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35 },
  }),
};

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-6 flex flex-col items-center gap-2 sm:mb-8 text-center">
          <h2 className="text-center text-4xl md:text-6xl lg:text-6xl font-bold leading-tight text-[#025c0e]">
            AGROWCELL <br className="hidden sm:block" />
            PRODUCTS
          </h2>
          <p className="text-md text-gray-800 dark:text-gray-800">
            Range of Spices, Herbs, Tea and Coffee, Fruits and vegetables, Coconut related products and Coir Products.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 [perspective:1200px] auto-rows-[160px] lg:auto-rows-[200px]">
          {products.map((product, idx) => (
            <motion.article
              key={product.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover={{ translateZ: 2 }}
              className={`group relative w-full h-full overflow-hidden rounded-2xl border border-black/5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${product.span}`}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* Full background image */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg text-center">
                  {product.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
