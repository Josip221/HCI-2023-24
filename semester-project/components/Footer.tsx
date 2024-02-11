import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { ToastContainer } from "react-toastify";

function Footer() {
  return (
    <footer className="text-sm md:text-md flex flex-col items-center justify-center w-full h-80 bg-[#336688ff] text-white">
      <div className="flex gap-5 my-5">
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://twitter.com" />
      </div>
      <Link href="/about">
        <span className="cursor-pointer text-white hover:underline mr-4">
          About Us
        </span>
      </Link>
      <Link href="/about">
        <span className="cursor-pointer text-white hover:underline mr-4">
          Contact
        </span>
      </Link>
      <Link href="/about">
        <span className="cursor-pointer text-white hover:underline mr-4">
          Terms of Service
        </span>
      </Link>
      <Link href="/about">
        <span className="cursor-pointer text-white hover:underline">
          Privacy Policy
        </span>
      </Link>

      <div className="my-10">© 2023 GymRoo. All rights reserved.</div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </footer>
  );
}

export default Footer;
