import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { AppContext } from "./provider";

function ButtonAction({ className, route, text }) {
  const pathname = usePathname();
  let { setShowTransition, showTransition, setRouteFlow } =
    useContext(AppContext);

  const navigate = () => {
    if (showTransition) return;
    setRouteFlow([pathname, route]);
    setShowTransition(true);
  };

  return (
    <div className={className}>
      <button
        className="bg-orange text-white font-bold w-52 h-14 rounded-md"
        onClick={() => navigate()}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonAction;
