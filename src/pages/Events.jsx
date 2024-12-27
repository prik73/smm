import React, { useState } from "react";
import { motion } from "framer-motion";
import {Calendar,MapPin,Clock,Users,X,ChevronRight,Heart,Share2,Image as ImageIcon} from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import im1 from "../assets/images/three.jpg"
import im2 from "../assets/images/sch.jpg"
import im3 from "../assets/images/talk.jpg"
import im4 from "../assets/images/30.jpg"

import im5 from "../assets/images/29.jpg"


const events = [
  {
    id: 1,
    title: "Community Health Camp",
    subtitle: "Providing free health check-ups to underserved communities.",
    category: "Healthcare",
    image: im1,
    gallery: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/400",
      "/api/placeholder/800/400"
    ],
    description: "Join us for a day dedicated to improving the health of our community. Free health check-ups, medical consultations, and wellness advice from top professionals.",
    date: "March 25, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Community Center, Sector 12, Gurugram",
    attendees: "200+ Expected",
    tags: ["Health", "Community", "Free Checkup"]
  },
  {
    id: 2,
    title: "Legal Awareness Workshop",
    subtitle: "Empowering individuals by spreading legal knowledge and awareness.",
    category: "Education",
    image: im2,
    gallery: [
      im4,
      im5,
      "/api/placeholder/800/400"
    ],
    description: "Attend this workshop to learn about your legal rights and how to exercise them. Topics include consumer rights, gender justice, and more.",
    date: "April 5, 2024",
    time: "2:00 PM - 6:00 PM",
    venue: "Law Auditorium, University of Delhi",
    attendees: "150+ Expected",
    tags: ["Legal", "Workshop", "Rights"]
  },
  {
    id: 3,
    title: "Education for All",
    subtitle: "Workshops to bridge educational gaps and empower young minds.",
    category: "Education",
    image: im3,
    gallery: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/400",
      "/api/placeholder/800/400"
    ],
    description: "A day-long session with expert educators to discuss innovative teaching methods and provide resources for children in need.",
    date: "May 15, 2024",
    time: "9:00 AM - 3:00 PM",
    venue: "School Hall, Sector 45, Noida",
    attendees: "300+ Expected",
    tags: ["Education", "Children", "Workshop"]
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (event) => {
    setSelectedEvent(event);
    setSelectedImageIndex(0);
  };
  
  const closeModal = () => {
    setSelectedEvent(null);
    setSelectedImageIndex(0);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div 
            className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{ mixBlendMode: 'overlay', opacity: 0.2 }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join us in our mission to create positive change through education, 
              awareness, and community engagement.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Event Cards */}
      <div className="container mx-auto px-6 -mt-32 pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="p-0 relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge 
                  className="absolute top-4 right-4 bg-white/90 text-blue-600 hover:bg-white"
                >
                  {event.category}
                </Badge>
                <motion.div 
                  className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ImageIcon className="w-6 h-6 text-white" />
                  <span className="text-white text-sm ml-2">View Gallery</span>
                </motion.div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{event.subtitle}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    {event.venue}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                <Button 
                  variant="default"
                  size="sm"
                  onClick={() => openModal(event)}
                  className="flex items-center"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-500 hover:text-blue-500"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                <motion.img
                  key={selectedImageIndex}
                  src={selectedEvent.gallery[selectedImageIndex]}
                  alt={`${selectedEvent.title} - Image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {selectedEvent.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-600">{selectedEvent.category}</Badge>
                {selectedEvent.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedEvent.title}
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                {selectedEvent.subtitle}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {selectedEvent.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Date</p>
                      <p className="text-gray-600">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Time</p>
                      <p className="text-gray-600">{selectedEvent.time}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Venue</p>
                      <p className="text-gray-600">{selectedEvent.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Attendance</p>
                      <p className="text-gray-600">{selectedEvent.attendees}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" size="lg">
                  Register Now
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Event
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Events;