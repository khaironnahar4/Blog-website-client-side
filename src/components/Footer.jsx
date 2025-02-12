import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-8 lg:mt-24 md:mt-16 sm:mt-12 mt-10 px-4 lg:px-2">
      <div className="max-w-7xl mx-auto container grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* World Section */}
        <div>
          <h3 className="font-bold mb-4">World</h3>
          <ul className="space-y-2">
            <li>Global Economy</li>
            <li>Religion</li>
            <li>Bitcoin</li>
            <li>Conflict</li>
            <li>Sports</li>
            <li>Scandals</li>
          </ul>
        </div>

        {/* Entertainment Section */}
        <div>
          <h3 className="font-bold mb-4">Entertainment</h3>
          <ul className="space-y-2">
            <li>Celebrity News</li>
            <li>Movies</li>
            <li>TV News</li>
            <li>Music News</li>
            <li>Lifestyle</li>
            <li>Entertainment Video</li>
          </ul>
        </div>

        {/* Health Section */}
        <div>
          <h3 className="font-bold mb-4">Health</h3>
          <ul className="space-y-2">
            <li>Medical Research</li>
            <li>Healthy Living</li>
            <li>Mental Health</li>
            <li>Virus Corona</li>
            <li>Childrens Health</li>
          </ul>
        </div>

        {/* Business Section */}
        <div>
          <h3 className="font-bold mb-4">Business</h3>
          <ul className="space-y-2">
            <li>Markets</li>
            <li>Technology</li>
            <li>Features</li>
            <li>Property</li>
            <li>Business Leaders</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t dark:border-gray-600 border-gray-500">
      <div className="max-w-7xl mx-auto pt-4 text-center md:text-left md:flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">
            Blog<span className="text-red-500">Sphere</span>
          </h2>
          <p className="mt-2 text-gray-800 dark:text-gray-400 text-sm">
            Copyright © 2025 Bloging Website
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4 justify-center md:justify-start">
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-500 text-blue-500" />
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-400 text-blue-400" />
          <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500 text-green-500" />
          <FaTelegram className="text-xl cursor-pointer hover:text-blue-600 text-blue-600" />
          <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700 text-blue-700" />
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
