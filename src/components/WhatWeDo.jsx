const WhatWeDo = () => {
  const data = [
    {
      title: "Workshops",
      description:
        "We are dedicated to empowering children in underserved communities by organizing evening schools that offer quality education, life skills training, and extracurricular activities.",
      icon: "👨‍🏫",
    },
    {
      title: "Legal Awareness Camps",
      description:
        "We spread legal knowledge by organizing awareness camps that empower individuals to exercise their rights and foster an informed society.",
      icon: "⚖️",
    },
    {
      title: "Health Camps",
      description:
        "We provide free health check-ups and essential screenings, promoting preventive care and empowering individuals to take control of their well-being.",
      icon: "💙",
    },
    {
      title: "Distribution Drives",
      description:
        "Our donation drives provide essentials like food, clothing, and educational materials to uplift vulnerable communities.",
      icon: "📦",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-100 via-blue-100 to-purple-200 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">What Do We Do</h2>
        <p className="text-gray-600 mt-2">Impact that we create</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-6 text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
              <span className="text-3xl">{item.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
