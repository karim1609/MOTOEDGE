import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, Info, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { motorcyclesData } from '../data/motorcycles';

interface FilterState {
  brand: string;
  category: string;
  priceRange: [number, number];
  year: string;
}

const InventoryPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    category: '',
    priceRange: [0, 25000],
    year: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique values for filter options
  const brands = Array.from(new Set(motorcyclesData.map(m => m.brand)));
  const categories = Array.from(new Set(motorcyclesData.map(m => m.category)));
  const years = Array.from(new Set(motorcyclesData.map(m => m.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a));

  // Filter motorcycles based on filters and search
  const filteredMotorcycles = motorcyclesData.filter(motorcycle => {
    const matchesSearch = searchQuery === '' || 
      motorcycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      motorcycle.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBrand = filters.brand === '' || motorcycle.brand === filters.brand;
    const matchesCategory = filters.category === '' || motorcycle.category === filters.category;
    const matchesPrice = motorcycle.price >= filters.priceRange[0] && motorcycle.price <= filters.priceRange[1];
    const matchesYear = filters.year === '' || motorcycle.year.toString() === filters.year;
    
    return matchesSearch && matchesBrand && matchesCategory && matchesPrice && matchesYear;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Page Header */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Motorcycle Inventory</h1>
          <p className="text-gray-400">Browse our selection of premium motorcycles</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search motorcycles..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button 
              variant="secondary" 
              className="md:w-auto"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="mr-2" size={18} />
              Filters
              <ChevronDown className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
            </Button>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-gray-800 rounded-md p-6 mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Brand Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Brand</label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={filters.brand}
                  onChange={(e) => setFilters({...filters, brand: e.target.value})}
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="25000"
                  step="1000"
                  className="w-full accent-red-500"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({
                    ...filters, 
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                  })}
                />
              </div>
              
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Year</label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={filters.year}
                  onChange={(e) => setFilters({...filters, year: e.target.value})}
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              {/* Filter Actions */}
              <div className="md:col-span-4 flex justify-end gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setFilters({
                    brand: '',
                    category: '',
                    priceRange: [0, 25000],
                    year: ''
                  })}
                >
                  Reset Filters
                </Button>
                <Button onClick={() => setShowFilters(false)}>Apply Filters</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inventory List */}
      <div className="container mx-auto px-4 py-12">
        {filteredMotorcycles.length === 0 ? (
          <div className="text-center py-16">
            <Info className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-medium text-white mb-2">No motorcycles found</h3>
            <p className="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMotorcycles.map(motorcycle => (
              <Link 
                key={motorcycle.id} 
                to={`/inventory/${motorcycle.id}`}
                className="group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56">
                  <img 
                    src={motorcycle.images[0]} 
                    alt={motorcycle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {motorcycle.condition}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                        {motorcycle.name}
                      </h3>
                      <p className="text-sm text-gray-400">{motorcycle.brand} | {motorcycle.year}</p>
                    </div>
                    <p className="text-lg font-bold text-white">${motorcycle.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {motorcycle.engineSize}cc
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {motorcycle.category}
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {motorcycle.color}
                    </span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-700 flex justify-end">
                    <span className="text-sm text-red-500 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      View Details
                      <ChevronRight className="ml-1" size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;