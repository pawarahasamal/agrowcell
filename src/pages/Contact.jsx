// Contact.jsx
import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 pt-30 sm:px-6 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Have questions or want to collaborate? Reach out to us! We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-green-100 hover:shadow-green-300 transition-shadow duration-500">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="11"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="flex flex-col gap-8">
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-green-100 hover:shadow-green-300 transition-shadow duration-500">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Contact Details</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-center gap-3 hover:text-green-800 transition-colors">
                <HiOutlineMail className="text-green-700 w-6 h-6" />
                <a href="mailto:info@agrowcell.com" className="font-medium">info@agrowcell.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-green-800 transition-colors">
                <HiOutlinePhone className="text-green-700 w-6 h-6" />
                <a href="tel:+1234567890" className="font-medium">+1 234 567 890</a>
              </li>
              <li className="flex items-center gap-3 hover:text-green-800 transition-colors">
                <HiOutlineLocationMarker className="text-green-700 w-6 h-6" />
                <span className="font-medium">123 Agrowcell Street, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-medium">Working Hours:</span> Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-100 hover:shadow-green-300 transition-shadow duration-500">
            <iframe
              title="Agrowcell Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456!2d79.861243!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259123456789%3A0xabcdef123456789!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1691912345678!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;