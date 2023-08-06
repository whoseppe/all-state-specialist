import React from "react";
import MediaHeader from "../components/mediaHeader";
import ApplicationForm from "../components/applicationForm";
import OpenAnimation from "../components/openAnimation";

function page() {
  return (
    <>
      <OpenAnimation />
      <MediaHeader
        header="Join Our Team at All State Specialist LLC"
        subHeader="Building Futures, Together!"
        desc="Explore exciting career opportunities in construction in Phoenix, Arizona and be a part of our dedicated team shaping a better tomorrow."
      />
      <ApplicationForm />
    </>
  );
}

export default page;
