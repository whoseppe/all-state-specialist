import React from "react";
import Nav from "../components/nav";
import SafteyContent from "../components/safteyContent";
import Footer from "../components/footer";

function page() {
  return (
    <>
      <Nav />
      <div className="h-24 sm:h-12 w-full" />
      <div className="p-2 sm:p-8 mt-12">
        <p className="text-6xl md:text-[90px] lg:text-[125px] font-bold leading-none tracking-tighter">
          <span className="text-orange">Saftey</span> is not just a rule, it's a
          culture. It should be woven into the fabric of every construction
          site.
        </p>
        <SafteyContent />
      </div>
      <Footer />
    </>
  );
}

export default page;
