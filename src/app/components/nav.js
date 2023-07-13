"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
function Nav({ navigate }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const MobileNav = () => (
    <div className="w-screen h-screen fixed text-black z-50">
      <div className="w-full h-full bg-orange p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <div className="border-4 pl-1 pr-1">
              <p className="font-bold">All State Specialist LLC.</p>
            </div>
            {/* Do animation where the hamburger turns into an x */}
            <p onClick={() => setShowMobileNav(false)}>X</p>
          </div>
          <div className="mt-8 flex flex-col space-y-3">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link
                href="/about"
                className="font-bold text-7xl tracking-tighter"
              >
                About
              </Link>
              <ArrowUpRightIcon className="h-12 w-12 text-blue-500" />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link
                href="services"
                className="font-bold text-7xl tracking-tighter"
              >
                Services
              </Link>
              <ArrowUpRightIcon className="h-12 w-12 text-blue-500" />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link
                href="saftey"
                className="font-bold text-7xl tracking-tighter"
              >
                Saftey
              </Link>
              <ArrowUpRightIcon className="h-12 w-12 text-blue-500" />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link
                href="careers"
                className="font-bold text-7xl tracking-tighter"
              >
                Careers
              </Link>
              <ArrowUpRightIcon className="h-12 w-12 text-blue-500" />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link
                href="contact"
                className="font-bold text-7xl tracking-tighter cursor-pointer"
              >
                Contact
              </Link>
              <ArrowUpRightIcon className="h-12 w-12 text-blue-500" />
            </div>
          </div>
        </div>
        <p className="text-xs">
          Copyright © 2023 All State Specialist LLC. All Rights Reserved.
        </p>
      </div>
    </div>
  );
  return (
    <>
      {showMobileNav && <MobileNav />}
      <div className="fixed h-[70px] w-full z-40">
        <div className="w-full flex justify-between items-center pl-8 pr-8 h-[70px] bg-black">
          <div className="border-4 pl-1 pr-1 border-white">
            <p className="font-bold text-white">All State Specialist LLC.</p>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <Link href="/about" className="font-bold">
              About
            </Link>
            <Link href="services" className="font-bold">
              Services
            </Link>
            <Link href="saftey" className="font-bold">
              Saftey
            </Link>
            <Link href="careers" className="font-bold">
              Careers
            </Link>
            <Link href="contact" className="font-bold">
              Contact
            </Link>
          </div>

          <p
            onClick={() => setShowMobileNav(true)}
            className="pointer flex md:hidden"
          >
            HAMBURGER
          </p>
        </div>
      </div>
    </>
  );
}

export default Nav;
