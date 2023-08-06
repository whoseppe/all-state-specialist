"use client";
import MediaHeader from "./components/mediaHeader";
import Mission from "./components/mission";
import OpenAnimation from "./components/openAnimation";
import OurServices from "./components/ourServices";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main>
      <OpenAnimation />
      <MediaHeader
        header="Welcome to"
        subHeader="All State Specialist LLC."
        desc="Your Trusted Partner for Construction Excellence in the Phoenix
            Area!"
      />
      <Mission />
      <OurServices />
      <Reviews />
    </main>
  );
}
