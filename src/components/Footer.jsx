import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Text Content */}
        <p className="text-sm text-gray-400">
          All rights reserved. © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Developed by <span className="font-semibold">Priyanshu Baswala</span>{" "}
          and <span className="font-semibold">Saarthak Agarwal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
