import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const faqItems = [
    {
      question: "How far in advance should I book my appointment?",
      answer: "We recommend booking at least 3-5 days in advance for weekday appointments and 1-2 weeks ahead for weekends. However, we do keep some slots open for last-minute bookings."
    },
    {
      question: "Do you accept walk-in clients?",
      answer: "While appointments are preferred, we welcome walk-ins based on availability. Use our online check-in system to view real-time availability before visiting."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "All tools are sterilized between clients, workstations are sanitized after each service, and our barbers wear fresh gloves for every shave. We use hospital-grade disinfectants throughout the shop."
    },
    {
      question: "How long does a typical service take?",
      answer: "Service times vary: haircuts take 45-60 minutes, beard services 30-45 minutes, and full grooming packages 75-90 minutes. We never rush perfection!"
    },
    {
      question: "Can I purchase your grooming products?",
      answer: "Absolutely! We carry our curated line of premium pomades, beard oils, and skincare products. Ask your barber for recommendations tailored to your needs."
    },
    {
      question: "Do you offer loyalty programs?",
      answer: "Yes! Join our FAMA Club to earn points with every visit, receive exclusive offers, and get priority booking access. Your fifth visit is on us!"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Client Inquiries</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Answers to common questions about our services, policies, and the FAMA experience
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <FiChevronDown className="text-indigo-500 text-xl transform transition-transform" />
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-400">{item.answer}</p>
              </motion.div>
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
            "Still have questions? Visit our contact page or call directly at (940) 808-1339 - 
            we're happy to help craft your perfect grooming experience"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;