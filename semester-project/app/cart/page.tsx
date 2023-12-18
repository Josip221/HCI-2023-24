"use client";
import React from "react";
import NavigateButton from "@/components/NavigateButton";
import { useContext } from "@/context/context";
import ItemSplash from "@/components/ItemSplash";

function Page() {
  const { cart, setCart } = useContext();
  return (
    <div className=" flex flex-col justify-center items-center gap-5 w-full">
      {cart.length || (
        <>
          <ItemSplash
            i={0}
            title="Your Cart"
            image="https://plus.unsplash.com/premium_photo-1681487985079-b299ac8ba1df?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="mt-10">Cart is currently empty.</div>
          <NavigateButton destination="/products">
            Browse Products
          </NavigateButton>
        </>
      )}
    </div>
  );
}

export default Page;
