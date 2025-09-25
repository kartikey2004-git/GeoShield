"use client";
import { ArrowUpRight, ExternalLink, Star, Menu, X, Shield, Github } from "lucide-react";
import React, { useState, useEffect } from "react";
import { SparklesPreview } from "./ui/sparkle";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGitHubStar = () => {
    window.open("https://github.com/kartikey2004-git/GeoShield", "_blank");
  };
  
 

  const handleHomeNavigation = () => {
    router.push('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <header className={`fixed top-8 left-16 rounded-full right-8 z-50 transition-all duration-300 ${
    scrolled 
      ? "bg-black/90 backdrop-blur-md border-b border-gray-800/50" 
      : "bg-transparent"
  }`}>
          {/* Sparkles Background */}
  <SparklesPreview className="-z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <button 
              onClick={handleHomeNavigation}
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold cursor-pointer group transition-all duration-500 hover:translate-x-1"
            >
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
              <span className="text-white group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-1">Geo</span>
              <span className="text-gray-400 group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-2">Shield</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* GitHub Stars Button */}
              <button
                onClick={handleGitHubStar}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/50 group border border-transparent hover:border-gray-700 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-gray-800/30"
              >
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <Star className="w-4 h-4 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-sm font-medium">Star on GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              {/* Get Started Button */}
             
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50 rounded-lg hover:rotate-90 hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-spin" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="bg-black/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile GitHub Stars */}
              <button
                onClick={handleGitHubStar}
                className="w-full flex items-center justify-between p-3 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/50 group hover:translate-x-2 hover:shadow-lg hover:shadow-gray-800/30"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <Star className="w-5 h-5 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                  <span className="font-medium">Star on GitHub</span>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

            
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
