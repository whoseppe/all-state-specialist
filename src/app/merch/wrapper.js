"use client";
import React, { useState } from "react";
import ProductCard from "../components/productCard";
import { merch } from "./merchConfig";
import Cart from "../components/cart";
const Wrapper = ({ baseUrl, pass }) => {
  const [cart, setCart] = useState([]);
  const [access, setAccess] = useState(false);
  const [creds, setCreds] = useState("");
  const [error, setError] = useState(false);
  const [employeeId, setEmployeeId] = useState();
  const [startCheckout, setStartCheckout] = useState(false);

  const addItemToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const validate = () => {
    if (creds === "") return;
    setError(false);
    const prefix = pass;
    if (creds.startsWith(prefix)) {
      setEmployeeId(creds.substring(prefix.length));
      setAccess(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {!startCheckout && <div className="h-48 sm:h-48 w-full" />}
      {access ? (
        <>
          <Cart
            cartItems={cart}
            setCart={setCart}
            baseUrl={baseUrl}
            employeeId={employeeId}
            startCheckout={startCheckout}
            setStartCheckout={setStartCheckout}
          />
          <p className="opacity-20 font-bold whitespace-nowrap text-[3vw] tracking-[.3rem] sm:tracking-[.5rem] text-center">
            All State Merchandise
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="max-w-2xl mt-3">
              <p className="text-xs text-center text-black-200">
                - Browse through the available merchandise and select the items
                you want to purchase.
              </p>
              <p className="text-xs text-center text-black-200">
                - After selecting size and color (if applicable), click the
                &ldquo;Add to Cart&ldquo; button for each item you want to
                purchase.
              </p>
              <p className="text-xs text-center text-black-200">
                - From the cart page, click the &ldquo;Checkout&ldquo; or
                &ldquo;Proceed to Checkout&ldquo; button to initiate the
                checkout process.
              </p>
              <div className="px-4 py-2 border-2 border-black-200 rounded-2xl my-8">
                <p className="font-bold text-black-200 text-center text-md">
                  <span className="text-orange">
                    No credit card information is required during this process.
                  </span>{" "}
                  The cost of the purchased items will be deducted from your
                  paycheck.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start justify-center">
            <div className="max-w-7xl">
              <div className="flex flex-wrap items-start justify-center">
                {merch.map((item) => (
                  <ProductCard
                    key={item.title}
                    addItemToCart={addItemToCart}
                    itemData={item}
                  />
                ))}
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="w-full  max-w-lg">
            <p className="text-xl font-bold py-4">
              This page is reserved for employees only. Please enter your
              credentials to continue.
            </p>
            <div className="w-full flex items-center space-x-2">
              <input
                required
                className="bg-black-800 rounded-full text-white py-3 pl-3 ring-0 outline-0 w-full"
                type="text"
                name="role"
                value={creds}
                onChange={(e) => {
                  e.preventDefault;
                  setCreds(e.target.value);
                }}
                placeholder="Add Credentials..."
              />
              <div
                className="w-44 py-3 bg-orange flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => validate()}
              >
                <p className="font-bold">Submit</p>
              </div>
            </div>
            <div className="h- h-9">
              {error && (
                <p className="text-red p-2">
                  The credentials you entered were not valid
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wrapper;
