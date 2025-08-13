// // src/App.jsx
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import Products from './pages/Products/Products';
// import Spices from './pages/Products/Spices';
// import Herbs from './pages/Products/Herbs';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
          
//           {/* Products routes */}
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/spices" element={<Spices />} />
//           <Route path="/products/herbs" element={<Herbs />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;



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

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
