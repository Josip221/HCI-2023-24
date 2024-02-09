import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Hamburger from "@/components/Hamburger";
import { ContextProvider } from "@/context/context";
import { SocialIcon } from "react-social-icons";
import { ToastContainer, Bounce } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GymRoo",
  description: "GymRoo - Your one-stop shop for all your gym needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <nav className="w-full h-16 text-xl px-10 text-white bg-[#336688ff] flex items-center ">
            <Link className="mr-auto ml-5" href="/">
              <span className="cursor-pointer text-white hover:underline mr-4">
                GymRoo
              </span>
            </Link>
            <div className="hidden md:flex w-2/3 lg:flex lg:w-1/2 items-center justify-evenly">
              <Link href="/products">
                <span className="cursor-pointer text-white hover:underline mr-4">
                  Products
                </span>
              </Link>
              <Link href="/cart">
                <span className="cursor-pointer text-white hover:underline mr-4">
                  Cart
                </span>
              </Link>
              <Link href="/about">
                <span className="cursor-pointer text-white hover:underline mr-4">
                  About Us
                </span>
              </Link>
              <Link href="/login">
                {" "}
                <span className="cursor-pointer text-white hover:underline mr-4">
                  Log In
                </span>
              </Link>
            </div>
            <Hamburger />
          </nav>
          <div className="flex flex-col flex-1 min-h-[700px] w-full justify-start items-start bg-gray-50">
            {children}
          </div>
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
        </body>
      </ContextProvider>
    </html>
  );
}
