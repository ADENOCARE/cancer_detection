import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          <Link to="/" className="hover:text-blue-200 transition">
            AdenoCare
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-icons text-white text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full bg-blue-600 md:bg-transparent md:flex md:space-x-6 items-center text-lg ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            to="/"
            className="block py-3 px-6 md:py-0 md:px-0 hover:bg-blue-700 md:hover:bg-transparent hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 px-6 md:py-0 md:px-0 hover:bg-blue-700 md:hover:bg-transparent hover:text-blue-200 transition"
          >
            About
          </Link>
          <Link
            to="/community"
            className="block py-3 px-6 md:py-0 md:px-0 hover:bg-blue-700 md:hover:bg-transparent hover:text-blue-200 transition"
          >
            Community
          </Link>
          <Link
            to="/login"
            className="block py-3 px-6 md:py-0 md:px-0 hover:bg-blue-700 md:hover:bg-transparent hover:text-blue-200 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block py-3 px-6 md:py-0 md:px-0 hover:bg-blue-700 md:hover:bg-transparent hover:text-blue-200 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
