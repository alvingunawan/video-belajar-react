const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="text-xs text-gray-500 lg:text-base">
    {children}
  </label>
);
export default Label;
