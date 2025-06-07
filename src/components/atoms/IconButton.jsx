const IconButton = ({ onClick, iconSrc, alt, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-gray-500 cursor-pointer ${className}`}
  >
    <img src={iconSrc} alt={alt} className="h-5 w-5" />
  </button>
);
export default IconButton;
