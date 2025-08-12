import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, GreenTech",
    text: "This company exceeded our expectations with outstanding quality and service.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Head, FreshFarm",
    text: "Their professionalism and dedication are unmatched. Highly recommend them!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Smith",
    role: "Operations Manager, EcoGoods",
    text: "Working with them was a great experience. They truly care about customer needs.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Emily Carter",
    role: "Founder, OrganicLife",
    text: "Absolutely the best service we've had in years. Trustworthy and reliable!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Brown",
    role: "Director, Nature's Choice",
    text: "Fantastic team! They delivered exactly what they promised and more.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Adjust number of cards based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    let visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-10 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We take pride in delivering top-notch service to our clients. Here's what they have to say:
        </p>

        <div
          className={`grid gap-6 ${
            cardsToShow === 1
              ? "grid-cols-1"
              : cardsToShow === 2
              ? "sm:grid-cols-2"
              : "lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          }`}
        >
          {getVisibleTestimonials().map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-green-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-green-600">{t.role}</p>
              <p className="text-gray-600 mt-3">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;