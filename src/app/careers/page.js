import React from "react";
import MediaHeader from "../components/mediaHeader";
import ApplicationForm from "../components/applicationForm";
import OpenAnimation from "../components/openAnimation";

function page() {
  return (
    <>
      <OpenAnimation />
      <MediaHeader />
      <ApplicationForm />
    </>
  );
}

export default page;
