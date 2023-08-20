"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Cart = ({ cartItems, setCart, baseUrl, employeeId }) => {
  const [showCart, setShowCart] = useState(false);

  const adjustQuantity = (id, dir) => {
    const updatedItems = cartItems.map((item) => {
      if (item.purchaseId === id) {
        return {
          ...item,
          quantity: getQuantity(item.quantity, dir),
        };
      }
      return item;
    });
    setCart(updatedItems);
  };

  const getQuantity = (cur, dir) => {
    if (cur === 5 && dir === "up") return cur;
    if (cur === 1 && dir === "down") return cur;
    let newQuantity = cur;
    if (dir === "up") {
      newQuantity += 1;
    } else {
      newQuantity -= 1;
    }
    return newQuantity;
  };

  const removeItem = (id) => {
    let filtered = cartItems.filter((i) => i.purchaseId !== id);

    if (filtered.length === 0) {
      setShowCart(false);
    }

    setCart(filtered);
  };

  const CartItem = ({ id, imageSrc, title, price, size, color, quantity }) => (
    <div>
      <div className="flex items-start p-3">
        <div className="w-12">
          <Image
            src={imageSrc}
            className="w-full h-full object-cover rounded-sm"
            alt="Picture of the author"
          />
        </div>
        <div className="ml-2">
          <div>
            <p className="text-white font-bold text-xs">{title}</p>
            <p className="text-white opacity-70 text-xs">
              {price} | {size} | {color}
            </p>
          </div>
          <div className="flex mt-2">
            <div className="flex items-center">
              <div
                className="bg-white h-5 w-5 flex justify-center items-center rounded-sm cursor-pointer"
                onClick={() => adjustQuantity(id, "down")}
              >
                <p className="text-black-950 font-bold">-</p>
              </div>
              <div className="w-4 ml-4 mr-2">
                <p className="font-bold">{quantity}</p>
              </div>
              <div
                className="bg-white h-5 w-5 flex justify-center items-center rounded-sm cursor-pointer"
                onClick={() => adjustQuantity(id, "up")}
              >
                <p className="text-black-950 font-bold">+</p>
              </div>
            </div>
            <div
              className="bg-red py-1 px-2 ml-8 rounded-md cursor-pointer"
              onClick={() => removeItem(id)}
            >
              <p className="text-xs font-bold">remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const calculateTotal = () => {
    if (!cartItems.length) return;
    let sum = 0;

    cartItems.forEach((item) => {
      let selectedPrice = item.price[item.selectedSize];
      const numericValue = parseFloat(selectedPrice.replace("$", ""));
      sum += numericValue * item.quantity;
    });
    return sum;
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const checkout = () => {
    axios
      .post(`${baseUrl}/merch`, {
        data: [...cartItems, { employeeId: employeeId }],
      })
      .then((response) => {
        // setIsProcessing(false);
        // setAppSubmitted(true);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        // setIsProcessing(false);
        // setError(true);
        // console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const getCartStyles = () => {};

  return (
    <>
      <div className="bg-black-950 fixed w-full top-[60px] z-30">
        <div className="w-full flex justify-end p-3">
          <div className="px-5">
            <div className="flex justify-center items-center">
              <div
                className="bg-orange px-8 py-3 rounded-full mr-4 cursor-pointer"
                onClick={() => checkout()}
              >
                <p className="text-black-950 font-bold">Checkout</p>
              </div>
              <div
                className="cursor-pointer w-20 flex justify-center items-center"
                onClick={() => setShowCart(!showCart)}
              >
                <div>
                  <div className="flex justify-center items-center">
                    <ShoppingCartIcon className="h-8 w-8" />
                    <div className="ml-2 font-bold">{cartItems.length}</div>
                  </div>
                  <p className="text-xs underline">
                    {showCart ? "hide" : "show"} cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCart && (
        <div className="rounded-lg bg-black-950 border-2 border-orange top-36 right-10 fixed">
          {cartItems.length === 0 ? (
            <div className="p-3">
              <p>No items 🙁</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.purchaseId}
                  imageSrc={item.image}
                  title={item.title}
                  price={item.price[item.selectedSize]}
                  size={item.selectedSize}
                  color={item.color}
                  id={item.purchaseId}
                  quantity={item.quantity}
                />
              ))}
              <div className="p-3">
                <p className="text-lg">
                  Total: <span className="font-bold">${calculateTotal()}</span>
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
