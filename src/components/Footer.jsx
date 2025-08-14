import React from "react";
import logo from "../assets/AG-lOGO.png"; // <-- replace with your logo path
// bg-[#abd69a52]
export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white text-gray-800 py-8 mt-5 "> 
      <div className="mt-8">
        <div className="border-t-2 border-dotted border-gray-400"><br></br><br></br></div>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-base text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <ul className="space-y-3">
            <li>
              <strong>🏢 Agrowcell International (Pvt) Ltd</strong>
              <br /><br />
              1571/7, Sirimal Estate,
              <br />
              Kottawa, Pannipitiya,
              <br />
              Sri Lanka.
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-4">🔗 Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="./about" className="hover:text-blue-600">
                🔹 About Us
              </a>
            </li>
            <li>
              <a href="./products" className="hover:text-blue-600">
                🔹 Products
              </a>
            </li>
            <li>
              <a href="./contact" className="hover:text-blue-600">
                🔹 Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h5 className="font-semibold mb-4">📩 Customer Support</h5>
          <ul className="space-y-3">
            <li>
              📱{" "}
              <a href="tel:+94760560860" className="hover:text-blue-600">
                +94 760 560 860
              </a>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:info@agrowcell.com"
                className="hover:text-blue-600"
              >
                info@agrowcell.com
              </a>
            </li>
            <li>
              🌐{" "}
              <a
                href="https://www.agrowcell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                www.agrowcell.com
              </a>
            </li>
          </ul>
        </div>

        {/* Company Logo */}
        <div className="flex items-center justify-center md:justify-end">
          <img
            src={logo}
            alt="Company Logo"
            className="w-40 md:w-40 lg:w-68 drop-shadow-lg"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © Agrowcell All Rights Reserved
      </div>
    </footer>
  );
}
