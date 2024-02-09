import React from "react";

function Price({ price }: { price: number }) {
  return (
    <div className="m-2">
      <span className="align-top  text-xs">€</span>
      <span className="text-lg">{price}</span>
      <span className="align-top text-xs">99</span>
    </div>
  );
}

export default Price;
