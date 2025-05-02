import { useState } from 'react';
     import { useCart } from '../Context/CartContext';
     import { useNavigate } from 'react-router-dom';

     function Checkout() {
       const { cartItems, clearCart } = useCart();
       const navigate = useNavigate();
       const [formData, setFormData] = useState({
         name: '',
         email: '',
         address: '',
       });

       const handleSubmit = (e) => {
         e.preventDefault();
         if (formData.name && formData.email && formData.address) {
           console.log('Order placed:', { formData, cartItems });
           clearCart();
           navigate('/');
         } else {
           alert('Please fill out all fields.');
         }
       };

       return (
         <div className="p-4 sm:p-8 max-w-5xl mx-auto">
           <h1 className="text-2xl sm:text-3xl text-gray-800 mb-4">Checkout</h1>
           <form onSubmit={handleSubmit} className="max-w-md mx-auto">
             <div className="mb-4">
               <label className="block text-gray-700">Name</label>
               <input
                 type="text"
                 value={formData.name}
                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                 className="w-full border rounded px-3 py-2"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Email</label>
               <input
                 type="email"
                 value={formData.email}
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 className="w-full border rounded px-3 py-2"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Address</label>
               <input
                 type="text"
                 value={formData.address}
                 onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                 className="w-full border rounded px-3 py-2"
                 required
               />
             </div>
             <button
               type="submit"
               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
             >
               Place Order
             </button>
           </form>
         </div>
       );
     }

     export default Checkout;