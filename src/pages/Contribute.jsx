import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart,
  Handshake,VideoIcon, BookOpen,CalendarDays, MessageCircle,
  CircleDollarSign,
  School,
  Shield,
  Users2,
  Banknote,
  Camera,
  Edit,
  Users,
  ChevronRight,
  X,
  Copy
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "../hooks/use-toast";
import { Separator } from "@/components/ui/separator"
import QR from "../assets/images/qr.jpg"

const Contribute = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "Bank details have been copied.",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Make a Difference
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Join us in our mission to empower young girls through education and create lasting change in their lives.
            </p>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>

      {/* Contribution Options */}
      <div className="container mx-auto px-4 md:px-6 -mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Volunteer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 h-full">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Volunteer With Us</h3>
                <p className="text-gray-600 mb-6">
                  Make a direct impact by volunteering your time and skills. We welcome passionate individuals who want to contribute to our cause.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  Join as Volunteer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Donate Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 h-full">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="p-4 bg-purple-100 text-purple-600 rounded-full mb-6">
                  <CircleDollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Support Our Cause</h3>
                <p className="text-gray-600 mb-6">
                  Your financial contribution helps us expand our reach and create meaningful impact in the lives of young girls.
                </p>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  size="lg"
                  onClick={() => setIsDonateModalOpen(true)}
                >
                  Donate Now
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Why Donate Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Where Your Donation Goes
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Our NGO, <strong>Sarvodaya Manav</strong>, was founded with a mission to empower young girls through education and awareness. Your support helps us create a lasting impact in their lives through various initiatives including educational programs, awareness campaigns, and community development projects.
          </p>
        </motion.div>

        {/* Other Ways to Contribute */}
        
      </div>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Our Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                  <h2 className="text-3xl font-bold">What We Do</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: <School className="w-6 h-6 text-blue-500" />,
                    title: "Educational Workshops",
                    description: "We conduct workshops in schools to educate girls about their rights, personal safety, and avenues for support."
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-green-500" />,
                    title: "Law Enforcement Collaboration",
                    description: "We collaborate with law enforcement agencies to train them in handling sensitive cases involving women and minors."
                  },
                  {
                    icon: <Users2 className="w-6 h-6 text-purple-500" />,
                    title: "Dual Approach",
                    description: "We follow a dual approach: empowering vulnerable individuals and equipping those in authority to create systemic change."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-2 rounded-full bg-gray-50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* How to Contribute */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-blue-500" />
                  <h2 className="text-3xl font-bold">How You Can Contribute</h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Banknote className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xl font-semibold">Financial Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Any amount helps us expand our reach and continue our mission.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    onClick={() => setIsDonateModalOpen(true)}
                  >
                    Donate Now
                    <Heart className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Skill-Based Contributions:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <VideoIcon className="w-4 h-4" />, label: "Video Editing" },
                      { icon: <Camera className="w-4 h-4" />, label: "Photography" },
                      { icon: <BookOpen className="w-4 h-4" />, label: "Teaching" },
                      { icon: <Edit className="w-4 h-4" />, label: "Writing" },
                      { icon: <CalendarDays className="w-4 h-4" />, label: "Event Management" },
                      { icon: <MessageCircle className="w-4 h-4" />, label: "Communication" }
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-blue-500">
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    Don't see your skill listed? No problem! Let us know how you'd like to contribute.
                  </p>
                  <Button 
        className="bg-gradient-to-r from-green-600 to-teal-600 text-white mt-5"
        onClick={() => setIsVolunteerModalOpen(true)}
      >
        <Handshake className="w-4 h-4 mr-2" />
        Become a Volunteer
      </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      {/* Donation Modal */}
      <Dialog open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen}>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Make a Donation</DialogTitle>
            <DialogClose className="absolute right-4 top-4 opacity-70 hover:opacity-100">
              {/* <X className="w-4 h-4" /> */}
            </DialogClose>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Bank Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-semibold">Bank Transfer</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Account Name", value: "Sarvodaya Manav Foundation" },
                    { label: "Bank Name", value: "IDBI Bank" },
                    { label: "Account Number", value: "2252102000000082" },
                    { label: "IFSC Code", value: "IBKL0002252" }
                  ].map((detail, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">{detail.label}</p>
                        <p className="font-medium">{detail.value}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(detail.value)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* UPI QR Code */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-semibold">UPI Payment</h3>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
                  <img
                    src={QR}
                    alt="UPI QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-center text-gray-600">
                  Scan this QR code with any UPI app to make a donation
                </p>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contribute;