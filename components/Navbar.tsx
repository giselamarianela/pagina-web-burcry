
import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-primary font-oswald text-3xl font-bold tracking-tighter">
              BURG<span className="text-white">RY</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-primary text-dark px-6 py-2 rounded-md font-oswald font-bold uppercase hover:bg-yellow-500 transition-all transform hover:scale-105 flex items-center gap-2">
                <ShoppingCart size={18} />
                Shop Online
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-primary text-dark px-6 py-3 rounded-md font-oswald font-bold uppercase mt-4">
            Shop Online
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
