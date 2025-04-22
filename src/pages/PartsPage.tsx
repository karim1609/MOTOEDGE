import React, { useState } from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import Button from '../components/Button';
import { partsData } from '../data/parts';
import { useCart } from '../contexts/CartContext';
import { motorcyclesData } from '../data/motorcycles';

const PartsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMotorcycle, setSelectedMotorcycle] = useState('');
  const [showInStock, setShowInStock] = useState(false);
  
  const { addToCart } = useCart();

  // Get unique categories
  const categories = Array.from(new Set(partsData.map(part => part.category)));

  // Filter parts based on search and filters
  const filteredParts = partsData.filter(part => {
    const matchesSearch = searchQuery === '' || 
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || part.category === selectedCategory;
    
    const matchesMotorcycle = selectedMotorcycle === '' || 
      part.compatibility.includes(selectedMotorcycle);
    
    const matchesStock = !showInStock || part.inStock;
    
    return matchesSearch && matchesCategory && matchesMotorcycle && matchesStock;
  });

  const handleAddToCart = (part: typeof partsData[0]) => {
    addToCart({
      id: part.id,
      name: part.name,
      price: part.price,
      image: part.image,
      quantity: 1
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Parts & Accessories</h1>
          <p className="text-gray-400">Quality parts for your motorcycle</p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-gray-850 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search parts and accessories..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <Filter size={20} className="text-red-500 mr-2" />
                <h2 className="text-xl font-bold text-white">Filters</h2>
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="category-all"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="w-4 h-4 text-red-500 focus:ring-red-500 border-gray-600 rounded"
                    />
                    <label htmlFor="category-all" className="ml-2 text-gray-300">
                      All Categories
                    </label>
                  </div>
                  
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category}`}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="w-4 h-4 text-red-500 focus:ring-red-500 border-gray-600 rounded"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-gray-300">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Motorcycle Compatibility Filter */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">Motorcycle</h3>
                <select
                  value={selectedMotorcycle}
                  onChange={(e) => setSelectedMotorcycle(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Motorcycles</option>
                  {motorcyclesData.map(motorcycle => (
                    <option key={motorcycle.id} value={motorcycle.id}>
                      {motorcycle.brand} {motorcycle.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Availability Filter */}
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="in-stock"
                    checked={showInStock}
                    onChange={(e) => setShowInStock(e.target.checked)}
                    className="w-4 h-4 text-red-500 focus:ring-red-500 border-gray-600 rounded"
                  />
                  <label htmlFor="in-stock" className="ml-2 text-gray-300">
                    Show only in-stock items
                  </label>
                </div>
              </div>
              
              {/* Reset Filters */}
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedMotorcycle('');
                  setShowInStock(false);
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Parts Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                {filteredParts.length} {filteredParts.length === 1 ? 'Result' : 'Results'}
              </h2>
              <div className="flex gap-4">
                <select
                  className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="popularity">Sort by: Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
            
            {filteredParts.length === 0 ? (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <Search size={48} className="mx-auto mb-4 text-gray-500" />
                <h3 className="text-xl font-bold text-white mb-2">No parts found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedMotorcycle('');
                    setShowInStock(false);
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredParts.map(part => (
                  <div key={part.id} className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                    <div className="relative aspect-square overflow-hidden bg-gray-900">
                      <img 
                        src={part.image} 
                        alt={part.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      {!part.inStock && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white font-bold bg-red-600 px-4 py-2 rounded-md">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">{part.brand}</span>
                        <span className="text-sm text-gray-400">{part.category}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3">{part.name}</h3>
                      
                      <div className="text-sm text-gray-300 mb-5">
                        <p>Compatible with:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {part.compatibility.map(id => {
                            const motorcycle = motorcyclesData.find(m => m.id === id);
                            return motorcycle && (
                              <span key={id} className="bg-gray-700 px-2 py-1 rounded text-xs">
                                {motorcycle.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-white">${part.price.toFixed(2)}</span>
                        <Button
                          size="sm"
                          disabled={!part.inStock}
                          onClick={() => handleAddToCart(part)}
                          className={!part.inStock ? 'opacity-50 cursor-not-allowed' : ''}
                        >
                          <ShoppingCart size={16} className="mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsPage;