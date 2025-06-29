import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatarhome.png";

function NavbarUser() {
  const [menuOpen, setMenuOpen] = useState(false); // burger menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // avatar menu
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Keluar diklik");
    localStorage.removeItem("loggedInUser");
    navigate("/", { replace: true });
    window.location.reload(); // Paksa render ulang komponen Home
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
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
          <div className="hidden lg:flex items-center space-x-6 text-base relative">
            <button className="text-gray hover:cursor-pointer hover:text-ternary-default transition duration-200">
              Kategori
            </button>

            {/* Avatar with dropdown */}
            <div className="relative">
              <button onClick={toggleDropdown}>
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-10 h-10 md:mt-2 rounded-md cursor-pointer"
                />
              </button>

              {/* Dropdown (only visible if dropdownOpen) */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50 py-2">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
                    onClick={() => navigate("/profile")}
                  >
                    Profil Saya
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
                    onClick={() => navigate("/kelas-saya")}
                  >
                    Kelas Saya
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
                    onClick={() => navigate("/pesanan")}
                  >
                    Pesanan Saya
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
                    onClick={handleLogout}
                  >
                    Keluar&nbsp;
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t text-base px-4 py-3 space-y-2 shadow">
            <button className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer">
              Kategori
            </button>
            <hr className="flex-grow border-gray-300" />
            <button
              className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              Profil Saya
            </button>
            <hr className="flex-grow border-gray-300" />
            <button
              className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
              onClick={() => navigate("/kelas-saya")}
            >
              Kelas Saya
            </button>
            <hr className="flex-grow border-gray-300" />
            <button
              className="block w-full text-left text-gray/68 font-semibold py-2 hover:bg-gray-100 hover:text-ternary-default transition duration-200 hover:cursor-pointer"
              onClick={() => navigate("/pesanan")}
            >
              Pesanan Saya
            </button>
            <hr className="flex-grow border-gray-300" />
            <button
              onClick={handleLogout}
              className="block w-full text-left text-red-500 font-semibold py-2 hover:text-red-700 font-semibold"
            >
              Keluar&nbsp;
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default NavbarUser;
