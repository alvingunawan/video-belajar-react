import { NavLink } from "react-router-dom";

function ButtonPlainWithoutBorder({ to = "#", children }) {
  return (
    <NavLink
      to={to}
      className="text-gray text-xs py-2.5 text-center border-0 rounded-md mr-2 z-10 hover:cursor-pointer ease-in-out duration-200 lg:text-base lg:px-8"
    >
      {children}
    </NavLink>
  );
}

export default ButtonPlainWithoutBorder;
