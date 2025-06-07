import React from "react";
import NavbarGuest from "../components/organisms/NavbarGuest.jsx";
import Footer from "../components/organisms/Footer.jsx";

function HomeGuestLayouts({ children }) {
  return (
    <>
      <div className="bg-background text-primary font-sans tracking-wider">
        <NavbarGuest />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default HomeGuestLayouts;
