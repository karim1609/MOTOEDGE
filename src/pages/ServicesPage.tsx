import React, { useState } from 'react';
import { Calendar, Clock, Wrench, CheckCircle, AlarmClock } from 'lucide-react';
import Button from '../components/Button';
import { servicesData } from '../data/services';

interface Appointment {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [bookingStep, setBookingStep] = useState(0);
  const [appointment, setAppointment] = useState<Appointment>({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setAppointment({ ...appointment, service: serviceId });
    setBookingStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the appointment data to a server
    console.log('Appointment booked:', appointment);
    setBookingComplete(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetBooking = () => {
    setSelectedService('');
    setBookingStep(0);
    setBookingComplete(false);
    setAppointment({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      if (hour !== 12) { // Skip lunch hour
        slots.push(`${hour}:00`);
        if (hour !== 17) slots.push(`${hour}:30`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Service Center</h1>
          <p className="text-gray-400">Professional maintenance and repair services</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {bookingComplete ? (
          <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Appointment Confirmed!</h2>
            <p className="text-gray-300 mb-8">
              Your service appointment has been scheduled for{' '}
              <span className="text-white font-medium">{appointment.date}</span> at{' '}
              <span className="text-white font-medium">{appointment.time}</span>. A confirmation email has been sent to{' '}
              <span className="text-white font-medium">{appointment.email}</span>.
            </p>
            <div className="bg-gray-700 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-full">
                  <Wrench size={24} className="text-red-500" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-medium text-lg">
                    {servicesData.find(s => s.id === appointment.service)?.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Duration: {servicesData.find(s => s.id === appointment.service)?.duration} minutes
                  </p>
                </div>
              </div>
            </div>
            <Button onClick={resetBooking}>Book Another Service</Button>
          </div>
        ) : (
          <>
            {bookingStep === 0 ? (
              // Service Selection Step
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose a Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {servicesData.map(service => (
                    <div 
                      key={service.id} 
                      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="relative h-48">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-end">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            <p className="text-white font-bold">${service.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center text-gray-400 mb-4">
                          <Clock size={18} className="mr-2" />
                          <span>Duration: {service.duration} minutes</span>
                        </div>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div>
                          <h4 className="text-white font-medium mb-2">Includes:</h4>
                          <ul className="space-y-1">
                            {service.includes.slice(0, 3).map((item, index) => (
                              <li key={index} className="text-gray-400 text-sm flex items-start">
                                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2 mt-1"></span>
                                {item}
                              </li>
                            ))}
                            {service.includes.length > 3 && (
                              <li className="text-gray-400 text-sm italic">
                                +{service.includes.length - 3} more included items
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <Button>
                            Schedule Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Booking Form Step
              <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
                <div className="bg-gray-750 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Service</h2>
                  <p className="text-gray-400">
                    Complete the form below to book your {servicesData.find(s => s.id === selectedService)?.name}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="bg-gray-750 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-500/10 p-3 rounded-full">
                        <Wrench size={24} className="text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">
                          {servicesData.find(s => s.id === selectedService)?.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          ${servicesData.find(s => s.id === selectedService)?.price.toFixed(2)} • {servicesData.find(s => s.id === selectedService)?.duration} minutes
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="ml-auto"
                        onClick={resetBooking}
                      >
                        Change
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-white font-medium mb-2">
                        <Calendar size={16} className="inline mr-2" />
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={appointment.date}
                        onChange={handleAppointmentChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-white font-medium mb-2">
                        <AlarmClock size={16} className="inline mr-2" />
                        Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={appointment.time}
                        onChange={handleAppointmentChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-medium mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={appointment.name}
                          onChange={handleAppointmentChange}
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={appointment.phone}
                          onChange={handleAppointmentChange}
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={appointment.email}
                          onChange={handleAppointmentChange}
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="notes" className="block text-gray-300 mb-2">
                      Additional Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={appointment.notes}
                      onChange={handleAppointmentChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Tell us about your motorcycle or any specific issues..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetBooking}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      Confirm Booking
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}

        {/* Service Advantages Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Our Service Center?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Technicians</h3>
              <p className="text-gray-400">
                Our factory-trained technicians have years of experience working with all motorcycle brands and models.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Genuine Parts</h3>
              <p className="text-gray-400">
                We use only genuine OEM parts or premium aftermarket alternatives to ensure quality and reliability.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-750 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Convenient Scheduling</h3>
              <p className="text-gray-400">
                Our online booking system makes it easy to schedule service appointments at your convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Maintenance Tips */}
        <div className="mt-16 bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Motorcycle Maintenance Tips</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Regular Oil Changes</h3>
                  <p className="text-gray-400 text-sm">
                    Change your oil and filter every 3,000-5,000 miles depending on your riding conditions. Regular oil changes ensure proper engine lubrication and extend engine life.
                  </p>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Tire Maintenance</h3>
                  <p className="text-gray-400 text-sm">
                    Check tire pressure weekly and inspect for wear or damage. Properly inflated tires improve handling, fuel efficiency, and tire life.
                  </p>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Chain Care</h3>
                  <p className="text-gray-400 text-sm">
                    Clean and lubricate your chain every 500 miles or after riding in wet conditions. Proper chain tension is crucial for performance and safety.
                  </p>
                </div>
                
                <div className="bg-gray-750 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Battery Health</h3>
                  <p className="text-gray-400 text-sm">
                    Maintain your battery by keeping connections clean and ensuring proper charging. Consider a trickle charger for motorcycles stored for extended periods.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button>
                  Download Full Maintenance Guide
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-2 h-full">
              <img 
                src="https://images.pexels.com/photos/8984415/pexels-photo-8984415.jpeg" 
                alt="Motorcycle Maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;