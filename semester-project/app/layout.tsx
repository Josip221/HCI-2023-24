import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ContextProvider } from "@/context/context";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

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
          <NavBar />

          <div className="flex flex-col flex-1 min-h-[700px] w-full justify-start items-start bg-gray-50">
            {children}
          </div>
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
