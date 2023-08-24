import React from "react";
import loaderImage from "../../../public/loaderImage.jpg";
import machineImage from "../../../public/machineImage.jpg";
import concreteImage from "../../../public/concrete-min.jpg";
import massGradingImage from "../../../public/mass-grading-min.jpg";
import machine2Image from "../../../public/machine2Image.jpg";
import wetUtilitiesImage from "../../../public/wet-utilities-min.jpg";
import dryUtilitiesImage from "../../../public/dry-utilities-min.jpg";
import structuresImages from "../../../public/structures-min.jpg";
import asphaltImage from "../../../public/asphalt-min.jpg";
import ButtonAction from "./buttonAction";
import GridCol from "./gridCol";

function OurServices() {
  return (
    <div className="w-full flex flex-col justify-center lg:flex-row md:p-6">
      <div className="p-3 md:pr-4 md:w-96 flex-shrink-0">
        <p className="font-forum text-5xl whitespace-nowrap">Our Services</p>
        <div>
          <p>
            At All State Specialist LLC., we pride ourselves on offering a
            diverse range of construction services to meet the needs of our
            clients in the most efficient and cost-effective manner. With our
            expertise and experience, we deliver exceptional results across
            various sectors. Explore our comprehensive services below
          </p>
          <ButtonAction className="mt-4" route="/services" text="Learn More" />
        </div>
      </div>
      <div className="overflow-hidden h-screen pt-4 lg:pt-0">
        <div className="w-full flex flex-nowrap justify-center overflow-hidden space-x-2">
          <GridCol
            endVal={-350}
            images={[
              loaderImage,
              concreteImage,
              structuresImages,
              massGradingImage,
              dryUtilitiesImage,
              wetUtilitiesImage,
            ]}
          />
          <GridCol
            startVal={-700}
            endVal={200}
            images={[
              dryUtilitiesImage,
              machine2Image,
              asphaltImage,
              massGradingImage,
              concreteImage,
              wetUtilitiesImage,
            ]}
          />
          <GridCol
            endVal={-550}
            images={[
              wetUtilitiesImage,
              asphaltImage,
              machineImage,
              structuresImages,
              concreteImage,
              dryUtilitiesImage,
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
