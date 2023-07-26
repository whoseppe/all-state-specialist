"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "./provider";
import Link from "./link";
import logo from "../images/logo-white.png";
import LinkWrapper from "./linkWrapper";
function Nav() {
  let { setShowMobileNav } = useContext(AppContext);

  return (
    <>
      <div className="fixed h-[70px] w-full z-40 -mt-1">
        <div className="w-full flex justify-between items-center p-2 md:pl-8 md:pr-8 h-[70px] bg-black-950">
          <LinkWrapper route="/">
            <Image
              src={logo}
              className="h-12 w-32 object-contain"
              alt="Picture of the author"
            />
          </LinkWrapper>

          <div className="hidden md:flex items-center space-x-12">
            <Link name="About" route="/about" />
            <Link name="Services" route="/services" />
            <Link name="Safety" route="/safety" />
            <Link name="Careers" route="/careers" />
            <Link name="Contact" route="/contact" />
          </div>

          <div
            onClick={() => setShowMobileNav(true)}
            className="pointer md:hidden p-6"
          >
            <div className="h-1 w-10 bg-white rounded-md" />
            <div className="mt-1.5 h-1 w-10 bg-white rounded-md" />
            <div className="mt-1.5 h-1 w-10 bg-white rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
