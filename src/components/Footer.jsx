import React from "react";
import logo from "../assets/AG-lOGO.png"; // <-- replace with your logo path

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-[#abd69a52] text-gray-800 py-8 mt-5 ">
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
              <a href="./about.html" className="hover:text-blue-600">
                ℹ️ About Us
              </a>
            </li>
            <li>
              <a href="./product.html" className="hover:text-blue-600">
                🛒 Product
              </a>
            </li>
            <li>
              <a href="./contact.html" className="hover:text-blue-600">
                📞 Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                📜 Terms of Use
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
            className="w-36 md:w-40 lg:w-48 drop-shadow-lg"
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
