const Input = ({ type = "text", name, id, className, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`h-10 rounded-lg w-full border-2 border-gray-300 pl-2 focus:outline-none focus:border-primary-default   ${className}`}
      {...props}
    />
  );
};
export default Input;
