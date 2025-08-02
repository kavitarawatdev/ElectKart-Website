import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="section common-section bg-gray-900 text-white py-10 px-6">
      <div className="container bg-gray-900 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ElecKart</h2>
          <p className="text-gray-400">
            Your trusted destination for smartphones, laptops, accessories and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Smartphones</a></li>
            <li><a href="#" className="hover:text-white">Laptops</a></li>
            <li><a href="#" className="hover:text-white">Accessories</a></li>
            <li><a href="#" className="hover:text-white">Tablets</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="container  bg-gray-900 text-center text-gray-500 text-sm mt-10">
        © 2025 ElecKart. All rights reserved.
      </div>
    </footer>
  );
};

