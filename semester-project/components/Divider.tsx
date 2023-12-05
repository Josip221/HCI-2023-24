import React from "react";

interface DividerProps {
  text: string;
}

function Divider({ text }: DividerProps) {
  return (
    <div className="w-full h-10 bg-[#776B5D] flex items-center justify-center">
      <span className="text-[#FFA500]">{text}</span>
    </div>
  );
}

export default Divider;
