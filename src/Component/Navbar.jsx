import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function Navbar() {
  const { cart } = useCart();
  const cartCount = cart && Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Men Cart</Link>
        <div className="flex space-x-4">
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/checkout" className="hover:text-gray-300">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;