"use client";
// test
import MediaHeader from "./components/mediaHeader";
import Mission from "./components/mission";
import OpenAnimation from "./components/openAnimation";
import OurServices from "./components/ourServices";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main>
      <OpenAnimation />
      <MediaHeader />
      <Mission />
      <OurServices />
      <Reviews />
    </main>
  );
}
