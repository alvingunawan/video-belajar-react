import React from "react";
import NavbarMinimal from "../components/organisms/NavbarMinimal";
import RegisterForm from "../components/organisms/RegisterForm";
// import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <NavbarMinimal />
      <main className="min-h-screen bg-background py-5 gap-5 lg:pt-9">
        <section
          id="loginSection"
          className="mx-5 flex justify-center items-center md:mt-25 lg:mt-0"
        >
          <RegisterForm />
        </section>
      </main>
    </>
  );
}

export default Register;
