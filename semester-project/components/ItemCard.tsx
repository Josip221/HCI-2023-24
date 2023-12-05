import React from "react";

interface ItemCardProps {
  title: string;
  img: string;
  price: number;
}

function ItemCard({ title, img, price }: ItemCardProps) {
  return (
    <div className="border-solid border-[#776B5D] border-2 m-2 bg-white flex flex-col justify-center items-center p-5 text-xs">
      <div>{title}</div>
      <img className="w-64" src={img} alt="img" />
      <div>{price}€</div>
      <div>Add to Cart</div>
    </div>
  );
}

export default ItemCard;
