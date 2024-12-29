import { Instagram, Facebook, Youtube, Mail, Github, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.instagram.com/p/DCyfSV_PbBt/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.facebook.com/photo.php?fbid=122151557258268926&id=61558067799297&set=a.122112407810268926"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarvodaya-manav-se-manavta-foundation-909990313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-200"
            aria-label="Linkedin"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Text Content with Hover Cards */}
        <p className="text-sm text-gray-400">
          All rights reserved. © {new Date().getFullYear()}
        </p>
        <div className="flex justify-center space-x-2 mt-1">
          <HoverCard>
            <HoverCardTrigger className="text-sm text-gray-400 font-semibold cursor-pointer hover:text-white transition">
              Priyanshu
            </HoverCardTrigger>
            <HoverCardContent className="p-3 bg-gray-800 text-gray-200 rounded-md shadow-lg w-40">
              <div className="flex flex-col items-start space-y-2">
                <a
                  href="mailto:prinovac@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/prik73/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
          <span className="text-sm text-gray-400">and</span>
          <HoverCard>
            <HoverCardTrigger className="text-sm text-gray-400 font-semibold cursor-pointer hover:text-white transition">
              Saarthak
            </HoverCardTrigger>
            <HoverCardContent className="p-3 bg-gray-800 text-gray-200 rounded-md shadow-lg w-40">
              <div className="flex flex-col items-start space-y-2">
                <a
                  href="mailto:saarthakagarwal0408@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/Saarthak1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
