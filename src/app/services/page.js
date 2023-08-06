import React from "react";
import ServicesContent from "../components/servicesContent";
import ServicesAnimation from "../components/servicesAnimation";
import HeaderTextSlide from "../components/headerTextSlide";
import OpenAnimation from "../components/openAnimation";
function page() {
  return (
    <>
      <OpenAnimation />
      <div className="max-w-full">
        <div className="h-24 sm:h-12 w-full" />
        <div className="p-3 sm:p-6">
          <HeaderTextSlide
            headline="Comprehensive Construction Services in Phoenix, Arizona: All
          State Specialists Turning Visions into Reality"
            orangeWords="Services"
            delay={2}
          />
        </div>
        <ServicesAnimation />
        <ServicesContent />
      </div>
    </>
  );
}

export default page;
