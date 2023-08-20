"use client";
import React, { useState } from "react";
import Image from "next/image";
import SizePill from "./sizePill";

const ProductCard = ({ itemData, addItemToCart }) => {
  const { id, title, price, desc, sizes, features, colors, images, type } =
    itemData;
  const [selectedSize, setSelectedSize] = useState("sm");
  const [colorIndex, setColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const generateShortUniqueId = () => {
    const timestamp = new Date().getTime().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5); // Adjust the length as needed
    const shortUniqueId = timestamp + randomPart;
    return shortUniqueId;
  };

  const addToCart = () => {
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 2000);
    addItemToCart({
      purchaseId: generateShortUniqueId(),
      title,
      selectedSize,
      price,
      color: colors[colorIndex].label,
      quantity,
      image: images[colorIndex],
    });
  };

  const Colors = ({ color, index }) => (
    <div
      className={`mt-1 cursor-pointer ${index > 0 ? "ml-2" : ""}`}
      onClick={() => setColorIndex(index)}
    >
      <div
        className={`w-7 h-7 rounded-full ${
          colorIndex === index
            ? "ring-offset-1 ring-1 ring-offset-transparent"
            : ""
        }`}
        style={{ backgroundColor: color }}
      />
    </div>
  );

  return (
    <div className="m-4">
      <div className="w-96">
        <Image
          src={images[colorIndex]}
          className="w-full h-full object-cover p-1 rounded-xl"
          alt="Picture of the author"
        />
      </div>

      <div className="mt-2">
        <div className="flex items-center">
          {sizes.map((item, index) => (
            <SizePill
              key={index + item}
              size={item}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          ))}
        </div>
        <p className="font-bold mt-2">{title}</p>
        <div className="">
          <p className="max-w-sm text-black-500">{desc}</p>
          <div>
            {features.map((item) => (
              <p key={item} className="font-bold text-xs text-black-500">
                {" "}
                - {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold">{colors[colorIndex].label}</p>
          <div className="flex items-center">
            {colors.map((item, index) => (
              <Colors key={index + item.hex} color={item.hex} index={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div
            onClick={() => (itemAdded ? null : addToCart())}
            className="bg-white w-32 h-12 flex justify-center items-center rounded-full cursor-pointer"
          >
            {itemAdded ? (
              <div className="flex items-center space-x-5">
                <p className="text-black-950 font-bold">Item Added!</p>
              </div>
            ) : (
              <p className="text-black-950 font-bold">Add To Cart</p>
            )}
          </div>
          <p className="font-bold text-4xl mt-3">
            {price[selectedSize] || price.sm}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
