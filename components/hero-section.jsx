import { ArrowUpRight } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import React from "react";
import WorldMap from "./ui/world-map";
import { motion } from "motion/react";

const instrumentalSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <>
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-20 pb-16 md:flex-row md:gap-8 lg:px-8 mb-20">
        <div className="w-full md:w-1/2">
          <h1
            className={`${instrumentalSerif.className} mb-8 text-4xl font-light leading-tight tracking-tighter md:text-5xl`}
          >
            <span className="text-gray-600">AI-Driven </span>
            <span className="font-normal text-white">Smart Safety &</span>
            <br />
            <span className="text-gray-600">Incident Response </span>
            <span className="font-normal text-white">for Tourists</span>
          </h1>

          <div className="relative mb-8">
            <p className="inline-block rounded border border-gray-700 bg-black/50 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
              Discover GeoShield
            </p>
          </div>

          <p className="mb-12 max-w-md text-sm leading-tight text-gray-300">
            An AI-powered, blockchain-secured system that monitors tourist
            safety in real-time and provides rapid incident response using
            geofencing technology.
          </p>

          <div className="flex items-center gap-4">
            <button className="group flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-black transition-all hover:scale-105 hover:bg-gray-100 active:scale-95">
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>backed by</span>
              <div className="rounded bg-orange-500 px-2 py-1 text-xs  text-white">
                Peers
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="h-80 w-full rounded-xl  ">
            <div className=" bg-black w-full">
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
