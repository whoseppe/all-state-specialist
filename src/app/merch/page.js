import React from "react";
import OpenAnimation from "../components/openAnimation";
import Wrapper from "./wrapper";

function page() {
  return (
    <>
      <OpenAnimation />
      <div className="h-48 sm:h-48 w-full" />
      <Wrapper
        baseUrl={process.env.NEXT_PUBLIC_BASE}
        pass={process.env.NEXT_PUBLIC_PASS}
      />
    </>
  );
}

export default page;
