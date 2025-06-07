import React from "react";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardAuthor from "./CardAuthor";
import CardRating from "./CardRating";
import CardPrice from "./CardPrice";

function CardComponent({
  imageSrc,
  imageAlt,
  title,
  description,
  avatarSrc,
  authorName,
  authorPosition,
  rating,
  totalReviews,
  price,
}) {
  return (
    <div className="cardGroup">
      <div className="cardComponent bg-white rounded-lg w-full py-3 pl-4 border-2 border-gray-300 mb-5 lg:w-[90%] hover:cursor-pointer hover:scale-105 ease-in-out duration-200">
        <div className="imgCardUpperSection flex gap-3 pb-2 lg:flex-col lg:gap-1.5">
          <CardImage src={imageSrc} alt={imageAlt} />
          <div className="textCardSection w-2/3 lg:w-full">
            <CardText title={title} description={description} />
            <CardAuthor
              avatarSrc={avatarSrc}
              name={authorName}
              position={authorPosition}
            />
          </div>
        </div>
        <div id="imgCardDownSection">
          <div id="innerCardDownSection" className="flex justify-between">
            <CardRating rating={rating} totalReviews={totalReviews} />
            <CardPrice price={price} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
