function MapSection() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center">Find Us</h2>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=example"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default MapSection;
  