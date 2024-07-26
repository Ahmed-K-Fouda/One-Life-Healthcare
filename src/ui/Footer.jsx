// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg shadow-gray-500 text-black py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">One Life Healthcare</h2>
            <p className="text-sm mb-4">
              Connecting and healing through technology and community support.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/onelifehealthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-blue-400 mx-2"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/onelifehealthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-blue-400 mx-2"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/onelifehealth_care"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-blue-400 mx-2"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-4 mt-4 text-center">
          <p className="text-sm">
            &copy; 2024 One Life Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
