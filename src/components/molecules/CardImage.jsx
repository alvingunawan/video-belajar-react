import React from "react";

function CardImage({ src, alt }) {
  return (
    <>
      <div className="imgCardSection pt-1.5 w-1/3 lg:w-full lg:pt-0">
        <img
          src={src}
          alt={alt}
          className="w-20.5 h-20.5 rounded-lg lg:w-[95%] lg:h-35"
        />
      </div>
    </>
  );
}

export default CardImage;
