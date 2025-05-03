import { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';

// Import all images from src/assets/images
import tshirt from '../assets/images/tshirt.jpg';
import jeans from '../assets/images/jeans.jpg';
import sneakers from '../assets/images/sneakers.jpg';
import coat from '../assets/images/coat.jpg';
import cutshoe from '../assets/images/cutshoe.webp';
import formal from '../assets/images/formal.jpg';
import loafers from '../assets/images/loafers.jpg';
import runningshoes from '../assets/images/runningshoes.jpg';
import sharvani from '../assets/images/sharvani.jpg';
import smartwatch from '../assets/images/smartwatch.jpg';
import watch from '../assets/images/watch.jpg';
import cargojeans from '../assets/images/cargojeans.jpg';
import placeholder from '../assets/images/placeholder.jpg';

// Map image filenames to imported assets
const imageMap = {
  'tshirt.jpg': tshirt,
  'jeans.jpg': jeans,
  'sneakers.jpg': sneakers,
  'coat.jpg': coat,
  'cutshoe.webp': cutshoe,
  'formal.jpg': formal,
  'loafers.jpg': loafers,
  'runningshoes.jpg': runningshoes,
  'sharvani.jpg': sharvani,
  'smartwatch.jpg': smartwatch,
  'watch.jpg': watch,
  'cargojeans.jpg': cargojeans,
  'placeholder.jpg': placeholder,
};

function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched products:', data); // Debug log
        // Validate and map image filenames to imported assets
        const updatedProducts = data.map((product) => ({
          ...product,
          price: typeof product.price === 'number' ? product.price : 0, // Default to 0 if price is invalid
          image: imageMap[product.image] || placeholder,
        }));
        setProducts(updatedProducts);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setProducts([]);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || product.category === category)
  );

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl text-gray-800 mb-4">Products</h1>
      {error && (
        <div className="text-red-500 mb-4">
          Error loading products: {error}
        </div>
      )}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/4"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 && !error && (
          <p>No products found.</p>
        )}
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
              onError={(e) => {
                console.error(`Failed to load image: ${e.target.src}`);
                e.target.src = placeholder;
                e.target.onerror = null; // Prevent infinite loop
              }}
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">
              ₹{typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;