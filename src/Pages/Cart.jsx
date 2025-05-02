import { useCart } from '../Context/CartContext';
     import { Link } from 'react-router-dom';

     function Cart() {
       const { cartItems, updateQuantity, removeFromCart } = useCart();

       const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

       return (
         <div className="p-4 sm:p-8 max-w-5xl mx-auto">
           <h1 className="text-2xl sm:text-3xl text-gray-800 mb-4">Your Cart</h1>
           {cartItems.length === 0 ? (
             <p className="text-gray-600">Your cart is empty.</p>
           ) : (
             <div>
               {cartItems.map((item) => (
                 <div key={item.id} className="flex items-center border-b py-4">
                   <img
                     src={item.image || '/images/placeholder.jpg'}
                     alt={item.name}
                     className="w-16 h-16 object-cover rounded mr-4"
                   />
                   <div className="flex-1">
                     <h2 className="text-lg">{item.name}</h2>
                     <p className="text-gray-600">${item.price.toFixed(2)}</p>
                   </div>
                   <div className="flex items-center">
                     <button
                       onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                       className="px-2 py-1 border rounded"
                     >
                       -
                     </button>
                     <span className="px-4">{item.quantity}</span>
                     <button
                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                       className="px-2 py-1 border rounded"
                     >
                       +
                     </button>
                   </div>
                   <button
                     onClick={() => removeFromCart(item.id)}
                     className="ml-4 text-red-500 hover:text-red-700"
                   >
                     Remove
                   </button>
                 </div>
               ))}
               <div className="mt-6 text-right">
                 <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
                 <Link
                   to="/checkout"
                   className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                 >
                   Proceed to Checkout
                 </Link>
               </div>
             </div>
           )}
         </div>
       );
     }

     export default Cart;