"use client";
import { useState } from "react";
import Nav from "./components/nav";
import MediaHeader from "./components/mediaHeader";
import Mission from "./components/mission";
import OurServices from "./components/ourServices";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import PageTransition from "./components/pageTransition";
import { useRouter } from "next/navigation";
import Wrapper from "./components/wrapper";

export default function Home() {
  const router = useRouter();
  const [showTransition, setShowTransition] = useState(false);

  const navigate = () => {
    router.push("about");

    setTimeout(() => {
      setShowTransition(true);
    }, 1000);
  };

  return (
    <main>
      <Wrapper>
        <MediaHeader />
        <Mission />
        <OurServices />
        <Reviews />
        <Footer />
      </Wrapper>
    </main>
  );
}
