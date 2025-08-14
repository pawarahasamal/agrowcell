import React from "react";
import bannerImage from "../../assets/Tea.jpg"; // Banner image
import cinnamonImg from "../../assets/spices.jpg"; 
import spicesImg from "../../assets/Coconut-from-ceylon.png";
import cardamomImg from "../../assets/spices.jpg";
import clovesImg from "../../assets/spices.jpg";

const Coconutproducts = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-52 md:h-60 lg:h-72">
        <img
          src={bannerImage}
          alt="Spices Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Quality Pure Spices
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-4 md:px-12 lg:px-60 py-12 space-y-16">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              QUALITY PURE SPICES
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
              FROM CEYLON
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The Asian region's cooks are well experienced in using spices to make
              food more delicious as in the paradise of spices. Spices augment the
              color, aroma and taste of food. Furthermore, many of them include
              health advantages. If the spices are used in the appropriate
              combination, spices will change the simplest food into a scented and
              well-off wisdom in the world of cooking.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={spicesImg}
              alt="Spices Bowl"
              className="w-full max-w-sm "
            />
          </div>
        </div>

        {/* Cinnamon */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={cinnamonImg}
            alt="Cinnamon"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              CINNAMON
            </h3>
            <p className="text-gray-600 mb-4">
              Cinnamon is a popular spice for centuries and one of the first traded
              spices that traditionally obtained from the outer brown bark of mature
              cinnamon tree. After dried and rolls into a tubular-stick, is known as a
              quill. Cinnamon is a moderately size ever green tree that native to Sri
              Lanka. Ceylon cinnamon considers as the true cinnamon and Sri Lanka is
              well known in the international market for its unique and quality cinnamon.
              There are some value added products such as Cinnamon oil, Cinnamon powder
              and Tablets.
            </p>
            <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
              VIEW PRODUCT
            </button>
          </div>
        </div>

        {/* Cardamom */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={cardamomImg}
            alt="Cardamom"
            className="rounded-lg shadow-lg w-full object-cover md:order-2 md:col-start-2"
          />
          <div className="md:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              CARDAMOM
            </h3>
            <p className="text-gray-600 mb-4">
              Cardamom is an expensive spice that derived from the seeds of several
              plants in the Ginger family. Because of its intense and slightly sweet
              flavor can be seen used in both many savory and sweet recipes. Not only as
              a spice but also as traditional medicine that have been used since ancient
              times it have impressive medicinal properties.
            </p>
            <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
              VIEW PRODUCT
            </button>
          </div>
        </div>

        {/* Cloves */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={clovesImg}
            alt="Cloves"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              CLOVES
            </h3>
            <p className="text-gray-600 mb-4">
              Cloves are highly priced spices that used for culinary and medicinal
              purposes all over the world. It is basically the flower bud of the
              evergreen clove tree growing in tropical and subtropical countries. These
              scientifically known as Syzygium aromaticum and almost all the parts of
              the tree such as dried bud stems, and leaves provide various benefits.
            </p>
            <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
              VIEW PRODUCT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coconutproducts;
