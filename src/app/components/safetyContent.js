import React from "react";
import Image from "next/image";
import saftey1 from "../images/safety-action-min.jpg";
import saftey2 from "../images/safety-meeting-min.jpg";
import saftey3 from "../images/complete-project-min.jpg";
import SlideUp from "./slideUp";

function SafetyContent() {
  const About = ({ reverse, header, body, image }) => (
    <div
      className={`flex justify-center items-center space-x-4 mt-14 flex-wrap ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="h-64 w-64 m-2 bg-white shrink-0">
        <Image
          src={image}
          className="w-full h-full object-cover"
          alt="Picture of the author"
        />
      </div>
      <div className="sm:max-w-sm md:max-w-lg lg:max-w-xl mt-2">
        <p className="font-bold">{header}</p>
        <p>{body}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-center items-center mt-28">
      <p className="mt-20 mb-40 text-lg sm:max-w-lg">
        At All State Specialist LLC,
        <span className="font-bold text-orange">
          {" "}
          the safety of our employees, clients, and the public is paramount in
          everything we do.
        </span>{" "}
        With a team of over 70 highly skilled professionals, we understand the
        importance of maintaining a safe work environment. We are committed to
        upholding the highest standards of safety and implementing comprehensive
        safety protocols across all our projects.
      </p>
      <SlideUp>
        <About
          header="Continuous Improvement:"
          body="
        We believe that safety is a continuous journey of improvement. At All State Specialist LLC., we constantly review and update our safety protocols to incorporate the latest best practices and technological advancements. We conduct regular safety meetings, training sessions, and toolbox talks to keep our team informed and engaged in safety practices.
        "
          image={saftey2}
        />
      </SlideUp>

      <SlideUp>
        <About
          reverse
          header="Safety Culture:"
          body="Safety is ingrained in our company culture, and every employee is accountable for their own safety as well as the safety of their colleagues. We foster a culture of open communication, encouraging all team members to report safety concerns, near misses, and potential hazards. Through proactive hazard identification and risk mitigation, we create a safe and secure work environment for everyone involved in our projects."
          image={saftey1}
        />
      </SlideUp>

      <SlideUp>
        <About
          header="Commitment to Excellence:"
          body="At All State Specialist LLC., our commitment to safety goes hand in hand with our dedication to delivering excellence in all aspects of our work. By prioritizing safety, we not only protect lives but also ensure the successful completion of projects on time, within budget, and to the highest quality standards."
          image={saftey3}
        />
      </SlideUp>
    </div>
  );
}

export default SafetyContent;
