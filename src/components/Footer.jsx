import { motion } from 'framer-motion';
import { Scissors,Clock, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 px-4 pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-4 mb-16">
          {/* Brand Section */}
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <Scissors className="w-8 h-8 text-indigo-500" />
              <span className="ml-3 text-2xl font-bold text-white">FAMA BARBER</span>
            </div>
            <p className="text-gray-400 mb-4">
              Crafting precision cuts and premium grooming experiences since 1991. 
              Where traditional barbering meets modern style.
            </p>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-indigo-500" />
              <span className="text-gray-400">+1 940-612-9127</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'AboutUs', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={"#"+item} className="text-gray-400 hover:text-indigo-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {['Haircuts', 'Beard Care', 'Hot Towel Shaves', 'Styling', 'Kids Cuts'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Visit Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <p>
                 500 N Bell Ave#109<br />
                   Senton ,TX 76209<br />
                   United States
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-indigo-500" />
                <div>
                  <p>Mon-Fri: 9am - 8pm</p>
                  <p>Sat: 10am - 6pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} FAMA BARBER. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[Instagram, Twitter, Facebook].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}