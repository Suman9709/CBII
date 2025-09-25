import React, { useEffect, useRef, useState } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import cyberaltron from '../Images/Logo/cyberaltron.png';
import startup2 from '../Images/Aimg1.png';
import startup3 from '../Images/Aimg1.png';
import startup4 from '../Images/Aimg1.png';
import agrijoy from '../Images/Logo/agrijoy.avif';
import canstart from '../Images/Logo/canstart.jpg';

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      logo: cyberaltron,
      quote: "Cyberultron expresses deep gratitude to Shivalik College of Engineering, especially Mr. Ajay Kumar and Prahlad Sir, for their exceptional support in fostering industry-academia collaboration. Their efforts streamlined the funding process and strengthened future partnership prospects.",
      name: "Cyberultron Consulting Private Limited",
      founder: "Vatrul Goyal",
    },
    {
      // logo: "Flipp Om",
      quote: "Being part of the incubator at CBII has truly transformed how we at FLIPP OM TECH LLP think about scaling our tech solutions.",
      name: "FLIPP OM TECH LLP",
      founder: " Mr. Ajay Kumar Verma"
    },
    {
      logo: agrijoy,
      quote: "The support and guidance we received through the Business Incubation program at CBII have been instrumental in shaping Agrijoy Pvt. Ltd. into a scalable and impactful enterprise.",
      name: "Agrijoy Pvt. Ltd.",
      founder: "Mr. Chandramani"
    },
    {
      logo: canstart,
      quote: "The incubation support provided by CBII has been a game-changer for CANSTART TECH LLP. From the very beginning, we received structured mentorship, access to modern infrastructure, and timely guidance that helped us navigate the challenges of building a technology-driven startup.",
      name: "CANSTART TECH LLP",
      founder: "Ayush Kumar Chanchal",
    },
  ];

  useEffect(() => {
    if (isInView && !isPaused) {
      controls.start({
        x: [0, -200, -400, -600, 0],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, isPaused, controls]);

  return (
    <section ref={ref} className="py-12 bg-gray-50 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our <span className="text-[#841B31]">Startups Say</span>
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 h-72 bg-white p-6 rounded-xl shadow-md flex flex-col items-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-16 object-contain mb-4"
                  />
                ) : (
                  <p className="text-lg font-bold text-amber-700 mb-4">{item.name}</p>
                )}

                <div className="text-gray-700 text-center italic mb-2 overflow-y-auto max-h-24">
                  "{item.quote}"
                </div>
                <p className="text-[#841B31] font-medium text-center">
                  {item.name}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <div className="h-[2px] w-[10px] bg-[#841B31]"></div>
                  <p className="text-[#841B31] font-medium">{item.founder}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
