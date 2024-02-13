"use client";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemSplash from "@/components/ItemSplash";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    if (usernameRef.current?.value === "" && password === "") {
      toast.error("Invalid input. Missing username and password.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (usernameRef.current?.value === "") {
      toast.error("Invalid input. Missing username.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (password === "") {
      toast.error("Invalid input. Missing password.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      localStorage.setItem("isLoggedIn", "true"); // Add this line
      window.location.href = "/";
    }
  };

  if (typeof window !== "undefined") {
    document.title = "GymRoo - Login";
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-start justify-start">
        <ItemSplash
          i={0}
          title="Login"
          image={
            "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <div className="bg-white p-8 shadow-md rounded-md w-full sm:w-96 flex justify-center items-center self-center mt-5">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="relative w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              type="button"
              className="bg-[#336688ff] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring "
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
