import React from "react";
import { motion } from "framer-motion";

import i1 from "../../assets/images/team/main/14.jpg"
import i2 from "../../assets/images/team/main/15.jpg"
import i3 from "../../assets/images/team/main/19.jpg"
import i4 from "../../assets/images/team/main/18.jpg"
import i5 from "../../assets/images/team/main/16.jpg"
import i6 from "../../assets/images/team/main/one.jpg"
import i7 from "../../assets/images/team/main/two.jpg"
import i10 from "../../assets/images/team/main/three.jpg"
import i8 from "../../assets/images/team/main/four.jpg"
import i9 from "../../assets/images/team/main/five.jpg"

const teamPhotos = [
  { id: 1, image: i1 },
  { id: 2, image: i4 },
  { id: 3, image: i2 },
  { id: 4, image: i3 },
  { id: 5, image: i5 },
  { id: 6, image: i6 },
  { id: 7, image: i7 },
  { id: 8, image: i8 },
  { id: 9, image: i9 },
  { id: 10, image: i10 },
  
];

const TeamPhotos = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Meet the incredible individuals behind our mission to empower
            communities and create lasting change.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {teamPhotos.map((photo) => (
            <div
              key={photo.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={photo.image}
                alt={`Team member ${photo.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPhotos;
