function ButtonPrimary({ children }) {
  return (
    <button className="bg-secondary-default text-white text-xs py-2.5 text-center border-0 rounded-md z-10 hover:cursor-pointer hover:bg-amber-600 ease-in-out duration-200 lg:absolute lg:text-base lg:right-5 lg:px-8 lg:top-2.5">
      {children}
    </button>
  );
}
export default ButtonPrimary;
