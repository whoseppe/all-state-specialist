import React from "react";
import Image from "next/image";
import people from "../img2.jpg";
import crane from "../img1.jpg";

function ServicesContent() {
  const Card = ({ title, image }) => (
    <div className="h-3/4 w-[300px] m-2 bg-white shrink-0 relative">
      <div className="absolute w-full h-full flex flex-col justify-end">
        <div className="w-full bg-black bg-opacity-60 flex items-center justify-center py-3">
          <p>{title}</p>
        </div>
      </div>
      <Image
        src={image}
        className="w-full h-full object-cover"
        alt="Picture of the author"
      />
    </div>
  );

  return (
    <div className="mt-24">
      <p className="font-forum text-5xl whitespace-nowrap pl-2 sm:pl-8">
        Our Services
      </p>
      <div className="h-screen flex flex-nowrap items-center pl-2 sm:pl-8 overflow-x-auto">
        <Card
          title="Mass Grading"
          body="Our mass grading services involve the precise and efficient movement of earth to prepare sites for construction. Our skilled team utilizes state-of-the-art equipment and advanced techniques to ensure accurate grading, proper drainage, and a solid foundation for your projects. We carefully consider site plans, soil conditions, and environmental factors to deliver optimal results.
 "
          image={people}
        />
        <Card
          body="All State Specialist LLC. specializes in wet utilities, encompassing the installation and maintenance of water and sewer systems. From underground pipe installations to pump stations and stormwater management, we have the knowledge and experience to handle projects of varying complexities. We adhere to industry standards and regulations, ensuring the safe and efficient operation of wet utility systems."
          title="Wet Utilities"
          image={people}
        />
        <Card
          body="Our dry utilities services cover the installation and maintenance of electrical, telecommunications, and natural gas systems. We work closely with utility providers and clients to plan and execute precise installations, ensuring reliable connections and efficient distribution of services. Safety and compliance are paramount as we navigate the complexities of dry utility infrastructure."
          title="Dry Utilities"
          image={people}
        />
        <Card
          body="All State Specialist LLC. is equipped to construct a wide range of structures, from commercial buildings to industrial facilities. Our team of engineers, architects, and skilled tradespeople collaborate to deliver structurally sound and visually impressive results. We adhere to building codes, quality standards, and client specifications to create functional and aesthetically pleasing structures that stand the test of time."
          title="Structure"
          image={people}
        />
        <Card
          body="We excel in all aspects of concrete construction. Our expertise includes foundations, slabs, walls, sidewalks, curbs, and more. We work with precision, paying attention to proper formwork, reinforcement, and concrete mix design to ensure durability and longevity. Whether it's a small-scale residential project or a large-scale commercial development, we deliver exceptional concrete work to meet your specific requirements."
          title="Concrete"
          image={people}
        />
        <Card
          body="Asphalt paving is one of our specialties, catering to projects such as roadways, parking lots, and pathways. Our experienced team utilizes industry-leading techniques and equipment to deliver smooth and durable asphalt surfaces. We focus on proper site preparation, efficient installation, and meticulous finishing to create safe and visually appealing paved areas.
"
          title="Asphalt Paving"
          image={people}
        />
      </div>
    </div>
  );
}

export default ServicesContent;
