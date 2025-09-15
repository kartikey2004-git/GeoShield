import {
  Accessibility,
  BarChart3,
  FileText,
  Layout,
  Server,
  Settings,
  Terminal,
  User,
  Wrench,
  Zap,
} from "lucide-react";
import React from "react";

const GridSection = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2  max-w-7xl mx-auto mb-12">
        <div className="border border-gray-800  p-6 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[600px]">
          <div>
            <h2 className="text-2xl md:text-4xl  mb-4 md:mb-6 leading-tight">
              GeoShield for tourists
            </h2>

            <p className="text-neutral-400 font-medium text-base md:text-sm leading-tight">
              <span className="text-white font-medium">GeoShield</span> keeps
              tourists safe with real-time monitoring, AI-driven alerts,
              geofencing, and blockchain-secured incident tracking.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 md:p-6 font-mono text-sm">
            <span className="text-blue-400">Hola</span>
            <span className="text-cyan-400 ml-2">peeps!</span>
            <span className="text-white ml-2">Wassup</span>
          </div>
        </div>

        {/* Right Section - Robust */}
        <div className="border border-gray-800 md:border-l-0 p-6 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[600px]">
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Settings className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
              <span className="text-gray-400 font-medium">Robust</span>
            </div>

            <h2 className="text-2xl md:text-4xl  mb-4 md:mb-6 leading-tight">
               Smart Safety for Every Traveler
            </h2>

            <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-12 leading-relaxed">
               GeoShield protects tourists with AI-powered alerts, geofencing, and blockchain-secured incident tracking.
            </p>
          </div>

          <div className="space-y-4">
            {/* Fumadocs UI Card */}
            <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-4 md:p-6 hover:bg-gray-900/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded">
                  <Layout className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 md:mb-2">
                    Stay Safe, Explore Confidently
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                     Real-time monitoring and instant alerts ensure a secure journey wherever you go.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Card */}
            <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-4 md:p-6 hover:bg-gray-900/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded">
                  <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 md:mb-2">
                    Your Travel, Secured by Technology
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                     AI, geofencing, and blockchain work together to keep tourists protected and informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Header */}
      <div className="max-w-7xl mx-auto mb-4">
        <div className="bg-gray-900/20 border border-gray-800 p-4 md:p-8 flex items-center justify-center">
          <h1 className="text-xl md:text-2xl  text-white">Features</h1>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-800 border-t-0">
        {/* Feature Cards */}
        {[
          {
            icon: Zap,
            title: "Real-Time Alerts",
            text: "Instant notifications for tourists and authorities during emergencies.",
            color: "text-red-400",
          },
          {
            icon: Wrench,
            title: "AI-Powered Monitoring",
            text: "Predictive analysis and behavior tracking to prevent incidents before they occur.",
            color: "text-blue-400",
          },
          {
            icon: Accessibility,
            title: "User-Centric Safety",
            text: "Designed for ease-of-use, ensuring tourists of all tech levels stay safe.",
            color: "text-green-400",
          },
          {
            icon: Server,
            title: "Geo-Fencing Technology",
            text: "Automatic location-based alerts and safe zone enforcement.",
            color: "text-purple-400",
          },
          {
            icon: FileText,
            title: "Blockchain Security",
            text: "Secure digital IDs and tamper-proof incident logs for trustworthy reporting.",
            color: "text-orange-400",
          },
          {
            icon: User,
            title: "Personalized Safety Profiles",
            text: "Custom settings for travelers based on preferences, health conditions, and risk levels.",
            color: "text-cyan-400",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className={`bg-gray-900/10 p-4 md:p-8 border-b sm:border-b-0 sm:border-r md:border-r last:border-r-0 last:border-b-0 border-gray-800 hover:bg-gray-900/20 transition-colors duration-200`}
          >
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <feature.icon
                className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`}
              />
              <span className="text-white text-sm md:text-base font-semibold">
                {feature.title}
              </span>
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;
