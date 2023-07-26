"use client";
import React from "react";

import concreteImage from "../images/concrete-min.jpg";
import massGradingImage from "../images/mass-grading-min.jpg";
import wetUtilitiesImage from "../images/wet-utilities-min.jpg";
import dryUtilitiesImage from "../images/dry-utilities-min.jpg";
import structuresImages from "../images/structures-min.jpg";
import asphaltImage from "../images/asphalt-min.jpg";

import ServicesCard from "./servicesCard";

function ServicesContent() {
  return (
    <div className="p-6">
      <div className="space-y-12">
        <ServicesCard
          title="Mass Grading"
          body="Our mass grading services involve the precise and efficient movement of earth to prepare sites for construction. Our skilled team utilizes state-of-the-art equipment and advanced techniques to ensure accurate grading, proper drainage, and a solid foundation for your projects. We carefully consider site plans, soil conditions, and environmental factors to deliver optimal results.
 "
          image={massGradingImage}
          reverse
        />
        <ServicesCard
          body="All State Specialist LLC. specializes in wet utilities, encompassing the installation and maintenance of water and sewer systems. From underground pipe installations to pump stations and stormwater management, we have the knowledge and experience to handle projects of varying complexities. We adhere to industry standards and regulations, ensuring the safe and efficient operation of wet utility systems."
          title="Wet Utilities"
          image={wetUtilitiesImage}
        />
        <ServicesCard
          body="Our dry utilities services cover the installation and maintenance of electrical, telecommunications, and natural gas systems. We work closely with utility providers and clients to plan and execute precise installations, ensuring reliable connections and efficient distribution of services. Safety and compliance are paramount as we navigate the complexities of dry utility infrastructure."
          title="Dry Utilities"
          image={dryUtilitiesImage}
          reverse
        />
        <ServicesCard
          body="All State Specialist LLC. is equipped to construct a wide range of structures, from commercial buildings to industrial facilities. Our team of engineers, architects, and skilled tradespeople collaborate to deliver structurally sound and visually impressive results. We adhere to building codes, quality standards, and client specifications to create functional and aesthetically pleasing structures that stand the test of time."
          title="Structure"
          image={structuresImages}
        />

        <ServicesCard
          body="We excel in all aspects of concrete construction. Our expertise includes foundations, slabs, walls, sidewalks, curbs, and more. We work with precision, paying attention to proper formwork, reinforcement, and concrete mix design to ensure durability and longevity. Whether it's a residential new construction project or a large-scale commercial development, we deliver exceptional concrete work to meet your specific requirements."
          title="Concrete"
          image={concreteImage}
          reverse
        />
        <ServicesCard
          body="Asphalt paving is one of our specialties, catering to projects such as roadways, parking lots, and pathways. Our experienced team utilizes industry-leading techniques and equipment to deliver smooth and durable asphalt surfaces. We focus on proper site preparation, efficient installation, and meticulous finishing to create safe and visually appealing paved areas."
          title="Asphalt Paving"
          image={asphaltImage}
        />
        {/* <div className="h-full w-4 horizontal-card shrink-0" /> */}
      </div>
    </div>
  );
}

export default ServicesContent;
