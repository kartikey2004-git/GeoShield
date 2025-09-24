"use client";
import { ArrowUpRight, Shield, MapPin, AlertTriangle } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import React, { useState, useEffect } from "react";
import WorldMap from "./ui/world-map";
import { motion } from "motion/react";
import Particles from "./ui/particles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";

const instrumentalSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
   const handleGetStarted = () => {
    router.push('/dashboard');
  };
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track tourist locations and safety status in real-time",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      title: "Incident Response",
      description: "Rapid emergency response with local authorities",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      title: "Blockchain Security",
      description: "Secure data with immutable blockchain technology",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  useEffect(() => {
    setMounted(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;
 const words = [
  { text: "AI-Driven\u00A0", className: "text-gray-600" },
  { text: "Smart\u00A0Safety\u00A0&\u00A0", className: "font-normal text-white" },
  { text: "Incident\u00A0Response\u00A0", className: "text-gray-600" },
  { text: "for\u00A0Tourists", className: "font-normal text-white" },
];



  return (
    <>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      
      {/* Particles effect */}
      <Particles 
        className="z-0" 
        quantity={100} 
        staticity={30} 
        ease={70} 
        color="#4f46e5"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-20 pb-16 md:flex-row md:gap-8 lg:px-8 mb-20">
        <motion.div 
         
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
        >
           <motion.h1
      className={`${instrumentalSerif.className} mb-8 text-4xl font-light leading-tight tracking-tighter md:text-5xl lg:text-6xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <TypewriterEffect words={words} />
    </motion.h1>

          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex gap-4">
            <p className="inline-block rounded border border-gray-700 bg-black/50 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
              Discover GeoShield
            </p>
            <Link href="/dashboard">
              <button className="group flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95">
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </Link>
            </div>
            <div className="absolute -bottom-1 -right-1 h-8 w-8 animate-ping rounded-full bg-indigo-500/20" />
          </motion.div>

          <motion.p 
            className="mb-8 max-w-md text-sm leading-tight text-gray-300 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            An AI-powered, blockchain-secured system that monitors tourist
            safety in real-time and provides rapid incident response using
            geofencing technology.
          </motion.p>
          
          {/* Feature highlights */}
          <motion.div 
            className="mb-12 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={cn(
                  "flex items-center gap-3 rounded-lg border border-gray-800 px-4 py-3 transition-all",
                  activeFeature === index ? "bg-gray-800/50 border-gray-700" : "bg-transparent"
                )}
                animate={{
                  scale: activeFeature === index ? 1.02 : 1,
                  borderColor: activeFeature === index ? "rgba(107, 114, 128, 0.8)" : "rgba(31, 41, 55, 0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  activeFeature === index ? "bg-indigo-500 text-white" : "bg-gray-800 text-gray-400"
                )}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{feature.title}</h3>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>backed by</span>
              <div className="rounded bg-orange-500 px-2 py-1 text-xs text-white">
                Peers
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative h-80 w-full rounded-xl overflow-hidden">
            {/* Glow effect behind the map */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full transform -translate-y-1/4" />
            
            <div className="relative bg-black w-full h-full rounded-xl overflow-hidden border border-gray-800">
              <WorldMap
                dots={[
                  {
                    start: {
                      lat: 64.2008,
                      lng: -149.4937,
                    }, // Alaska (Fairbanks)
                    end: {
                      lat: 34.0522,
                      lng: -118.2437,
                    }, // Los Angeles
                  },
                  {
                    start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                    end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                  },
                  {
                    start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278 }, // London
                    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                  },
                ]}
                lineColor="#4f46e5"
              />
              
              {/* Floating stats */}
              <motion.div 
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-3 text-xs"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-between gap-4 text-gray-400">
                  <span>Active Users</span>
                  <span className="text-white">1,248</span>
                </div>
                <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-indigo-500 rounded-full" 
                    initial={{ width: "0%" }}
                    animate={{ width: "78%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
