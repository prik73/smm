function Videos() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center">Watch Our Work</h2>
        <div className="flex justify-center mt-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/example"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default Videos;
  