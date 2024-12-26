const Videos = () => {
  const videos = [
    {
      title: "Empowering Communities",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Correct embed URL
    },
    {
      title: "Health Camp Highlights",
      url: "https://www.youtube.com/embed/abc12345678", // Replace with actual video ID
    },
    {
      title: "Legal Awareness in Action",
      url: "https://www.youtube.com/embed/xyz98765432", // Replace with actual video ID
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
