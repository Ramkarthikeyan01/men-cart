import { Routes, Route } from 'react-router-dom';
     import Home from './Pages/Home';
     import Products from './Pages/Products';
     import Cart from './Pages/Cart';
     import Checkout from './Pages/Checkout';
     import Navbar from './Component/Navbar';
     import Footer from './Component/Footer';
     import { CartProvider } from './Context/CartContext';

     function App() {
       return (
         <CartProvider>
           <Navbar />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/products" element={<Products />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/checkout" element={<Checkout />} />
           </Routes>
           <Footer />
         </CartProvider>
       );
     }

     export default App;