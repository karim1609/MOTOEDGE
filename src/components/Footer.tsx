import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, Clock, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-red-500">MOTO</span>
              <span className="text-white">EDGE</span>
            </Link>
            <p className="mt-4 text-sm">
              Your premier destination for motorcycles, parts, and professional service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/inventory" className="hover:text-red-500 transition-colors text-sm">
                  Motorcycles
                </Link>
              </li>
              <li>
                <Link to="/parts" className="hover:text-red-500 transition-colors text-sm">
                  Parts & Accessories
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-500 transition-colors text-sm">
                  Service Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <span className="text-sm">123 Motor Avenue, Cycle City, CA 92000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-sm">info@motoedge.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <p>Mon-Fri: 9AM - 6PM</p>
                  <p>Sat: 10AM - 4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and promotions.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors duration-300 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 MotoEdge. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-red-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;