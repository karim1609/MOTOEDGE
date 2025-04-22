import React from 'react';
import Hero from '../components/Hero';
import FeatureCategory from '../components/FeatureCategory';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { Calendar, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Categories */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Explore Our Collection</h2>
          
          <div className="grid grid-cols-1 gap-8 md:gap-10">
            <FeatureCategory
              title="Motorcycles"
              description="Browse our wide selection of motorcycles from top brands. From sport bikes to cruisers, find your perfect ride."
              image="https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg"
              link="/inventory"
            />
            
            <FeatureCategory
              title="Parts & Accessories"
              description="Upgrade your ride with premium parts and stylish accessories. Quality components for performance and style."
              image="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg"
              link="/parts"
              position="right"
            />
            
            <FeatureCategory
              title="Service Center"
              description="Professional maintenance and repair services by certified technicians. Keep your motorcycle in peak condition."
              image="https://images.pexels.com/photos/8985169/pexels-photo-8985169.jpeg"
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose MotoEdge?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We offer the best motorcycle experience with premium service, quality parts, and expert knowledge.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Scheduling</h3>
              <p className="text-gray-400">Book service appointments online at your convenience with our simple scheduling system.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Technicians</h3>
              <p className="text-gray-400">Our certified technicians have years of experience working with all motorcycle brands.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Guarantee</h3>
              <p className="text-gray-400">All our parts and services come with a satisfaction guarantee for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Motorcycle */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <span className="text-red-500 font-medium mb-2 block">Featured Model</span>
            <h2 className="text-4xl font-bold text-white mb-4">2025 Razor GTX-1000</h2>
            <p className="text-xl text-gray-300 mb-2">Starting at $12,999</p>
            <p className="text-gray-400 mb-8">Experience unmatched performance with the all-new Razor GTX-1000. Cutting-edge technology, premium components, and stunning design.</p>
            
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                999cc Engine
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                0-60 in 3.2s
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                160 HP
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Advanced ABS
              </li>
            </ul>
            
            <Button>
              View Details
              <ChevronRight className="ml-1 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Alex Morgan"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              rating={5}
              motorcycle="Razor GTX-750"
              text="The service at MotoEdge is unmatched. Their technicians fixed issues that other shops couldn't diagnose. Highly recommend!"
            />
            
            <TestimonialCard
              name="Sarah Johnson"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              rating={5}
              motorcycle="Phantom 650"
              text="Purchased my first motorcycle here and the experience was fantastic. The staff was knowledgeable and helped me find the perfect bike."
            />
            
            <TestimonialCard
              name="Mike Richards"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
              rating={4}
              motorcycle="Blazer 1000"
              text="Their parts department has everything you need and the prices are competitive. Quick shipping and great quality products."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Visit our dealership today or browse our online inventory to find your perfect motorcycle.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Visit Showroom
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;