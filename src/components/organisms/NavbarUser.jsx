import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatarhome.png";

function NavbarUser() {
  return (
    <>
      <header id="navbar" className="sticky top-0 z-50 bg-white">
        <nav className="container mx-auto flex justify-between">
          <div className="py-2 pl-4 md:pl-15 lg:pt-3 LaptopL:pl-5 2xl:pl-1">
            <img
              src={logo}
              className="w-40 h-10 lg:w-auto lg:h-auto"
              alt="logo"
            />
          </div>
          <div className="hidden text-base items-center lg:space-x-8 lg:flex lg:pr-6">
            <div className="text-gray hover:cursor-pointer hover:text-ternary-default ease-in-out duration-200">
              Kategori
            </div>
            <div className="hover:cursor-pointer">
              <img src={avatar} alt="avatarhome" className="w-11" />
            </div>
          </div>
          <div className="pt-3.5 pr-6 text-xl md:pr-15 lg:pt-0 lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavbarUser;
