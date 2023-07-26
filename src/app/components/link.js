"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { AppContext } from "./provider";

function Link({ name, route, large }) {
  const pathname = usePathname();
  let { setShowTransition, showTransition, setRouteFlow } =
    useContext(AppContext);

  const navigate = () => {
    if (showTransition) return;
    setRouteFlow([pathname, route]);
    setShowTransition(true);
  };

  return (
    <p
      className={`p-2 cursor-pointer font-bold ${large ? "text-7xl" : ""} ${
        pathname === route ? "line-through text-orange" : ""
      }`}
      onClick={() => navigate()}
    >
      {name}
    </p>
  );
}

export default Link;
