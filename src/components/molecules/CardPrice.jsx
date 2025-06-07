import React from "react";

function CardPrice({ price }) {
  return (
    <div id="innerRightPriceText">
      <span className="pr-5 text-2xl text-primary-default font-bold tracking-tight lg:pr-6">
        {price}
      </span>
    </div>
  );
}

export default CardPrice;
