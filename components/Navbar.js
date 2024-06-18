// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 bg-gray-900 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center text-white text-xl font-bold">
            MyWebsite
          </div>
          <div className="flex">
            <Link href="/" className="text-white hover:bg-gray-800 px-5 py-2 rounded-md text-lg font-bold items-center flex">Home</Link>
            <Link href="/about" className="text-white hover:bg-gray-800 px-5 py-2 rounded-md text-lg font-bold items-center flex">About</Link>
            <Link href="/services" className="text-white hover:bg-gray-800 px-5 py-2 rounded-md text-lg font-bold items-center flex">Services</Link>
            <Link href="/contact" className="text-white hover:bg-gray-800 px-5 py-2 rounded-md text-lg font-bold items-center flex">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
