import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=100&h=100&fit=crop" 
              alt="The Pink Forest" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-pink-500 transition-colors">Menu</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition-colors">Gallery</a>
            <a href="#reservations" className="text-gray-700 hover:text-pink-500 transition-colors">Reservations</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Menu</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Gallery</a>
            <a href="#reservations" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Reservations</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;