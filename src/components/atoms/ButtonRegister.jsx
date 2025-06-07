function ButtonRegister({ children }) {
  return (
    // <button className="bg-white text-primary-default text-xs py-2.5 text-center border-0 border-primary-default rounded-md z-10 hover:cursor-pointer hover:bg-primary-default ease-in-out duration-200 lg:absolute lg:text-base lg:right-5 lg:px-8 lg:top-2.5">
    <button className="bg-white text-primary-default text-xs py-2.5 text-center border-1 border-primary-default rounded-md z-10 mr-6 hover:cursor-pointer hover:bg-primary-default hover:text-white ease-in-out duration-200 lg:text-base lg:px-8">
      {children}
    </button>
  );
}
export default ButtonRegister;
