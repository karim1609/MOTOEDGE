import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Calendar, MoveHorizontal, Fuel, GaugeCircle, Info, Wrench } from 'lucide-react';
import Button from '../components/Button';
import { motorcyclesData } from '../data/motorcycles';
import { partsData } from '../data/parts';

const MotorcycleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const motorcycle = motorcyclesData.find(m => m.id === id);
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  
  // Find compatible parts
  const compatibleParts = partsData.filter(part => 
    part.compatibility.includes(id as string)
  );

  // Find related models
  const relatedModels = motorcycle?.relatedModels.map(relatedId => 
    motorcyclesData.find(m => m.id === relatedId)
  ).filter(Boolean) || [];

  useEffect(() => {
    // Reset active image when motorcycle changes
    setActiveImageIndex(0);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  if (!motorcycle) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-900 flex items-center justify-center">
        <div className="text-center p-8">
          <Info size={48} className="mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold text-white mb-4">Motorcycle Not Found</h1>
          <p className="text-gray-400 mb-6">The motorcycle you're looking for doesn't exist or has been removed.</p>
          <Link to="/inventory">
            <Button>Return to Inventory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === motorcycle.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? motorcycle.images.length - 1 : prevIndex - 1
    );
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-600">/</span>
          <Link to="/inventory" className="text-gray-400 hover:text-white transition-colors">
            Inventory
          </Link>
          <span className="mx-2 text-gray-600">/</span>
          <span className="text-gray-300">{motorcycle.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src={motorcycle.images[activeImageIndex]} 
                alt={motorcycle.name} 
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button 
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">
                {motorcycle.condition}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto pb-1">
              {motorcycle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-24 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    index === activeImageIndex ? 'border-red-500' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${motorcycle.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Motorcycle Details */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">{motorcycle.name}</h1>
                <p className="text-gray-400 text-lg">{motorcycle.brand} | {motorcycle.year}</p>
              </div>
              <button 
                onClick={toggleWishlist}
                className={`p-2 rounded-full transition-colors ${
                  isWishlist ? 'text-red-500 bg-red-500/10' : 'text-gray-400 bg-gray-800 hover:text-red-500'
                }`}
              >
                <Heart size={24} className={isWishlist ? 'fill-red-500' : ''} />
              </button>
            </div>
            
            <div className="my-6">
              <p className="text-3xl font-bold text-white">${motorcycle.price.toLocaleString()}</p>
              {motorcycle.condition === 'Used' && (
                <p className="text-gray-400 mt-1">{motorcycle.mileage.toLocaleString()} miles</p>
              )}
            </div>
            
            {/* Key Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <GaugeCircle size={18} className="text-red-500" />
                  <span className="text-gray-400 text-sm">Engine</span>
                </div>
                <p className="text-white font-medium">{motorcycle.engineSize}cc {motorcycle.engineType}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <MoveHorizontal size={18} className="text-red-500" />
                  <span className="text-gray-400 text-sm">Power</span>
                </div>
                <p className="text-white font-medium">{motorcycle.power}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={18} className="text-red-500" />
                  <span className="text-gray-400 text-sm">Year</span>
                </div>
                <p className="text-white font-medium">{motorcycle.year}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Fuel size={18} className="text-red-500" />
                  <span className="text-gray-400 text-sm">Fuel</span>
                </div>
                <p className="text-white font-medium">{motorcycle.specs.fuelCapacity}</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button fullWidth>Schedule Test Ride</Button>
              <Button variant="outline" fullWidth>Inquire</Button>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                {motorcycle.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {motorcycle.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-800 mb-8">
            <div className="inline-flex">
              <button className="text-white font-medium py-4 px-6 border-b-2 border-red-500">
                Specifications
              </button>
            </div>
          </div>
          
          {/* Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Engine & Transmission</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Displacement</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.displacement}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Engine Type</td>
                    <td className="py-3 text-white text-right">{motorcycle.engineType}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Compression Ratio</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.compression}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Fuel System</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.fuelSystem}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Transmission</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.transmission}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Chassis & Dimensions</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Front Suspension</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.frontSuspension}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Rear Suspension</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.rearSuspension}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Front Brake</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.frontBrake}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Rear Brake</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.rearBrake}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Weight</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.weight}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Seat Height</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.seatHeight}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-gray-400">Fuel Capacity</td>
                    <td className="py-3 text-white text-right">{motorcycle.specs.fuelCapacity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Compatible Parts */}
        {compatibleParts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Compatible Parts & Accessories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compatibleParts.slice(0, 4).map(part => (
                <div key={part.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:bg-gray-750 transition-colors">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={part.image} 
                      alt={part.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-1">{part.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{part.brand}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">${part.price.toFixed(2)}</span>
                      <span className={`text-sm font-medium ${part.inStock ? 'text-green-500' : 'text-red-500'}`}>
                        {part.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/parts">
                <Button variant="outline">
                  View All Compatible Parts
                </Button>
              </Link>
            </div>
          </div>
        )}
        
        {/* Related Motorcycles */}
        {relatedModels.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedModels.map(model => model && (
                <Link 
                  key={model.id} 
                  to={`/inventory/${model.id}`}
                  className="group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <img 
                      src={model.images[0]} 
                      alt={model.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {model.condition}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                          {model.name}
                        </h3>
                        <p className="text-sm text-gray-400">{model.brand} | {model.year}</p>
                      </div>
                      <p className="text-lg font-bold text-white">${model.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Service CTA */}
        <div className="mt-16 bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-4">Keep Your Motorcycle in Peak Condition</h2>
              <p className="text-gray-300 mb-6">Our certified technicians use only the highest quality parts and fluids to ensure your motorcycle performs at its best. Schedule a service appointment today.</p>
              <Link to="/services">
                <Button className="flex items-center">
                  <Wrench className="mr-2" size={18} />
                  Schedule Service
                </Button>
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/8985169/pexels-photo-8985169.jpeg" 
                alt="Motorcycle Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetailsPage;