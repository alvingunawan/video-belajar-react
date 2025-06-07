import logo from "../../assets/img/logo.png";

function NavbarMinimal() {
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
          <div className="hidden text-base items-center lg:space-x-8 lg:flex lg:pr-6"></div>
          <div className="pt-3.5 pr-6 text-xl md:pr-15 lg:pt-0 lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavbarMinimal;
