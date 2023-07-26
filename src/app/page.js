"use client";
import MediaHeader from "./components/mediaHeader";
import Mission from "./components/mission";
import OurServices from "./components/ourServices";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main>
      <MediaHeader />
      <Mission />
      <OurServices />
      <Reviews />
    </main>
  );
}
