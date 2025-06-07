const Button = ({ children, className, ...props }) => (
  <button
    className={`w-full font-bold py-2 rounded-lg cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </button>
);
export default Button;
