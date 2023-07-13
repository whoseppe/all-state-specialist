import React from "react";
import Nav from "./nav";

function Wrapper({ children }) {
  console.log("hey");
  return (
    <div>
      <Nav />
      <div className="h-24 sm:h-12 w-full" />
      {children}
    </div>
  );
}

export default Wrapper;
