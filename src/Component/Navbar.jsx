import { Link } from 'react-router-dom';
     import { useCart } from '../Context/CartContext';

     function Navbar() {
       const { cartItems } = useCart();
       const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

       return (
         <nav className="bg-gray-800 text-white p-4">
           <div className="max-w-5xl mx-auto flex justify-between items-center">
             <Link to="/" className="text-xl font-bold">Men’s Fashion Hub</Link>
             <div className="space-x-4">
               <Link to="/" className="hover:text-gray-300">Home</Link>
               <Link to="/products" className="hover:text-gray-300">Products</Link>
               <Link to="/cart" className="hover:text-gray-300">
                 Cart ({itemCount})
               </Link>
             </div>
           </div>
         </nav>
       );
     }

     export default Navbar;