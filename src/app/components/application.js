import React from "react";

function Application() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="p-2 sm:p-8 max-w-xl">
        <p className="font-forum text-5xl whitespace-nowrap">Apply Now</p>
        <p className="mt-4">
          Thank you for your interest in joining All State Specialist LLC. We
          look forward to reviewing your application and exploring the
          possibilities of building greatness together.
        </p>
        <p className="font-bold mt-2">
          Kindly send your application to{" "}
          <a className="underline text-orange" href="mailto:email@example.com">
            All State Specialist LLC. Careers
          </a>
          , providing the following information: the position you are applying
          for, your full name, phone number, and resume.
        </p>
      </div>
    </div>
  );
}

export default Application;
