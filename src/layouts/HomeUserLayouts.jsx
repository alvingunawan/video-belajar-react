import React from "react";
import NavbarUser from "../components/organisms/NavbarUser.jsx";
import Footer from "../components/organisms/Footer.jsx";

function HomeUserLayouts({ children }) {
  return (
    <>
      <div className="bg-background text-primary font-sans tracking-wider">
        <NavbarUser />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default HomeUserLayouts;
