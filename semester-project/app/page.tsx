"use client";
import Link from "next/link";
import { useContext } from "@/context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemSplash from "@/components/ItemSplash";
import { useEffect } from "react";

export default function Page() {
  const { isLoading, notifyLogin, setNotifyLogin } = useContext();

  // change document title

  if (typeof window !== "undefined") {
    document.title = "GymRoo - Home";
  }

  // check for local storage isLoggedIn === true
  // if not, redirect to login page
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true" && !notifyLogin) {
      setNotifyLogin(true);

      toast.success(`Successfully logged in`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      {isLoading ? (
        "Loading... "
      ) : (
        <>
          <ItemSplash
            i={1}
            image="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2Feed960f8c51c29b551648d8ff54e2460.jpg&w=3840&q=75"
            title="LIFT BEYOND YOUR LIMITS"
          />
          <ItemSplash
            i={2}
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="FORGE YOUR STRENGTH"
          />
          <Link
            href="/products"
            className="bg-[#336688ff] text-white py-2 px-4 rounded-md mt-5 hover:bg-blue-600 focus:border-blue-300"
          >
            Browse Products
          </Link>
          <div className="flex flex-col p-10 gap-3 md:w-2/3">
            <img src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h1 className="text-xl md:text-2xl font-bold ">
              Choice of Champions
            </h1>
            <div className="text-xl font-normal font-sans ">
              Dedicated to providing the highest quality gym equipment
              engineered for precision and durability. Our team consists of
              fitness enthusiasts who understand the importance of reliable
              equipment in achieving fitness goals.
            </div>

            <div className="bg-[#336688ff] w-fit rounded-md px-4 py-2 text-white hover:bg-blue-600 focus:border-blue-300">
              <Link href="/about">Learn More</Link>
            </div>
          </div>
          <div className="flex flex-col p-10 gap-3 md:w-2/3">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h1 className="text-xl md:text-2xl font-bold ">A Stronger World</h1>
            <div className="text-xl font-normal font-sans ">
              Elevate your fitness journey with GymRoo. Explore our collection
              of gym plates and start achieving your fitness goals today.
              Unleash the power within you - one plate at a time!
            </div>
            <div className="bg-[#336688ff] w-fit rounded-md px-4 py-2 text-white hover:bg-blue-600 focus:border-blue-300">
              <Link href="/about">Learn More</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
/* 360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1 2 */
