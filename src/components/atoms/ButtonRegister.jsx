import { NavLink } from "react-router-dom";

function ButtonRegister({ to = "/register", children }) {
  return (
    <NavLink
      to={to}
      className="bg-white text-primary-default text-xs py-2.5 text-center border border-primary-default rounded-md mr-6 z-10 hover:cursor-pointer hover:bg-primary-default hover:text-white ease-in-out duration-200 lg:text-base lg:px-8"
    >
      {children}
    </NavLink>
  );
}

export default ButtonRegister;
