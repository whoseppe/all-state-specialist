"use client";
import React, { createContext, useState } from "react";
import MobileNav from "./mobileNav";

export const AppContext = createContext();

function Provider({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        setShowMobileNav,
        setShowLoading,
        showLoading,
        setShowMobileNav,
      }}
    >
      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}

      {children}
    </AppContext.Provider>
  );
}

export default Provider;
