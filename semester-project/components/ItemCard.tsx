import React from "react";
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

  const urlNew = title.trim().replaceAll(" ", "-");

  return (
    <Link href={`${baseUrl}/${urlNew}`}>
      <div className="flex flex-col justify-center items-center  my-2 mx-5 p-3">
        <img
          className="border-2 border-[#6c757d] h-60 object-contain bg-white"
          src={image}
        />
        <div className="m-2">{title}</div>

        <Rating name="read-only" value={randomNum} readOnly />
        <Price price={price} />
      </div>
    </Link>
  );
}

export default ItemCard;
