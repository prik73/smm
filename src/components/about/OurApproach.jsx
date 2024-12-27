import React from "react";
import { motion } from "framer-motion";
import { Handshake, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const OurApproach = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Approach</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Together, we're building brighter futures. Join us in empowering
            communities through education, resources, and legal aid. Our mission
            is to create a world where everyone has the opportunity to thrive.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-4 rounded-full">
              <Handshake className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Community Empowerment
            </h3>
            <p className="text-gray-600 mt-2">
              We collaborate with communities to provide the tools and resources
              they need to grow, succeed, and thrive in every aspect of life.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 p-4 rounded-full">
              <BookOpen className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Education First
            </h3>
            <p className="text-gray-600 mt-2">
              Education is the foundation of our efforts. We conduct workshops,
              training sessions, and initiatives to bridge educational gaps.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-100 p-4 rounded-full">
              <Heart className="text-red-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Compassionate Support
            </h3>
            <p className="text-gray-600 mt-2">
              A well-defined smile is what we aim for. Through consistent
              support and legal aid, we stand by those in need, ensuring their
              voices are heard.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to create a world where everyone has the opportunity
            to thrive and achieve their fullest potential.
          </p>
          <Link 
            to="/contribute" 
             className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
             Join Our Mission
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
