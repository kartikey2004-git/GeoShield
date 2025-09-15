import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="relative z-10 flex justify-between items-center px-8 py-">
      {/* Logo */}
      <div className="text-3xl flex items-center">
        <span className="text-white">Geo</span>
        <span className="text-gray-400">Shield</span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-4">
        {/* GitHub Stars */}
        <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
          <Star className="w-4 h-4" />
          <span className="text-sm">Star on GitHub</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Get Started */}
        <button className="hidden sm:flex lg:flex bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors items-center gap-2 group">
          Get started
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </header>
  );
};

export default Header;
