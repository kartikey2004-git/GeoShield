// ./ui/sparkle.jsx
"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview({ className = "" }) {
  return (
    <div className={`absolute  w-full h-full ${className}`}>
      <SparklesCore
        id="tsparticles-navbar"
        background="transparent"
        minSize={0.7}
        maxSize={1.5}
        particleDensity={120}
                       // ensures immediate smooth movement
        minOpacity={0.6}        // keeps particles visible
        maxOpacity={0.9}
        drift={2.5}             // gentle side motion
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
}
