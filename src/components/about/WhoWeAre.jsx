import React from "react";
import { motion } from "framer-motion";
import { Info, Globe, Users } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import im1 from "../../assets/images/three.jpg"

const WhoWeAre = () => {
  return (
    <section className="bg-gray-50 py-16 ">
      <div className="container mx-auto px-6 mt-[70px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Big Card */}
          <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
            <CardHeader className="p-8 border-b border-gray-200">
              <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <Info className="text-blue-600 w-8 h-8" />
                Who We Are
              </h2>
            </CardHeader>

            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Image */}
                <div className="w-full lg:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={im1} // Replace with your image path
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    At SMM Foundation, we're committed to empowering individuals
                    and communities through education, legal support, and
                    essential resources. Our mission is to provide a
                    comprehensive range of programs and services that address
                    the needs of those seeking guidance, assistance, and
                    opportunities for growth. From counseling sessions and legal
                    aid to educational workshops and community outreach
                    initiatives, we strive to create a supportive and inclusive
                    environment where everyone can reach their full potential.
                  </p>

                  {/* Icons Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex items-center gap-4">
                      <Globe className="text-green-600 w-8 h-8" />
                      <p className="text-gray-800 font-semibold">
                        Global Outreach
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="text-purple-600 w-8 h-8" />
                      <p className="text-gray-800 font-semibold">
                        Community Support
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Info className="text-blue-600 w-8 h-8" />
                      <p className="text-gray-800 font-semibold">
                        Holistic Guidance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
