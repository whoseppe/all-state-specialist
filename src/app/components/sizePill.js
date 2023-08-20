"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hat from "../../../public/hat_trucker_black.png";

const SizePill = ({ size, selectedSize, setSelectedSize }) => {
  useEffect(() => {
    if (size === "one-size") {
      setSelectedSize(size);
    }
  }, []);
  return (
    <div
      onClick={() => (size === "one-size" ? null : setSelectedSize(size))}
      className={`cursor-pointer flex items-center justify-center ${
        selectedSize === size
          ? "bg-black-200 border-black-200"
          : "border-black-400"
      } ${size === "one-size" ? "w-20" : "w-12"}  border-2 m-1 rounded-xl`}
    >
      <p
        className={`font-bold ${
          selectedSize === size ? "text-black-950" : "text-black-400"
        }`}
      >
        {size}
      </p>
    </div>
  );
};

export default SizePill;
