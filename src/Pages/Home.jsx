import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import banner images and placeholder
import back1 from '../assets/images/back1.jpg';
import back2 from '../assets/images/back2.webp';
import back3 from '../assets/images/back3.webp';
import placeholder from '../assets/images/placeholder.jpg';

function Home() {
  const images = [back1, back2, back3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen">
      <img
        src={images[currentImage]}
        alt="Banner"
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error(`Failed to load image: ${e.target.src}`);
          e.target.src = placeholder;
          e.target.onerror = null; // Prevent infinite loop
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Men Cart</h1>
          <p className="text-lg sm:text-xl mb-6">Discover the latest in men's fashion</p>
          <Link
            to="/products"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;