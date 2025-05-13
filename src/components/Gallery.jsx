import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-900" id='Gallery'>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Craftsmanship Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the artistry behind every cut and shave - where precision meets passion
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img 
                src={"https://media.istockphoto.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=0&k=20&c=wdcKDn9BnLe979S4BGQlYrKX8d4gBkRc4siYDQgPA-s="}
                alt="Barber work"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium text-lg">
                  {index === 0 && "Precision Haircut"}
                  {index === 1 && "Beard Sculpting"}
                  {index === 2 && "Luxury Grooming"}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {index === 0 && "Masterful blending techniques"}
                  {index === 1 && "Detailed beard shaping & care"}
                  {index === 2 && "Premium product treatment"}
                </p>
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
            "Perfection is not a skill, it's an attitude - reflected in every detail we craft"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;