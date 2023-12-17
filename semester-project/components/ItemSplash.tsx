import React from "react";
import Link from "next/link";

interface ItemSplashProps {
  image: string;
  title: string;
  i: number;
  link?: string;
}

function ItemSplash({ image, title, i, link = "/" }: ItemSplashProps) {
  return (
    <div
      key={i}
      className="relative w-full h-64 md:h-80 lg:h-96  flex flex-col"
    >
      <img
        className="w-full h-64 md:h-80 lg:h-96  object-cover overflow-hidden"
        src={image}
      />
      <div className="absolute w-full h-64 md:h-80 lg:h-96  bg-black opacity-50 "></div>
      <div className="h-full box-border absolute w-full  flex-col flex items-center justify-center text-xs sm:text-sm md:text-xl lg:text-2xl text-white gap-5">
        <div>{title.toUpperCase()}</div>
        {link !== "/" && (
          <Link
            href={link}
            className="bg-white text-black rounded-md p-2 text-xs sm:text-sm md:text-xl lg:text-2xl"
          >
            Browse
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemSplash;
