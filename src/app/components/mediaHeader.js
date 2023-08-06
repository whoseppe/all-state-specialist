import React from "react";

function MediaHeader({ header, subHeader, desc }) {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-full bg-black-950 opacity-50 z-10" />
      <video
        loop
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/all-state.mov" type="video/mp4" />
      </video>
      <div className="relative w-full h-full z-20">
        <div className="pl-3 sm:pl-6 pt-24">
          <div className="overflow-hidden">
            <p className="text-6xl lg:text-7xl font-bold">{header}</p>
            <p className="text-orange text-6xl lg:text-7xl font-bold">
              {subHeader}
            </p>
          </div>

          <p className="mt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default MediaHeader;
