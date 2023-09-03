"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Cart = ({
  cartItems,
  setCart,
  baseUrl,
  employeeId,
  startCheckout,
  setStartCheckout,
  showCart,
  setShowCart,
}) => {
  const [processing, setProcessing] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [checkoutFail, setCheckoutFail] = useState(false);

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

  const CartItem = ({
    id,
    imageSrc,
    title,
    price,
    size,
    color,
    quantity,
    canEdit,
  }) => (
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
          {canEdit ? (
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
          ) : (
            <p className="text-white opacity-70 text-xs">
              Quantity: <span className="font-bold">{quantity}</span>
            </p>
          )}
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
    setProcessing(true);
    axios
      .post(
        `https://all-state-server-837c9210fde1.herokuapp.com/api/submit/merch`,
        {
          data: { items: cartItems, employeeId },
        }
      )
      .then((response) => {
        setProcessing(false);
        setCheckoutSuccess(true);
        setTimeout(() => {
          setCheckoutSuccess(false);
          setStartCheckout(false);
        }, 3000);
      })
      .catch((error) => {
        setProcessing(false);
        setCheckoutFail(true);
      });
  };

  const CheckoutModal = () => (
    <div className="w-screen h-screen flex fixed justify-center items-center bg-black-950 bg-opacity-90">
      <div className="rounded-lg bg-black-950 border-2 border-orange w-full max-w-2xl">
        <div
          className="w-ful flex justify-end px-4 mt-3 cursor-pointer"
          onClick={() => {
            setCheckoutSuccess(true);
            setStartCheckout(false);
            setCheckoutFail(false);
          }}
        >
          <XCircleIcon className="w-8 h-8" />
        </div>
        {checkoutSuccess && (
          <div className="pt-4 pb-8 w-full flex justify-center items-center">
            <p className="text-xl font-bold">Your order has been placed! 🥳</p>
          </div>
        )}
        {checkoutFail && (
          <div className="pt-4 pb-8 w-full flex justify-center items-center">
            <p className="text-xl font-bold">
              There was an issue placing your order, please try again.
            </p>
          </div>
        )}
        {!checkoutSuccess && !checkoutFail && (
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
              <p className="">
                Employee ID: <span className="font-bold">{employeeId}</span>
              </p>
              <p className="text-lg">
                Total: <span className="font-bold">${calculateTotal()}</span>
              </p>
              <div
                className="bg-orange px-8 py-3 rounded-full mr-4 cursor-pointer mt-2 flex justify-center items-center"
                onClick={processing ? null : () => checkout()}
              >
                {processing ? (
                  <>
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  <p className="text-black-950 font-bold">Place Order</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {startCheckout && <CheckoutModal />}
      <div className="bg-black-950 fixed w-full top-[60px] z-30">
        <div className="w-full flex justify-end p-3">
          <div className="px-5">
            <div className="flex justify-center items-center">
              <div
                className="bg-orange px-8 py-3 rounded-full mr-4 cursor-pointer"
                onClick={
                  !cartItems.length
                    ? null
                    : () => {
                        setStartCheckout(true);
                        setShowCart(false);
                      }
                }
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
        <div className="top-36 right-10 fixed">
          <div className="rounded-lg bg-black-950 border-2 border-orange">
            {cartItems.length === 0 ? (
              <div className="p-3">
                <p>No items 🙁</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem
                    canEdit
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
                    Total:{" "}
                    <span className="font-bold">${calculateTotal()}</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
