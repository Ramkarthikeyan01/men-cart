import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl text-gray-800 mb-4">Checkout</h1>
      {orderPlaced ? (
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl mb-4">Order Placed Successfully!</h2>
          <Link to="/products" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
            Continue Shopping
          </Link>
        </div>
      ) : cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-blue-500 hover:underline">Shop now</Link></p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border rounded-lg p-4 shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Total: ₹{getCartTotal().toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;