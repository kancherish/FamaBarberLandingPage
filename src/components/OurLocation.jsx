import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function OurLocation() {
  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <MapPin className="h-8 w-8 text-indigo-500 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold text-white">Our Location</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nestled in the heart of the city, experience premium grooming in our modern, comfortable studio
          </p>
        </motion.div>

        {/* Map and Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-gray-900/60" />
            <img 
              src="/map-placeholder.jpg"
              alt="Studio location"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-gray-900/90 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Parking Available</h3>
              <p className="text-gray-400 text-sm">24/7 secure underground parking</p>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-indigo-500 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-gray-700">
              Visit Us
            </h3>

            {/* Contact Items */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-start"
              >
                <div className="p-3 bg-gray-900 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                  <p className="text-gray-400">
                    500 N Bell Ave#109<br />
                   Senton ,TX 76209<br />
                   United States
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-start"
              >
                <div className="p-3 bg-gray-900 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Hours</h4>
                  <div className="text-gray-400 space-y-2">
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span>Mon - Fri</span>
                      <span>9am - 8pm</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span>Saturday</span>
                      <span>10am - 6pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-gray-900 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call Us</h4>
                    <p className="text-gray-400">+1 940-612-9127</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-gray-900 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-400">hello@famabarber.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#Contact"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg font-semibold mt-8 transition-all"
            >
              Book Appointment
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}