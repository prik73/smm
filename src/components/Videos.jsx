const Videos = () => {
  const videos = [
    {
      title: "Right to Property",
      url: "https://www.youtube.com/embed/k_V6dAuwmtg", // Correct embed URL
    },
    {
      title: "Domestic Violence",
      url: "https://www.youtube.com/embed/mQROk2iSmEk", // Correct embed URL
    },
    {
      title: "Sexual Harrasement at Workplace",
      url: "https://www.youtube.com/embed/Hd_B7YOCmYQ", // Correct embed URL
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Watch Our Work</h2>
        <p className="text-lg text-gray-600">See our impact through actions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-6">
        {videos.map((video, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                A closer look at our initiatives in action.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
