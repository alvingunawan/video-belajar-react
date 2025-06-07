import React from "react";

function CardRating({ rating, totalReviews }) {
  return (
    <>
      <div className="flex items-center gap-1 text-yellow-400 text-sm -tracking-widest">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-alt"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <div className="pt-0.5">
          <span className="underline text-gray-400 tracking-tight">
            {rating} ({totalReviews})
          </span>
        </div>
      </div>
    </>
  );
}

export default CardRating;
