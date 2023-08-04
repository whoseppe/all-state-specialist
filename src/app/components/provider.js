"use client";
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import PageTransition from "./pageTransition";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";
import OpenAnimation from "./openAnimation";

export const AppContext = createContext();

function Provider({ children }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [routeFlow, setRouteFlow] = useState([]);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showOnEveryPage, setShowOnEveryPage] = useState(true);

  useLayoutEffect(() => {
    if (window) {
      if (window.innerWidth < 500) {
        setShowOnEveryPage(false);
      }
    }
  }, [window]);

  return (
    <AppContext.Provider
      value={{
        showTransition,
        setShowTransition,
        setRouteFlow,
        setShowMobileNav,
      }}
    >
      {showTransition && (
        <PageTransition routeFlow={routeFlow} setRouteFlow={setRouteFlow} />
      )}
      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
      <OpenAnimation
        showOnEveryPage={showOnEveryPage}
        setShowLoading={setShowLoading}
        showLoading={showLoading}
      />
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
