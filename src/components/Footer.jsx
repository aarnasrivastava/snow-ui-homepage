import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-2 sm:px-8 py-4 bg-[#2A2A2A] text-gray-400 text-sm">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1136px] mx-auto">
        <p className="mb-2 sm:mb-0">© 2025 SnowUI</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
