"use client";
import React from "react";
import NavigateButton from "@/components/NavigateButton";
import { useContext } from "@/context/context";
import ItemSplash from "@/components/ItemSplash";
import Price from "@/components/Price";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const { cart, setCart, emptyCart } = useContext();

  if (typeof window !== "undefined") {
    document.title = "GymRoo - Cart";
  }

  const handleAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    amount: number,
    title: string
  ) => {
    const newCart = cart.map((item) => {
      if (item.title === title) {
        let newAmount = parseInt(e.target.value);
        if (newAmount < 1) {
          newAmount = 1;
        } else if (newAmount > 10) {
          newAmount = 10;
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleCheckout = () => {
    toast.success(`Checkout successful. Spent ${totalPrice} €`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    emptyCart();
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  return (
    <div className=" flex flex-col justify-center items-center gap-5 mb-5 w-full ">
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
        <div className="flex flex-col items-center gap-2 w-full md:w-2/3">
          <div className="flex flex-col w-full">
            {cart.map((item, index) => (
              <div
                key={index}
                className=" relative flex flex-col md:flex-row md:items-center justify-start items-start border-t-2  border-gray-300 "
              >
                <div className="flex flex-2 gap-2 justify-center items-center px-2 md:h-32 ">
                  <img
                    src={item.image.url}
                    alt={item.image.title}
                    className="w-20 h-20  md:w-24 md:h-24 "
                  />
                  <div className="flex  flex-col">
                    <div>{item.title}</div>
                  </div>
                </div>

                <div className="flex-1 ml-auto flex justify-end items-start gap-2 md:mr-5">
                  <Price price={item.price * item.amount} />
                  <input
                    className="border border-gray-300 rounded-md p-2 w-20 text-center"
                    type="number"
                    id="amount"
                    name="amount"
                    value={item.amount}
                    onChange={(e) =>
                      handleAmountChange(e, item.amount, item.title)
                    }
                  />
                </div>
                <div
                  onClick={() => {
                    const newCart = cart.filter((_, i) => i !== index);
                    setCart(newCart);
                  }}
                  className="cursor-pointer  text-red-500  absolute top-1 right-1 mb-3"
                >
                  X
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center mt-5">
            <div className="font text-xl">Total:</div>
            <div className="ml-2">
              <Price price={totalPrice} />
            </div>
          </div>
          <div className="w-[120px] self-center">
            <button
              onClick={handleCheckout}
              className="bg-[#336688ff] text-white py-2 px-4 rounded-md flex justify-center items-center"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
