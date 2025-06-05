import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl font-bold text-red-600"
            >
                404
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4"
            >
                Page Not Found
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600 mt-2 mb-6 max-w-md"
            >
                Sorry, Development is in under process. It will available soon.
            </motion.p>
            <Link
                to="/"
                className="inline-block bg-[#841B31] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#6e1628] transition duration-300"
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default PageNotFound;
