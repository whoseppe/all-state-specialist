import React from "react";
import SafetyContent from "../components/safetyContent";
import HeaderTextSlide from "../components/headerTextSlide";
import OpenAnimation from "../components/openAnimation";

function page() {
  return (
    <>
      <OpenAnimation />
      <div className="p-3 sm:p-6">
        <div className="h-24 sm:h-12 w-full" />
        <HeaderTextSlide
          headline="Safety is not just a rule, it's a
        culture. It should be woven into the fabric of every construction site."
          orangeWords="Safety"
          delay={2}
        />
        <SafetyContent />
      </div>
    </>
  );
}

export default page;
