import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

// Import your logo images
import cyberaltron from '../Images/Logo/cyberaltron.png';
import startup2 from '../Images/Aimg1.png';
import startup3 from '../Images/Aimg1.png';
import startup4 from '../Images/Aimg1.png';

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const testimonials = [
    {
      logo: cyberaltron,
      quote: "Cyberultron expresses deep gratitude to Shivalik College of Engineering, especially Mr. Ajay Kumar and Prahlad Sir, for their exceptional support in fostering industry-academia collaboration. Their efforts streamlined the funding process and strengthened future partnership prospects.",
      name: "Cyberultron Consulting Private Limited"
    },
    {
      logo: startup2,
      quote: "The mentorship we received transformed our business model.",
      name: "EcoSolutions Ltd"
    },
    {
      logo: startup3,
      quote: "Access to iHUB's network opened doors we couldn't have imagined.",
      name: "HealthTrack Systems"
    },
    {
      logo: startup4,
      quote: "The funding and guidance helped us scale rapidly.",
      name: "EduFuture Academy"
    }
  ];

  return (
    <section ref={ref} className="py-12 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our <span className="text-[#841B31]">Startups Say</span>
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={isInView ? { x: [0, -200, -400, -600, 0] } : {}}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 h-72 bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 object-contain mb-4"
                />
                <div className="text-gray-700 text-center italic mb-2 overflow-y-auto max-h-24">
                  "{item.quote}"
                </div>
                <p className="text-[#841B31] font-medium text-center">{item.name}</p>
              </motion.div>

            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial

// Add this component to your About component before the closing </div>