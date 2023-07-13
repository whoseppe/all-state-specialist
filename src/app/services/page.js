import React from "react";
import MediaHeader from "../components/mediaHeader";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ServicesContent from "../components/servicesContent";
function page() {
  return (
    <div>
      <Nav />
      <div className="h-24 sm:h-12 w-full" />
      <MediaHeader />
      <ServicesContent />
      <Footer />
    </div>
  );
}

export default page;
