import React from 'react';
import { Link } from 'react-router-dom';
import { Film, ShoppingCart } from 'lucide-react'; // Impor ikon-ikon yang dibutuhkan

export default function Header() {
  return (
    <div className="bg-blue-500 p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          <Film className="inline-block w-8 h-8 mr-2" />
          Streaming App
        </h1>
        <nav>
          <ul className="flex gap-8 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">
                <ShoppingCart className="inline-block w-6 h-6 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-300">
                <ShoppingCart className="inline-block w-6 h-6 mr-1" />
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
