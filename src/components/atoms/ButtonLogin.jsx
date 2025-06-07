function ButtonGreen({ children }) {
  return (
    // <button className="bg-primary-default text-white text-xs py-2.5 text-center border-0 rounded-md z-10 hover:cursor-pointer hover:bg-primary-default/80 ease-in-out duration-200 lg:absolute lg:text-base lg:right-5 lg:px-8 lg:top-2.5">
    <button className="bg-primary-default text-white text-xs py-2.5 text-center border-0 rounded-md mr-6 z-10 hover:cursor-pointer hover:bg-primary-default/80 ease-in-out duration-200 lg:text-base lg:px-8">
      {children}
    </button>
  );
}
export default ButtonGreen;
