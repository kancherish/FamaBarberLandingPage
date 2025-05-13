import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Hero() {
    return (
        <section className="pt-24 bg-gray-900 lg:pt-32" id="Home">
            <div className="max-w-7xl px-4 mx-auto grid lg:grid-cols-12 gap-12 items-center">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 text-center lg:text-left"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Classic Cuts, 
                        <span className="text-indigo-400"> Modern Style</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                        At FAMA Barbershop, we blend traditional craftsmanship with contemporary trends 
                        to create your perfect look. Experience precision grooming in our modern studio.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
                            href="#Services"
                        >
                            Our Services
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                        
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 border border-indigo-600 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-600/10 transition-colors"
                            href="#booking"
                        >
                            Book Appointment
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 relative hidden lg:block"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70" 
                            alt="Barber at work"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-gray-900/60" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero