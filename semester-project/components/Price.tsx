import React from "react";

function Price({ price }: { price: number }) {
  return (
    <div className="m-2 flex gap-[2px]">
      <span className="align-top  text-xs">€</span>
      <span className="text-xl">{price}</span>
      <span className="align-top text-xs">99</span>
    </div>
  );
}

export default Price;
