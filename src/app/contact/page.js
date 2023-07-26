import React from "react";

function page() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <>
      <div className="h-24 sm:h-12 w-full" />
      <div className="p-2 sm:p-8 flex flex-col justify-center items-center w-full">
        <p className="opacity-20 font-bold whitespace-nowrap text-[8vw] tracking-[.5rem] sm:tracking-[1.5rem] text-center">
          GET IN TOUCH
        </p>
        <div className="flex items-center flex-wrap">
          <p className="max-w-lg font-bold text-center mt-4">
            Whether you&apos;re eager to discuss your next exciting construction
            project or simply have a burning question about our services,
            we&apos;re here to hear from you! Drop us an email at{" "}
            <a
              className="underline text-orange"
              href="mailto:email@example.com"
            >
              All State Specialist LLC.
            </a>{" "}
            and our dedicated team will be delighted to assist you. Let&apos;s
            build something great together!
          </p>
        </div>
        <div className="border-[gray] border-t-2 border-b-2 py-4 flex flex-row justify-center mt-12 space-x-10">
          <div>
            <p className="font-bold">Address</p>
            <p>14155 N 83rd Ave</p>
            <p>Peoria, AZ 85381</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <p>623-213-7180</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
