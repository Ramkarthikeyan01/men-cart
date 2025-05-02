import { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import '../Styles/Home.css';
  import { images } from '../assets/ImageReferences';

  function Home() {
    const imageList = [
      { src: images.back1, alt: 'Banner 1' },
      { src: images.back2, alt: 'Banner 2' },
      { src: images.back3, alt: 'Banner 3' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }, [imageList.length]);

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
      );
    };

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <div className="p-4 sm:p-8 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl text-gray-800 mb-4">Men’s Fashion Hub</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Discover the latest trends in men’s clothing!</p>
        <div className="relative w-full sm:max-w-5xl mx-auto h-64 sm:h-80 rounded-lg overflow-hidden">
          <img
            src={imageList[currentImageIndex].src}
            alt={imageList[currentImageIndex].alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${e.target.src}`);
              e.target.src = images.placeholder;
              e.target.onerror = null; // Prevent infinite loop
            }}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white text-2xl p-2 rounded-full hover:bg-opacity-75 transition"
          >
            
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white text-2xl p-2 rounded-full hover:bg-opacity-75 transition"
          >
            
          </button>
        </div>
        <div className="mt-6">
          <Link
            to="/products"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  export default Home;