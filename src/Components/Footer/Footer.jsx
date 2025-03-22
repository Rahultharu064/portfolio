import { FaHeart, FaLinkedinIn, FaGithub, FaTwitter, FaRegEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About</h3>
            <p className="text-gray-400 text-sm">
              A passionate developer creating web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <FaRegEnvelope className="w-5 h-5" />
                hello@example.com
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <FaPhone className="w-5 h-5" />
                +1 (234) 567-890
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="w-4 h-4 mx-1 text-red-500" /> using
            </p>
            <span className="text-purple-400 text-sm">React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;