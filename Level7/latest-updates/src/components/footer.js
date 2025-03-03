import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-gray-400">To be the leading online platform of Political Insights for the masses to get the latest updates.</p>
          </div>

        
          <div className="text-center"
            />
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400"></p>
          </div>

          
          <div className="text-center">
            
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <p className="text-gray-400"> <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="text-gray-600 hover:text-blue-500" />{" "}
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="text-gray-600 hover:text-blue-400" />{" "}
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-gray-600 hover:text-pink-500" />{" "}
                      </a>
                    </div></p>
          </div>
        

        
        <div className="text-center border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            &copy; @2025.Latest Updates All rights reserved.
          </p>
        </div>
      
    </footer>
  );
};

export default Footer;