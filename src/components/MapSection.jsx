import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const MapSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-3">
            Contact us and find us on the map
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.844174696114!2d76.96039927618489!3d28.393774094881778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d9f95285b77%3A0xd2a215b5d9ca1df!2sMapsko%20Casa%20Bella!5e0!3m2!1sen!2sin!4v1721647194589!5m2!1sen!2sin"
              className="w-full h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <MapPin size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600 mt-1">
                  Mapsko Casa Bella, Sector 82, Gurugram, Haryana, India
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 text-green-600 rounded-full p-3">
                <Mail size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">princy@smmfoundation.org.in</p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3">
                <Phone size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600 mt-1">tel: +91 8860009103</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
