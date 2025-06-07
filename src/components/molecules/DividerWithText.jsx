const DividerWithText = ({ children }) => (
  <div className="flex items-center my-5">
    <hr className="flex-grow border-gray-300" />
    <span className="px-3 text-gray-500 text-xs">{children}</span>
    <hr className="flex-grow border-gray-300" />
  </div>
);
export default DividerWithText;
