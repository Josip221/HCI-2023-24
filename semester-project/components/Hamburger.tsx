"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CartNav from "./CartNav";
import SearchBarNav from "./SearchBarNav";
import { usePathname } from "next/navigation";

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();
  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className=" hover:cursor-pointer">
      <div
        onClick={toggleMenu}
        className=" md:hidden lg:hidden flex flex-col gap-1 justify-around"
      >
        <div className="transition-all origin-center w-6 h-1 bg-white"></div>
        <div className="transition-all origin-center w-6 h-1 bg-white"></div>
        <div className="transition-all origin-center w-6 h-1 bg-white"></div>
      </div>
      <div
        className={` ${
          isMenuOpen ? "absolute" : "hidden"
        }  flex flex-col justify-center items-center w-full top-[50px] left-0 bg-[#336688ff] h-48 z-10 `}
      >
        <div className="flex flex-col justify-center items-center gap-1 ">
          <SearchBarNav hidden={false} />
          <Link href="/products">Products</Link>
          <CartNav />
          <Link href="/about">About Us</Link>
          <Link href="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
