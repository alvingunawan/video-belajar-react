import React from "react";
import NavbarAdmin from "../components/organisms/NavbarAdmin.jsx";
import Footer from "../components/organisms/Footer.jsx";

function AdminUserLayouts({ children }) {
  return (
    <>
      <div className="bg-background text-primary font-sans tracking-wider">
        <NavbarAdmin />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default AdminUserLayouts;
