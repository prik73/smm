import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Heart, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "../hooks/use-toast";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden mt-[110px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div 
            className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{ mixBlendMode: 'overlay', opacity: 0.2 }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30">
          <motion.div 
            className="h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              We're Here to Help
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed px-4">
              Whether you're looking to contribute, share feedback, or seek help,
              we're always ready to listen. Together, we can build a better, brighter future.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-gray-50 to-transparent"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 -mt-[60px] sm:-mt-[70px] md:-mt-[90px] pb-10 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 h-full">
              <CardHeader className="p-6 sm:p-8 pb-4 sm:pb-6">
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Reach Out to Us
                </h2>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">
                  Contact us to contribute, ask questions, or seek assistance. 
                  We are here to support you.
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-4 space-y-2 sm:space-y-0">
                {[
                  { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, color: "blue", 
                    content: "A1-203, Mapsko Casa Bella, Sector 82, Gurugram, Haryana, 122002" },
                  { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />, color: "green", 
                    content: "+91 8860009103" },
                  { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, color: "red", 
                    content: "princy@smmfoundation.org.in" },
                  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, color: "yellow", 
                    content: "Mon-Fri, 9 AM - 5 PM" },
                  { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, color: "pink", 
                    content: "Thank you for your contributions and support!" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-2 sm:p-3 bg-${item.color}-100 text-${item.color}-500 rounded-xl`}>
                      {item.icon}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{item.content}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader className="p-6 sm:p-8 pb-4 sm:pb-6">
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-4">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input 
                      placeholder="Enter your name"
                      className="bg-white/50"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-white/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Type your message here"
                      className="min-h-[120px] sm:min-h-[150px] bg-white/50"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;