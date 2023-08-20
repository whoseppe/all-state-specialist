"use client";
import React, { createContext, useEffect, useState } from "react";
import PageTransition from "./pageTransition";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export const AppContext = createContext();

function Provider({ children }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [routeFlow, setRouteFlow] = useState([]);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e) => {
  //     console.log(e);
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <AppContext.Provider
      value={{
        showTransition,
        setShowTransition,
        setRouteFlow,
        setShowMobileNav,
        setShowLoading,
        showLoading,
        setShowMobileNav,
      }}
    >
      {showTransition && (
        <PageTransition routeFlow={routeFlow} setRouteFlow={setRouteFlow} />
      )}
      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}

      {children}
    </AppContext.Provider>
  );
}

export default Provider;
