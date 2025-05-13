import { motion } from 'framer-motion';
import { AiOutlineScissor, AiOutlineSmile, AiOutlineClockCircle } from 'react-icons/ai';
import { GiBeard } from 'react-icons/gi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose FAMA Barber?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the difference of traditional barbering combined with modern style 
              and unmatched expertise
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            {
              icon: <AiOutlineScissor className="w-12 h-12" />,
              title: "Master Barbers",
              text: "10+ years average experience in precision cutting"
            },
            {
              icon: <GiBeard className="w-12 h-12" />,
              title: "Beard Experts",
              text: "Specialized in modern beard grooming techniques"
            },
            {
              icon: <AiOutlineSmile className="w-12 h-12" />,
              title: "Client Focused",
              text: "99% customer satisfaction rate"
            },
            {
              icon: <AiOutlineClockCircle className="w-12 h-12" />,
              title: "Flexible Hours",
              text: "Open 7 days including evenings"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <div className="mb-4 text-indigo-500">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70" 
              alt="Barber at work"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply" />
          </motion.div>

          <motion.div variants={itemVariants} className="lg:py-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              33 Years of Craftsmanship
            </h3>
            <p className="text-gray-400 mb-8">
              Since 1991, we've perfected the art of men's grooming. Our legacy is built on:
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: '10k+', label: 'Happy Clients' },
                { number: '33+', label: 'Industry Awards' },
                { number: '98%', label: 'Repeat Business' },
                { number: '50+', label: 'Style Options' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="mt-12 border-l-4 border-indigo-500 pl-6">
              <p className="text-xl italic text-white">
                "A good haircut is a right, not a luxury. That's why we treat every client like family."
              </p>
              <cite className="mt-4 block text-indigo-400">- Marco Fama, Founder</cite>
            </blockquote>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the FAMA difference. Book your appointment now and join our 
              family of well-groomed gentlemen
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}