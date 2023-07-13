import React from "react";
import Image from "next/image";
import crane from "../img1.jpg";
import people from "../img2.jpg";
function OurServices() {
  return (
    <div>
      <div className="w-full flex items-center flex-nowrap space-x-4">
        <p className="font-forum text-5xl text-center whitespace-nowrap pl-2 sm:pl-8">
          Our Services
        </p>
        <div className="bg-orange h-1 w-full mt-3" />
      </div>
      <div className="pl-2 sm:pl-8 max-w-md mt-2">
        <p>
          At All State Specialist LLC., we pride ourselves on offering a diverse
          range of construction services to meet the needs of our clients in the
          most efficient and cost-effective manner. With our expertise and
          experience, we deliver exceptional results across various sectors.
          Explore our comprehensive services below
        </p>
      </div>
      <div className="h-96 flex flex-nowrap items-center pl-2 sm:pl-8 overflow-x-auto">
        <div className="h-80 w-[200px] m-2 bg-white shrink-0 relative">
          <div className="absolute w-full h-full flex flex-col justify-end">
            <div className="w-full bg-black bg-opacity-60 flex items-center justify-center py-3">
              <p>YOOO</p>
            </div>
          </div>
          <Image
            src={crane}
            className="w-full h-full object-cover"
            alt="Picture of the author"
          />
        </div>
        <div className="h-80 w-[200px] m-2 bg-white shrink-0">
          <Image
            src={people}
            className="w-full h-full object-cover"
            alt="Picture of the author"
          />
        </div>
        <div className="h-80 w-[200px] m-2 bg-white shrink-0"></div>
        <div className="h-80 w-[200px] m-2 bg-white shrink-0"></div>
        <div className="h-80 w-[200px] m-2 bg-white shrink-0"></div>
        <div className="h-80 w-[200px] m-2 bg-white shrink-0"></div>
        <div className="h-80 w-[200px] m-2 bg-white shrink-0"></div>
      </div>
    </div>
  );
}

export default OurServices;
