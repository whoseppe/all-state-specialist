import React from "react";
import Nav from "../components/nav";
import MediaHeader from "../components/mediaHeader";
import Footer from "../components/footer";
import Application from "../components/application";

function page() {
  return (
    <>
      <Nav />
      <div className="h-24 sm:h-12 w-full" />
      <MediaHeader />
      <Application />
      <Footer />
    </>
  );
}

export default page;
