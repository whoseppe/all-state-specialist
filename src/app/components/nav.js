"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "./provider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../../public/logo-white.png";
function Nav() {
  let { setShowMobileNav } = useContext(AppContext);

  const pathname = usePathname();
  return (
    <>
      <div className="fixed h-[70px] w-full z-40 -mt-1">
        <div className="w-full flex justify-between items-center p-2 md:pl-8 md:pr-8 h-[70px] bg-black-950">
          <Link href="/">
            <Image
              src={logo}
              className="h-12 w-32 object-contain"
              alt="Picture of the author"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link
              className={`${
                pathname === "/about" ? "text-orange" : ""
              } font-bold`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${
                pathname === "/services" ? "text-orange" : ""
              } font-bold`}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={`${
                pathname === "/safety" ? "text-orange" : ""
              } font-bold`}
              href="/safety"
            >
              Safety
            </Link>
            <Link
              className={`${
                pathname === "/careers" ? "text-orange" : ""
              } font-bold`}
              href="/careers"
            >
              Careers
            </Link>
            <Link
              className={`${
                pathname === "contact" ? "text-orange" : ""
              } font-bold`}
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className={`${
                pathname === "contact" ? "text-orange" : ""
              } font-bold`}
              href="/merch"
            >
              Merch
            </Link>
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
