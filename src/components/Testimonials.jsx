import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    text: "While the prices are higher than other barbershops, the precision cut I received was worth every penny. My best haircut in years!",
    author: "Michael Chen",
    role: "Tech Entrepreneur",
    stars: 5
  },
  {
    text: "Yes, it's premium priced, but you're paying for masters of their craft. My beard has never looked better. Zero regrets!",
    author: "David Martinez",
    role: "Fitness Coach",
    stars: 5
  },
  {
    text: "Initially hesitated about the cost, but the hot towel shave experience converted me. This is grooming elevated to an art form.",
    author: "James Wilson",
    role: "Lawyer",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Experiences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've experienced 
            our premium grooming services firsthand
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <FaQuoteLeft className="text-indigo-500 text-2xl mb-4" />
              
              <div className="flex mb-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full"
                    src={`https://source.unsplash.com/random/100x100/?person-${index}`}
                    alt={testimonial.author}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-base text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 italic">
            "We believe in transparency - our pricing reflects the exceptional quality, 
            premium products, and master-level expertise we provide"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;