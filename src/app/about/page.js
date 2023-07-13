import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import AboutHeader from "../components/aboutHeader";
import Wrapper from "../components/wrapper";

function page() {
  return (
    <Wrapper>
      <AboutHeader />
      <Footer />
    </Wrapper>
  );
}

export default page;
