
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo or Site Name */}
          <div className="text-2xl font-bold">
            <Link to="/">AdenoCare</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <i className="fab fa-facebook"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="mt-6 flex justify-center space-x-8">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About Us</Link>
          <Link to="/community" className="hover:text-blue-300">Community</Link>
          <Link to="/login" className="hover:text-blue-300">Login</Link>
          <Link to="/register" className="hover:text-blue-300">Register</Link>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AdenoCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
