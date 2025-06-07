import React from "react";

function CardText({ title, description }) {
  return (
    <>
      <div>
        <p className="font-bold text-base pb-1 lg:text-lg">{title}</p>

        <p className="hidden text-gray lg:flex lg:mb-4 lg:line-clamp-2">
          {description}
        </p>
      </div>
    </>
  );
}

export default CardText;
