// import React from "react";
// import Navbar from "../components/Navbar";

// const About = () => {
//   return (
//     <>
//       <section className="bg-gradient-to-b from-white to-green-50 py-12 px-6 md:px-16 pt-30">
//         {/* Header */}
//         <div className="max-w-5xl mx-auto text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
//             AGROWCELL
//           </h1>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Welcome to Agrowcell International Private Limited, your trusted partner in sourcing the finest Ceylon spices, tropical fruits, and premium coconut-related products from the heart of Sri Lanka. Established with a vision to bring the authentic flavors of the island to the world, we take immense pride in delivering nature’s goodness to your doorstep.
//           </p>
//         </div>

//         {/* Our Roots */}
//         <div className="max-w-5xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Roots</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Founded in Sri Lanka, the land renowned for its rich biodiversity and agricultural heritage, Agrowcell International Private Limited has blossomed into a premier exporter of high-quality spices, including the world-famous Ceylon cinnamon, exotic papaya, luscious bananas, and a wide array of coconut-based delights. Our journey is rooted in sustainable farming practices, ethical sourcing, and a deep commitment to preserving the environment.
//           </p>
//         </div>

//         {/* What Sets Us Apart */}
//         <div className="max-w-5xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-green-700 mb-4">What Sets Us Apart</h2>
//           <p className="text-gray-700 leading-relaxed">
//             At Agrowcell International Private Limited, we believe in the purity of nature. Our products are carefully cultivated and harvested by skilled local farmers who have mastered the art of sustainable agriculture over generations. We ensure that each spice, fruit, and coconut product that reaches you is of the highest quality, retaining its natural goodness and flavors.
//           </p>
//         </div>

//         {/* Our Commitment */}
//         <div className="max-w-5xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Commitment</h2>
//           <p className="text-gray-700 leading-relaxed">
//             We are not just exporters; we are custodians of tradition and quality. Our commitment to excellence is reflected in every batch we produce. We work closely with local communities, empowering them and fostering economic growth. Through fair trade practices and ethical business standards, we create a positive impact on both our farmers and customers.
//           </p>
//         </div>

//         {/* Explore Our Range */}
//         <div className="max-w-5xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-green-700 mb-4">Explore Our Range</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Dive into the world of Agrowcell International Private Limited and discover the true essence of Sri Lankan spices and tropical fruits. Whether you are a culinary enthusiast, a health-conscious consumer, or a business looking for premium ingredients, our diverse range caters to all. From the warmth of Ceylon cinnamon to the sweetness of ripe papayas, we bring the best of Sri Lanka to your table.
//           </p>
//         </div>

//         {/* Get in Touch */}
//         <div className="max-w-5xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-green-700 mb-4">Get in Touch</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Join hands with us in our mission to spread the goodness of Sri Lankan agriculture across the globe. Experience the unmatched quality, authenticity, and taste of our products. For inquiries, partnerships, or orders, feel free to reach out. Let’s embark on a flavorful journey together!
//           </p>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             At Agrowcell International Private Limited, we are not just exporting products; we are exporting the essence of Sri Lanka’s natural abundance. Come, savor the difference.
//           </p>
//         </div>

//         {/* Mission & Vision */}
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//           <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">Mission</h3>
//             <p className="text-gray-700 leading-relaxed">
//               To be the world’s leading exporter of Ceylon’s finest agricultural products, renowned for our commitment to sustainable and ethical sourcing, innovative product development, and exceptional customer service.
//             </p>
//           </div>
//           <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">Vision</h3>
//             <p className="text-gray-700 leading-relaxed">
//               To elevate the global appreciation for the unique flavors, aromas, and versatility of Ceylon’s agricultural bounty, while empowering Sri Lankan farmers and communities through sustainable and ethical practices.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;




import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <section className="relative bg-gradient-to-b from-white to-green-50 py-12 px-6 md:px-16 pt-30">
        {/* Background image overlay */}
        <div className="absolute inset-0 bg-[url('/images/spices-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>

        {/* Header */}
        <div className="relative max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-lg">
            AGROWCELL
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to Agrowcell International Private Limited, your trusted partner in sourcing the finest Ceylon spices, tropical fruits, and premium coconut-related products from the heart of Sri Lanka. Established with a vision to bring the authentic flavors of the island to the world, we take immense pride in delivering nature’s goodness to your doorstep.
          </p>
        </div>

        {/* Sections with cards and subtle background */}
        {[
          { title: "Our Roots", content: "Founded in Sri Lanka, the land renowned for its rich biodiversity and agricultural heritage, Agrowcell International Private Limited has blossomed into a premier exporter of high-quality spices, including the world-famous Ceylon cinnamon, exotic papaya, luscious bananas, and a wide array of coconut-based delights. Our journey is rooted in sustainable farming practices, ethical sourcing, and a deep commitment to preserving the environment." },
          { title: "What Sets Us Apart", content: "At Agrowcell International Private Limited, we believe in the purity of nature. Our products are carefully cultivated and harvested by skilled local farmers who have mastered the art of sustainable agriculture over generations. We ensure that each spice, fruit, and coconut product that reaches you is of the highest quality, retaining its natural goodness and flavors." },
          { title: "Our Commitment", content: "We are not just exporters; we are custodians of tradition and quality. Our commitment to excellence is reflected in every batch we produce. We work closely with local communities, empowering them and fostering economic growth. Through fair trade practices and ethical business standards, we create a positive impact on both our farmers and customers." },
          { title: "Explore Our Range", content: "Dive into the world of Agrowcell International Private Limited and discover the true essence of Sri Lankan spices and tropical fruits. Whether you are a culinary enthusiast, a health-conscious consumer, or a business looking for premium ingredients, our diverse range caters to all. From the warmth of Ceylon cinnamon to the sweetness of ripe papayas, we bring the best of Sri Lanka to your table." },
          { title: "Get in Touch", content: "Join hands with us in our mission to spread the goodness of Sri Lankan agriculture across the globe. Experience the unmatched quality, authenticity, and taste of our products. For inquiries, partnerships, or orders, feel free to reach out. Let’s embark on a flavorful journey together! At Agrowcell International Private Limited, we are not just exporting products; we are exporting the essence of Sri Lanka’s natural abundance. Come, savor the difference." },
        ].map((section, idx) => (
          <div key={idx} className="relative max-w-5xl mx-auto mb-12">
            <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h2 className="text-3xl font-bold text-green-700 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}

        {/* Mission & Vision */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-green-50/80 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-green-800 mb-3">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the world’s leading exporter of Ceylon’s finest agricultural products, renowned for our commitment to sustainable and ethical sourcing, innovative product development, and exceptional customer service.
            </p>
          </div>
          <div className="bg-green-50/80 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-green-800 mb-3">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To elevate the global appreciation for the unique flavors, aromas, and versatility of Ceylon’s agricultural bounty, while empowering Sri Lankan farmers and communities through sustainable and ethical practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
