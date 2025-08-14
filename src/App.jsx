

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Products from './pages/Products/Products';
import Spices from './pages/Products/Spices';
import Herbs from './pages/Products/Herbs';
import Teacoffee from './pages/Products/Teacoffee';
import Fruitsvegitables from './pages/Products/Fruitsvegitables';
import Coconutproducts from './pages/Products/Coconutproducts';
import Coirproducts from './pages/Products/Coirproducts';



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Products routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/spices" element={<Spices />} />
          <Route path="/products/herbs" element={<Herbs />} />
          <Route path="/products/tea-&-coffee" element={<Teacoffee />} />
          <Route path="/products/fruits-&-vegetables" element={<Fruitsvegitables />} />
          <Route path="/products/coconut-products" element={<Coconutproducts />} />
          <Route path="/products/coir-products" element={<Coirproducts />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
