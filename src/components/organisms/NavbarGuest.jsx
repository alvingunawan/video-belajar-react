import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ButtonPlainWithoutBorder from "../atoms/ButtonPlainWithoutBorder.jsx";
import ButtonLogin from "../atoms/ButtonLogin.jsx";
import ButtonRegister from "../atoms/ButtonRegister.jsx";

function NavbarGuest() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header id="navbar" className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4 py-2">
          <div>
            <NavLink to="/">
              <img
                src={logo}
                className="w-40 h-10 lg:w-auto lg:h-auto"
                alt="logo"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 text-base">
            <ButtonPlainWithoutBorder to="#">Kategori</ButtonPlainWithoutBorder>
            <ButtonLogin>Login</ButtonLogin>
            <ButtonRegister>Register</ButtonRegister>
          </div>

          {/* Hamburger for mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t text-base px-4 py-3 space-y-2 shadow">
            <button className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer">
              Kategori
            </button>
            <hr className="flex-grow border-gray-300" />
            <NavLink
              to="/login"
              className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
            >
              Login
            </NavLink>
            <hr className="flex-grow border-gray-300" />
            <NavLink
              to="/register"
              className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
            >
              Register
            </NavLink>
          </div>
        )}
      </header>
    </>
  );
}

export default NavbarGuest;
