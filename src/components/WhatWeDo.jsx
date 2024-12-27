import React from "react";
import { GraduationCap, Scale, Heart, Box } from "lucide-react";

const WhatWeDo = () => {
  const data = [
    {
      title: "Workshops",
      description:
        "Empowering children in underserved communities through evening schools offering quality education, life skills, and extracurricular activities.",
      icon: <GraduationCap className="w-10 h-10" />,
    },
    {
      title: "Legal Awareness Camps",
      description:
        "Spreading legal knowledge through awareness camps that empower individuals to exercise their rights and foster an informed society.",
      icon: <Scale className="w-10 h-10" />,
    },
    {
      title: "Health Camps",
      description:
        "Providing free health check-ups and essential screenings to promote preventive care and well-being.",
      icon: <Heart className="w-10 h-10" />,
    },
    {
      title: "Distribution Drives",
      description:
        "Organizing donation drives to provide essentials like food, clothing, and educational materials for vulnerable communities.",
      icon: <Box className="w-10 h-10" />,
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-100 via-white to-blue-50 py-20 overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-16 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-[100px]"></div>
        <div className="absolute top-36 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-[150px]"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          What Do We Do
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Empowering communities with impactful initiatives
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 container mx-auto px-8 relative z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 p-8 text-center"
          >
            {/* Icon with Hover Effect */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>

            {/* Floating Glow Effect */}
            <div className="absolute inset-0 -z-10 group-hover:bg-gradient-to-tr from-blue-200 via-purple-200 to-transparent opacity-40 rounded-2xl blur-md transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
