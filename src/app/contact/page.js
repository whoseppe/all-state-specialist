import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

function page() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <>
      <Nav />
      <div className="h-24 sm:h-12 w-full" />
      <div className="p-2 sm:p-8 flex flex-col justify-center items-center w-full">
        <p className="opacity-20 font-bold whitespace-nowrap text-[8vw] tracking-[.5rem] sm:tracking-[1.5rem] text-center">
          GET IN TOUCH
        </p>
        <div className="flex items-center flex-wrap">
          <p className="max-w-lg font-bold text-center mt-4">
            Whether you're eager to discuss your next exciting construction
            project or simply have a burning question about our services, we're
            here to hear from you! Drop us an email at{" "}
            <a
              className="underline text-orange"
              href="mailto:email@example.com"
            >
              All State Specialist LLC.
            </a>{" "}
            or fill out the form below, and our dedicated team will be delighted
            to assist you. Let's build something great together!
          </p>
        </div>
        <div className="border-[gray] border-t-2 border-b-2 py-6 flex flex-col justify-center items-center mt-12">
          <p>Some Address, Phoenix,</p>
          <p>Contact: 000-000-0000</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
