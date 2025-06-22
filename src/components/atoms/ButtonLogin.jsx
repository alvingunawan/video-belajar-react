import { NavLink } from "react-router-dom";

function ButtonLogin({ to = "/login", children }) {
  return (
    <NavLink
      to={to}
      className="bg-primary-default text-white text-xs py-2.5 text-center border-0 rounded-md mr-6 z-10 hover:cursor-pointer hover:bg-primary-default/80 ease-in-out duration-200 lg:text-base lg:px-8"
    >
      {children}
    </NavLink>
  );
}

export default ButtonLogin;
