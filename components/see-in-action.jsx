import React from "react";

const SeeInAction = () => {
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

        <div className="flex items-center justify-center">
          {/* Your demo/video component goes here */}
        </div>
      </div>
    </div>
  );
};

export default SeeInAction;
