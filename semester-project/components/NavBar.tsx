import React from "react";
import Link from "next/link";
import SearchBarNav from "./SearchBarNav";
import CartNav from "./CartNav";
import Hamburger from "./Hamburger";



const LinkSpan = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="cursor-pointer text-white hover:underline mr-4 shrink-0">
      {children}
    </span>
  );
};



function NavBar() {
	
  return (
    <nav className="w-full h-16 text-xl px-10 text-white bg-[#336688ff] flex items-center justify-evenly">
      <Link className="mr-auto md:mr-0 ml-5" href="/">
        <span className="cursor-pointer text-white hover:underline mr-4">
          GymRoo
        </span>
      </Link>

      <SearchBarNav />

      <div className="hidden md:flex w-2/3 lg:flex lg:w-1/2 items-center justify-evenly shrink-0">
        <Link href="/products">
          <LinkSpan>Products</LinkSpan>
        </Link>
        <CartNav />
        <Link href="/about">
          <LinkSpan>About Us</LinkSpan>
        </Link>
        <Link href="/login">
          <LinkSpan>Log In</LinkSpan>
        </Link>
      </div>

      <Hamburger />
    </nav>
  );
}

export default NavBar;
