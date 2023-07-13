import React from "react";
import Image from "next/image";
import people from "../img2.jpg";

function AboutHeader() {
  const About = ({ reverse, header, body }) => (
    <div
      className={`flex justify-center items-center space-x-4 mt-14 flex-wrap ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="h-64 w-64 m-2 bg-white shrink-0">
        <Image
          src={people}
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
    <div className="p-2 sm:p-8 mt-12">
      <p className="text-6xl md:text-[90px] lg:text-[125px] font-bold leading-none tracking-tighter">
        Unveiling Our Foundation of Expertise: Discover the{" "}
        <span className="text-orange">All State Specialist LLC. Story!</span>
      </p>
      <div className="w-full flex flex-col justify-center items-center mt-28">
        <p className="opacity-20 font-bold text-5xl sm:text-7xl lg:text-[125px] whitespace-nowrap tracking-widest">
          WHO WE ARE
        </p>
        <p className="mt-12 text-lg font-bold sm:max-w-lg">
          Established in 2012, All State Specialist LLC. has been proudly
          serving the Phoenix community and surrounding regions with top-notch
          construction services. With our unwavering commitment to quality,
          safety, and customer satisfaction, we have emerged as a leading
          construction company in the area.
        </p>
        <About
          header="Our Growth and Expert Team:"
          body="Since our inception, we have experienced remarkable growth, thanks to our dedicated team of professionals and the trust our clients place in us. With over 70 highly skilled and experienced employees, we possess the expertise to handle projects of various scales and complexities. Our team consists of engineers, project managers, supervisors, and tradespeople who work seamlessly to deliver exceptional results."
        />
        <About
          reverse
          header="Comprehensive Construction Solutions:"
          body="At All State, we specialize in a wide range of construction services, catering to diverse sectors including commercial, site work, retail, multi-family, industrial, residential communities, public works, flood controls, and heavy highway projects. Whether it's constructing state-of-the-art commercial buildings, developing vibrant residential communities, or undertaking complex infrastructure projects, we have the capabilities and resources to bring your vision to life."
        />
        <About
          header="Safety is Our Priority:"
          body="We take immense pride in our unwavering commitment to safety. We understand that construction sites can pose inherent risks, and that's why we prioritize the safety of our employees, clients, and the public above all else. Our safety protocols adhere to industry best practices and meet or exceed all relevant regulations. We conduct regular training programs to ensure our team remains up-to-date with the latest safety procedures, equipment handling techniques, and hazard awareness."
        />
        <About
          header="Client-Focused Approach:"
          reverse
          body="At All State Specialist LLC., our clients are at the heart of everything we do. We strive to build strong, lasting relationships based on trust, transparency, and open communication. We work closely with our clients to understand their unique needs, goals, and project requirements. From the initial planning stages to project completion, we maintain a collaborative approach, ensuring that each project is completed on time, within budget, and to the highest standards of quality."
        />
      </div>
    </div>
  );
}

export default AboutHeader;
