import React from "react";
import OpenAnimation from "../components/openAnimation";
import Wrapper from "./wrapper";

function page() {
  return (
    <>
      <OpenAnimation />
      <Wrapper baseUrl={process.env.BASE} pass={process.env.PASS} />
    </>
  );
}

export default page;
