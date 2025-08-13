
import React, { useEffect, useState } from 'react'

// Desktop images (also used for mobile)
import Spices from '../assets/Ceylon-spices-1.jpg'
import Tea from '../assets/tea-and-coffee-sri-lanka.jpg'
import Herbs from '../assets/Ceylon-herbs.jpg'
import Coconut from '../assets/coconutg.jpg'
import Fruits from '../assets/Sri-lankan-Ceylon-fruits.jpg'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const desktopImages = [Spices, Tea, Herbs, Coconut, Fruits]

  // Change this to any rgba or hex color you want for the mesh overlay
  const meshColor = 'rgba(34,197,94,0.3)' // Tailwind green-500 with 30% opacity

  const texts = [
    {
      heading: "CEYLON HIGH QUALITY SPICES",
      description:
        "Ceylon spice manufacturer & exporter, We take any bulk orders & find sri lankan spices to international buyers",
      buttonLabel: "Explore Spices",
      style: { top: "20%", left: "40%" },
      headingClass: "text-3xl md:text-8xl font-extrabold font-serif",
      descriptionClass: "mt-3 text-sm md:text-xl font-light font-serif max-w-md",
      buttonClass:
        "mt-6 px-6 py-2 text-sm md:text-lg font-semibold font-sans rounded-full shadow-md block mx-auto",
    },
    {
      heading: "Tea & Coffee From Ceylon",
      description: "",
      buttonLabel: "Shop Now",
      style: { top: "30%", right: "10%" },
      headingClass: "text-2xl md:text-8xl font-semibold italic font-sans",
      descriptionClass: "mt-2 text-xs md:text-base font-normal font-sans max-w-sm",
      buttonClass:
        "mt-4 px-5 py-2 text-sm md:text-lg font-semibold font-sans rounded-full shadow-md block mx-auto",
    },
    {
      heading: "BEST HERBS IN THE WORLD",
      description: "",
      buttonLabel: "Browse Herbs",
      style: { bottom: "25%", left: "15%" },
      headingClass: "text-xl md:text-8xl font-extrabold font-mono",
      descriptionClass: "mt-2 text-xs md:text-base font-light font-mono max-w-sm",
      buttonClass:
        "mt-3 px-4 py-2 text-sm md:text-lg font-semibold font-mono rounded-full shadow-md block mx-auto",
    },
    {
      heading: "Ceylon Coconut",
      description:
        "Enjoy our range of organic coconut products, perfect for cooking, beauty, and health.",
      buttonLabel: "View Collection",
      style: { bottom: "20%", right: "15%" },
      headingClass: "text-2xl md:text-8xl font-semibold font-serif",
      descriptionClass: "mt-3 text-xs md:text-base font-normal font-serif max-w-md",
      buttonClass:
        "mt-5 px-6 py-2 text-sm md:text-lg font-semibold font-sans rounded-full shadow-md block mx-auto",
    },
    {
      heading: "Unique and Remarkable Taste",
      description: "Sri Lankan Fruits",
      buttonLabel: "See More",
      style: { top: "15%", left: "50%", transform: "translateX(-50%)" },
      headingClass:
        "mt-4 text-xs md:text-4xl font-light font-sans max-w-lg text-center md:text-center",
      descriptionClass:
        "text-3xl md:text-8xl font-bold uppercase font-sans text-center md:text-center",
      buttonClass:
        "mt-6 px-6 py-3 text-sm md:text-lg font-semibold font-sans rounded-full shadow-md block mx-auto",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % desktopImages.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index) => {
    setCurrentImage(index)
  }

  return (
    <>
      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-bar-fill {
          animation: progressFill 10s linear forwards;
        }
      `}</style>

      <section
        id="home"
        className="relative h-screen w-full overflow-hidden flex flex-col"
      >
        {/* Background Image + Text Overlay */}
        <div className="relative flex-grow">
          {/* Background Image */}
          <img
            src={desktopImages[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          />

          {/* Pixel Grid Overlay with customizable meshColor */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, ${meshColor} 1px, transparent 2px),
                radial-gradient(circle at 4px 4px, ${meshColor} 1px, transparent 2px)
              `,
              backgroundSize: '5px 5px',
              zIndex: 5,
            }}
          />

          {/* Overlay Text & Button */}
          <div
            className="absolute text-white px-4"
            style={{
              ...texts[currentImage].style,
              top: texts[currentImage].style.top,
              left: texts[currentImage].style.left,
              right: texts[currentImage].style.right,
              bottom: texts[currentImage].style.bottom,
              transform: texts[currentImage].style.transform || undefined,
              zIndex: 10,
              maxWidth: '600px',
            }}
          >
            <h1
              className={`${texts[currentImage].headingClass} drop-shadow-lg
                md:text-left text-center`}
            >
              {texts[currentImage].heading}
            </h1>

            <p
              className={`${texts[currentImage].descriptionClass} drop-shadow-md
                md:text-left text-center`}
            >
              {texts[currentImage].description}
            </p>

            <button
              className={`${texts[currentImage].buttonClass} bg-[#E7EFC7] text-[#3B3B1A]
                mt-4
                hover:bg-[#c9d6a4] transition-colors`}
            >
              {texts[currentImage].buttonLabel}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-300">
          <div
            key={currentImage} // key restarts animation on slide change
            className="h-full bg-green-600 progress-bar-fill"
          />
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full border-2 ${
                index === currentImage
                  ? 'bg-white border-green-600 scale-125'
                  : 'bg-gray-300 border-gray-400'
              } transition-transform duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
