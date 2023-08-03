"use client";
import React, { createContext, useEffect, useState } from "react";
import PageTransition from "./pageTransition";
import MobileNav from "./mobileNav";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const AppContext = createContext();

function Provider({ children }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [routeFlow, setRouteFlow] = useState([]);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showTransition,
        setShowTransition,
        setRouteFlow,
        setShowMobileNav,
      }}
    >
      {/* {showTransition && (
        <PageTransition routeFlow={routeFlow} setRouteFlow={setRouteFlow} />
      )}
      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />} */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="base-page-size"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AppContext.Provider>
  );
}

export default Provider;
