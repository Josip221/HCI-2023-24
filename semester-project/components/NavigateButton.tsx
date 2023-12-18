import React from "react";
import Link from "next/link";

interface NavigateButtonProps {
  destination: string;
  children: React.ReactNode;
}

function NavigateButton({ destination, children }: NavigateButtonProps) {
  return (
    <Link
      className="bg-[#336688ff] text-white py-2 px-4 rounded-md flex justify-center items-center"
      href={destination}
    >
      {children}
    </Link>
  );
}

export default NavigateButton;
