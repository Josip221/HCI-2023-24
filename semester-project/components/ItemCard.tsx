import React from "react";

interface ItemCardProps {
  image: string;
  title: string;
  price: number;
  weight: number;
}

function ItemCard({ image, title, price, weight }: ItemCardProps) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-[#6c757d] my-2 mx-5">
      <img className=" h-60 object-contain " src={image} />
      <div className="m-2">{title}</div>
      <div className="text-[#6c757d]">{`${weight}kg`}</div>
      <div className="relative ">
        <span className="align-top  text-xs">€</span>
        <span className="text-lg">{price}</span>
        <span className="align-top text-xs">99</span>
      </div>
    </div>
  );
}

export default ItemCard;
