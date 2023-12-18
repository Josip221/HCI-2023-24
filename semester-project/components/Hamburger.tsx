"use client";
import React, { useState } from "react";
import Link from "next/link";

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        }  flex flex-col justify-center items-center w-full top-15 left-0 bg-[#336688ff] h-40 z-10 `}
      >
        <div className="flex flex-col justify-center items-center ">
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About Us</Link>
          <Link href="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
