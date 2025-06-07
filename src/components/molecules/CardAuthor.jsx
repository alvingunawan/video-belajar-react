import React from "react";

function CardAuthor({ avatarSrc, name, position }) {
  return (
    <>
      <div className="innerTextCardSection flex gap-1 lg:gap-4 lg:mb-1">
        <img
          src={avatarSrc}
          alt={name}
          className="w-9 h-9 rounded-lg lg:w-10 lg:h-10"
        />
        <div className="innerTextCardSectionName">
          <p>{name}</p>
          <p className="text-xs">{position}</p>
        </div>
      </div>
    </>
  );
}

export default CardAuthor;
