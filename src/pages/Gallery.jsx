import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

import i1 from "../assets/images/it.jpg"
import i2 from "../assets/images/gallery/img1.jpg"
import i3 from "../assets/images/gallery/img3.jpg"
import i4 from "../assets/images/gallery/img5.jpg"
import i5 from "../assets/images/gallery/img6.jpg"
import i6 from "../assets/images/gallery/img7.jpg"
import i7 from "../assets/images/gallery/img8.jpg"
import i8 from "../assets/images/gallery/img11.jpg"
import i9 from "../assets/images/gallery/img14.jpg"
import i10 from "../assets/images/gallery/img15.jpg"
import i11 from "../assets/images/gallery/img16.jpg"
import i12 from "../assets/images/gallery/img23.jpg"
import i13 from "../assets/images/gallery/img24.jpg"
import i14 from "../assets/images/gallery/img25.jpg"
import i15 from "../assets/images/gallery/img26.jpg"
import i16 from "../assets/images/gallery/img27.jpg"
import i17 from "../assets/images/gallery/img28.jpg"
import i18 from "../assets/images/gallery/img29.jpg"
import i19 from "../assets/images/gallery/img30.jpg"
import i20 from "../assets/images/gallery/img31.jpg"
import i21 from "../assets/images/gallery/img32.jpg"
import i22 from "../assets/images/gallery/img33.jpg"
import i23 from "../assets/images/gallery/img34.jpg"
import i24 from "../assets/images/gallery/img35.jpg"
import i25 from "../assets/images/gallery/img36.jpg"
import i26 from "../assets/images/gallery/img37.jpg"
import i27 from "../assets/images/gallery/img38.jpg"
import i28 from "../assets/images/gallery/img39.jpg"
import i29 from "../assets/images/gallery/img40.jpg"
import i30 from "../assets/images/gallery/img41.jpg"
import i31 from "../assets/images/gallery/img42.jpg"
import i32 from "../assets/images/gallery/img43.jpg"
import i33 from "../assets/images/gallery/img44.jpg"
import i34 from "../assets/images/gallery/img45.jpg"
import i35 from "../assets/images/gallery/img46.jpg"
import i36 from "../assets/images/gallery/img47.jpg"
import i37 from "../assets/images/gallery/img48.jpg"
import i38 from "../assets/images/gallery/img49.jpg"
import i39 from "../assets/images/gallery/img50.jpg"
import i40 from "../assets/images/gallery/img51.jpg"
import i41 from "../assets/images/gallery/img52.jpg"
import i42 from "../assets/images/gallery/img53.jpg"
import i43 from "../assets/images/gallery/img54.jpg"
import i44 from "../assets/images/gallery/img55.jpg"
import i45 from "../assets/images/gallery/img56.jpg"
import i46 from "../assets/images/gallery/img57.jpg"
import i47 from "../assets/images/gallery/img58.jpg"
import i48 from "../assets/images/gallery/img59.jpg"
import i49 from "../assets/images/gallery/img60.jpg"


const galleryImages = [
    { "id": 1, "src": i1, "alt": "Gallery Image 1" },
    { "id": 2, "src": i2, "alt": "Gallery Image 2" },
    { "id": 3, "src": i3, "alt": "Gallery Image 3" },
    { "id": 4, "src": i4, "alt": "Gallery Image 4" },
    { "id": 5, "src": i5, "alt": "Gallery Image 5" },
    { "id": 6, "src": i6, "alt": "Gallery Image 6" },
    { "id": 7, "src": i7, "alt": "Gallery Image 7" },
    { "id": 8, "src": i8, "alt": "Gallery Image 8" },
    { "id": 9, "src": i9, "alt": "Gallery Image 9" },
    { "id": 10, "src": i10, "alt": "Gallery Image 10" },
    { "id": 11, "src": i11, "alt": "Gallery Image 11" },
    { "id": 12, "src": i12, "alt": "Gallery Image 12" },
    { "id": 13, "src": i13, "alt": "Gallery Image 13" },
    { "id": 14, "src": i14, "alt": "Gallery Image 14" },
    { "id": 15, "src": i15, "alt": "Gallery Image 15" },
    { "id": 16, "src": i16, "alt": "Gallery Image 16" },
    { "id": 17, "src": i17, "alt": "Gallery Image 17" },
    { "id": 18, "src": i18, "alt": "Gallery Image 18" },
    { "id": 19, "src": i19, "alt": "Gallery Image 19" },
    { "id": 20, "src": i20, "alt": "Gallery Image 20" },
    { "id": 21, "src": i21, "alt": "Gallery Image 21" },
    { "id": 22, "src": i22, "alt": "Gallery Image 22" },
    { "id": 23, "src": i23, "alt": "Gallery Image 23" },
    { "id": 24, "src": i24, "alt": "Gallery Image 24" },
    { "id": 25, "src": i25, "alt": "Gallery Image 25" },
    { "id": 26, "src": i26, "alt": "Gallery Image 26" },
    { "id": 27, "src": i27, "alt": "Gallery Image 27" },
    { "id": 28, "src": i28, "alt": "Gallery Image 28" },
    { "id": 29, "src": i29, "alt": "Gallery Image 29" },
    { "id": 30, "src": i30, "alt": "Gallery Image 30" },
    { "id": 31, "src": i31, "alt": "Gallery Image 31" },
    { "id": 32, "src": i32, "alt": "Gallery Image 32" },
    { "id": 33, "src": i33, "alt": "Gallery Image 33" },
    { "id": 34, "src": i34, "alt": "Gallery Image 34" },
    { "id": 35, "src": i35, "alt": "Gallery Image 35" },
    { "id": 36, "src": i36, "alt": "Gallery Image 36" },
    { "id": 37, "src": i37, "alt": "Gallery Image 37" },
    { "id": 38, "src": i38, "alt": "Gallery Image 38" },
    { "id": 39, "src": i39, "alt": "Gallery Image 39" },
    { "id": 40, "src": i40, "alt": "Gallery Image 40" },
    { "id": 41, "src": i41, "alt": "Gallery Image 41" },
    { "id": 42, "src": i42, "alt": "Gallery Image 42" },
    { "id": 43, "src": i43, "alt": "Gallery Image 43" },
    { "id": 44, "src": i44, "alt": "Gallery Image 44" },
    { "id": 45, "src": i45, "alt": "Gallery Image 45" },
    { "id": 46, "src": i46, "alt": "Gallery Image 46" },
    { "id": 47, "src": i47, "alt": "Gallery Image 47" },
    { "id": 48, "src": i48, "alt": "Gallery Image 48" },
    { "id": 49, "src": i49, "alt": "Gallery Image 49" }
  ];
  

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    // Close modal with Esc key
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedIndex(null);
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        }
      };
  
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);
  
    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);
  
    const nextImage = () => {
      setSelectedIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevImage = () => {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <section className="bg-gray-50 py-16 mt-[110px]">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Gallery</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore moments from our initiatives and community events that
              showcase our efforts in empowering lives and creating lasting
              change.
            </p>
          </motion.div>
  
          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
  
        {/* Modal */}
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/75"
                onClick={closeModal}
              >
                <X className="w-5 h-5" />
              </button>
  
              {/* Navigation Buttons */}
              <button
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75"
                onClick={prevImage}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75"
                onClick={nextImage}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
  
              {/* Modal Image */}
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </section>
    );
  };
  
  export default Gallery;
