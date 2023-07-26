import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { AppContext } from "./provider";

function LinkWrapper({ children, route }) {
  const pathname = usePathname();
  let { setShowTransition, setRouteFlow } = useContext(AppContext);
  const navigate = () => {
    setRouteFlow([pathname, route]);
    setShowTransition(true);
  };
  return (
    <div className="cursor-pointer" onClick={() => navigate()}>
      {children}
    </div>
  );
}

export default LinkWrapper;
