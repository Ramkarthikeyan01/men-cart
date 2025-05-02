import { createContext, useContext, useState, useEffect } from 'react';

     const CartContext = createContext();

     export function CartProvider({ children }) {
       const [cartItems, setCartItems] = useState(() => {
         const saved = localStorage.getItem('cartItems');
         return saved ? JSON.parse(saved) : [];
       });

       useEffect(() => {
         console.log('Saving cartItems to localStorage:', cartItems);
         localStorage.setItem('cartItems', JSON.stringify(cartItems));
       }, [cartItems]);

       const addToCart = (product) => {
         setCartItems((prevItems) => {
           const existing = prevItems.find((item) => item.id === product.id);
           if (existing) {
             return prevItems.map((item) =>
               item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
             );
           }
           return [...prevItems, { ...product, quantity: 1 }];
         });
       };

       const updateQuantity = (id, quantity) => {
         setCartItems((prevItems) =>
           prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
         );
       };

       const removeFromCart = (id) => {
         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
       };

       const clearCart = () => {
         setCartItems([]);
       };

       return (
         <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
           {children}
         </CartContext.Provider>
       );
     }

     export function useCart() {
       return useContext(CartContext);
     }