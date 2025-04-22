import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2549942/pexels-photo-2549942.jpeg")',
          backgroundPosition: '50% 40%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            Experience <span className="text-red-500">True Freedom</span> on Two Wheels
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our extensive collection of premium motorcycles, parts, and professional services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/inventory">
              <Button size="lg">
                View Inventory
                <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Book Service
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;