function CardSectionIntro({ title, subtitle }) {
  return (
    <>
      <div className="text-left mb-5 lg:pl-7">
        <h2 className="text-2xl font-bold text-dark mb-3 leading-tight">
          {title}
        </h2>
        <p className="text-gray text-xs leading-snug">{subtitle}</p>
      </div>
    </>
  );
}

export default CardSectionIntro;
