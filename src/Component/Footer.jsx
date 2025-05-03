import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-lg font-bold">MenCart</h2>
          <p className="text-sm">Your one-stop shop for men’s fashion.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/checkout" className="hover:text-gray-300">Cart</Link>
          <a href="mailto:support@mencart.com" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-2v4h-3v-4h-1v-2h1V9.5c0-1.38 1.12-2.5 2.5-2.5H17v2h-1.5c-.28 0-.5.22-.5.5V11h2v2z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.35 15.65c-2.8 2.8-7.3 2.8-10.1 0-2.8-2.8-2.8-7.3 0-10.1 2.8-2.8 7.3-2.8 10.1 0 2.8 2.8 2.8 7.3 0 10.1zm-1.41-1.41c2.1-2.1 2.1-5.49 0-7.59s-5.49-2.1-7.59 0-2.1 5.49 0 7.59 5.49 2.1 7.59 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;