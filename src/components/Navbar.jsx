
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/AG-lOGO-1.png";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); // Close dropdown on toggle
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = {
    products: {
      title: "Products",
      items: [
        { name: "Spices" },
        { name: "Herbs" },
        { name: "Tea & Coffee" },
        { name: "Fruits & Vegetables" },
        { name: "Coconut Products" },
        { name: "Coir Products" }
      ]
    }
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-28 h-28 sm:w-40 sm:h-40 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/home" className="hover:text-gray-300">Home</Link>

            {Object.keys(menuItems).map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black z-50">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                      {menuItems[key].items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/${key}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="group flex items-start p-2 rounded-lg hover:bg-gray-100"
                        >
                          <div className="px-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Desktop Auth Button */}
          <div className="hidden lg:block">
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200">
              Auth Button
            </button>
          </div>

          {/* Hamburger menu icon for mobile */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black px-4 py-2 space-y-2">
            <Link to="/home" className="block hover:text-gray-300">Home</Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center w-full hover:text-gray-300"
              >
                Products
                <MdKeyboardArrowDown
                  className={`ml-2 h-5 w-5 transition-transform ${
                    activeDropdown === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'products' && (
                <div className="pl-4 space-y-1 text-sm">
                  {menuItems.products.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block hover:text-gray-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className="block hover:text-gray-300">Gallery</Link>
            <Link to="/about" className="block hover:text-gray-300">About</Link>
            <Link to="/contact" className="block hover:text-gray-300">Contact</Link>

            <button className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 mt-2">
              Auth Button
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
