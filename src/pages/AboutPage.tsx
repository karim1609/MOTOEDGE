import React from 'react';
import { Users, Clock, Trophy, MapPin, Phone, Mail, HeartHandshake, Wrench } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">About MotoEdge</h1>
          <p className="text-gray-400">Our story, mission, and values</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2005 by motorcycle enthusiasts Mike and Sarah Reynolds, MotoEdge began as a small repair shop with a vision to create a different kind of motorcycle dealership—one that combined exceptional customer service with technical expertise and a genuine passion for riding.
              </p>
              <p>
                What started as a modest 2,000 square foot facility has grown into our current 15,000 square foot state-of-the-art dealership. Throughout our growth, we've remained true to our founding principles: honesty, integrity, and an unwavering commitment to the riding community.
              </p>
              <p>
                Today, MotoEdge is proud to be one of the region's premier motorcycle dealerships, offering sales, service, parts, and accessories for riders of all types. Our team of dedicated professionals shares a common passion for motorcycles and the freedom they represent.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.pexels.com/photos/2536638/pexels-photo-2536638.jpeg" 
              alt="MotoEdge Showroom" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Our Mission & Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission & Values</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At MotoEdge, we're committed to fostering a vibrant motorcycle community and enhancing the riding experience for all our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every aspect of our business, from the products we offer to the service we provide. We believe in doing things right the first time.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-400">
                We believe in building and nurturing the motorcycle community through events, rides, and education. We're riders first, and business people second.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">
                We operate with transparency and honesty in all our dealings. Our customers trust us because we always put their needs and safety first.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our passionate team of motorcycle enthusiasts brings decades of combined experience in sales, service, and riding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg" 
                  alt="Mike Reynolds - Founder & CEO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">Mike Reynolds</h3>
                <p className="text-gray-400 text-sm">Founder & CEO</p>
                <p className="text-gray-300 text-sm mt-2">
                  25+ years of riding experience with a background in mechanical engineering.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Sarah Reynolds - Co-Founder & Operations" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">Sarah Reynolds</h3>
                <p className="text-gray-400 text-sm">Co-Founder & Operations</p>
                <p className="text-gray-300 text-sm mt-2">
                  Former racing champion with expertise in business management.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Dave Martinez - Head Technician" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">Dave Martinez</h3>
                <p className="text-gray-400 text-sm">Head Technician</p>
                <p className="text-gray-300 text-sm mt-2">
                  Factory-certified master technician with 15 years of experience.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Lisa Chen - Sales Manager" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">Lisa Chen</h3>
                <p className="text-gray-400 text-sm">Sales Manager</p>
                <p className="text-gray-300 text-sm mt-2">
                  Passionate rider with an extensive knowledge of all motorcycle brands and models.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Facility */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Facility</h2>
              <p className="text-gray-300 mb-6">
                Our state-of-the-art 15,000 square foot facility features a spacious showroom, fully-equipped service center, and comprehensive parts department.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <Trophy size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Modern Showroom</h3>
                    <p className="text-gray-400 text-sm">
                      5,000 square feet of showroom space featuring the latest models and a wide selection of gear and accessories.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <Wrench size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Advanced Service Center</h3>
                    <p className="text-gray-400 text-sm">
                      8 service bays equipped with the latest diagnostic tools and equipment, staffed by certified technicians.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <Users size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Rider Lounge</h3>
                    <p className="text-gray-400 text-sm">
                      Comfortable waiting area with complimentary WiFi, coffee, and refreshments while your bike is being serviced.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-2 rounded-full mr-4 mt-1">
                    <MapPin size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Convenient Location</h3>
                    <p className="text-gray-400 text-sm">
                      Centrally located with easy access from major highways and ample parking for both cars and motorcycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto">
              <img 
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg" 
                alt="MotoEdge Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Contact & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-red-500 mr-3" />
                <span>123 Motor Avenue, Cycle City, CA 92000</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-red-500 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-red-500 mr-3" />
                <span>info@motoedge.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-red-500 mr-3" />
                <div className="text-gray-300">
                  <div className="grid grid-cols-2 gap-4">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                    
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                    
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;