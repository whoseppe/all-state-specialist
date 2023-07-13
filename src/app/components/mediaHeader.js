"use client";
import React from "react";
// import vid from "../../../public/vid.mp4";

function MediaHeader() {
  return (
    <div className="relative bg-orange w-full h-screen">
      <div className="absolute w-full h-full bg-black opacity-50 z-10" />
      <video
        loop
        autoPlay
        muted
        className="absolute w-full h-full object-cover"
      >
        <source
          src={
            "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          }
          type="video/mp4"
        />
      </video>
      <div className="relative w-full h-full flex items-center justify-center z-20">
        <div className="p-6">
          <p className="text-3xl font-bold text-center">
            Welcome to{" "}
            <span className="text-orange">All State Specialist LLC.</span>
          </p>
          <p className="mt-2 text-center">
            Your Trusted Partner for Construction Excellence in the Phoenix
            Area!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MediaHeader;
