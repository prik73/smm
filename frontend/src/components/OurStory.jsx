import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import story from '../assets/images/story.jpg'

const OurStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              A journey dedicated to spreading legal awareness and education, with a special focus on 
              empowering women, children, senior citizens, and specially abled persons.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "50+", label: "Volunteers" },
              { number: "30+", label: "Seminars" },
              { number: "1000+", label: "people affected" },
              { number: "5+", label: "Collaborations"}
            ].map((stat, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <motion.h3 
                    className="text-2xl font-bold text-blue-600"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <img 
              src={story}
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          {/* Right side - Story Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: "Our Foundation",
                content: "Sarvodaya Manav se Manavta Foundation (SMM Foundation) is a non-profit company registered under section 8 of Companies Act, 2013. Established in 2024, we are headquartered in Gurugram, Haryana, with a vision to serve humanity."
              },
              {
                title: "Our Mission",
                content: "Our primary mission is to spread legal awareness and education throughout India. We focus specifically on laws related to women, children, senior citizens, and specially abled persons, ensuring their rights are understood and protected."
              },
              {
                title: "Our Impact",
                content: "Working tirelessly for the welfare of humankind, we strive to create a society where legal knowledge empowers every individual, particularly those from vulnerable sections of our community."
              }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="transform transition-all hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;