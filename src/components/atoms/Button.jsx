const Button = ({ children, className, type = "button", ...props }) => (
  <button
    type={type}
    className={`w-full font-bold py-2 rounded-lg cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
