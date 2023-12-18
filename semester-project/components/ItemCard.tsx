import React from "react";
import Rating from "@mui/material/Rating";
import Link from "next/link";

interface ItemCardProps {
  image: string;
  title: string;
  price: number;
  weight: number;
}

function ItemCard({ image, title, price, weight }: ItemCardProps) {
  const randomNum = Math.random() * (4.8 - 2.5) + 2.5;
  return (
    <Link href="/products/category/product/1">
      <div className="flex flex-col justify-center items-center border-2 border-[#6c757d] my-2 mx-5 p-3">
        <img
          className="border-2 border-[#6c757d] h-60 object-contain "
          src={image}
        />
        <div className="m-2">{title}</div>

        <Rating name="read-only" value={randomNum} readOnly />
        <div className="m-2">
          <span className="align-top  text-xs">€</span>
          <span className="text-lg">{price}</span>
          <span className="align-top text-xs">99</span>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
