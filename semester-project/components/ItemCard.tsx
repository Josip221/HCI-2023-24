import React, { useMemo } from "react";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import Price from "./Price";

interface ItemCardProps {
  image: string;
  title: string;
  price: number;
  weight: number;
  baseUrl: string;
}

function ItemCard({ baseUrl, image, title, price, weight }: ItemCardProps) {
  const randomNum = Math.random() * (4.8 - 2.5) + 2.5;

  const randomReviews = useMemo(() => Math.floor(Math.random() * 100), []);
  const urlNew = title.trim().replaceAll(" ", "-");

  return (
    <Link href={`${baseUrl}/${urlNew}`}>
      <div className="flex flex-col justify-center items-center  my-2 mx-5 p-3">
        <img
          alt="splash"
          className="border-2 border-[#6c757d] h-60 object-contain bg-white"
          src={image}
        />
        <div className="m-2">{title}</div>
        <div className="flex gap-1">
          <span className="self-center text-md font-thin font-sans">
            {randomNum.toFixed(1)}
          </span>
          <Rating name="read-only" value={randomNum} readOnly />
          <div className="font-thin font-sans">{`(${randomReviews} reviews)`}</div>
        </div>
        <Price price={price} />
      </div>
    </Link>
  );
}

export default ItemCard;
