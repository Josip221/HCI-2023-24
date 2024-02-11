"use client";
import React from "react";
import { useContext } from "@/context/context";
import Link from "next/link";

function CartNav() {
  const { cart } = useContext();
  return (
    <Link className="relative" href="/cart">
      <span className="cursor-pointer text-white hover:underline mr-4">
        Cart
      </span>
      {cart.length > 0 && (
        <span className=" bg-red-500 absolute top-0 -right-1  text-[0.7rem] rounded-full w-4 h-4 flex justify-center items-center ">
          {cart.length}
        </span>
      )}
    </Link>
  );
}

export default CartNav;
