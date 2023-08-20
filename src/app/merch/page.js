import React from "react";
import OpenAnimation from "../components/openAnimation";
import Wrapper from "./wrapper";

function page() {
  return (
    <>
      <OpenAnimation />
      <div className="h-48 sm:h-48 w-full" />
      <Wrapper baseUrl={process.env.BASE} pass={process.env.PASS} />
    </>
  );
}

export default page;
