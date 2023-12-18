"use client";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Your login logic goes here
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-row items-start justify-center mt-10">
      <div className="bg-white p-8 shadow-md rounded-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-[#336688ff] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring "
            onClick={handleLogin}
          >
            <Link href="/">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
