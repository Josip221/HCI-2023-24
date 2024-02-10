"use client";
import React from "react";
import NavigateButton from "@/components/NavigateButton";
import { useContext } from "@/context/context";
import ItemSplash from "@/components/ItemSplash";

function Page() {
  const { cart, setCart } = useContext();

  if (typeof window !== "undefined") {
    document.title = "GymRoo - Cart";
  }
  return (
    <div className=" flex flex-col justify-center items-center gap-5 w-full">
      <ItemSplash
        i={0}
        title="Your Cart"
        image="https://plus.unsplash.com/premium_photo-1681487985079-b299ac8ba1df?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      {cart.length === 0 && (
        <>
          <div className="mt-10">Cart is currently empty.</div>
          <NavigateButton destination="/products">
            Browse Products
          </NavigateButton>
        </>
      )}
      {cart.length > 0 && (
        <>
          <div className="flex flex-col w-3/4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center border-b-2 border-gray-300 p-2"
              >
                <div className="flex flex-row gap-2">
                  <img
                    src={item.image.url}
                    alt={item.image.title}
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col">
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    const newCart = cart.filter((_, i) => i !== index);
                    setCart(newCart);
                  }}
                  className="cursor-pointer"
                >
                  X
                </div>
              </div>
            ))}
          </div>
          <NavigateButton destination="/checkout">Checkout</NavigateButton>
        </>
      )}
    </div>
  );
}

export default Page;
