import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import Link from "next/link";

const SeeInAction = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger a video player
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-3xl mb-2">See It In Action</h1>
          <p className="text-neutral-400 font-medium text-base md:text-xs leading-tight">
            See how <span className="text-white font-medium">GeoShield</span>{" "}
            keeps tourists safe in real-time,
            <br />
            leveraging AI, blockchain, and geofencing technologies.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-xl overflow-hidden mb-8">
            {isPlaying ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="GeoShield Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handlePlayDemo}
                  className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors"
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white text-xl font-medium">GeoShield Demo</div>
              </div>
            )}
          </div>
          
          <div className="flex gap-4">
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors flex items-center gap-2">
                Try the dashboard
                <ExternalLink className="w-4 h-4" />
              </button>
            </Link>
            
            <Link href="https://github.com/kartikey2004-git/GeoShield">
              <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                View source code
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeInAction;
