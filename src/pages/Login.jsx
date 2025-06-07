import React from "react";
import NavbarMinimal from "../components/organisms/NavbarMinimal";
import LoginForm from "../components/organisms/LoginForm";

function Login() {
  return (
    <>
      <NavbarMinimal />
      <main className="bg-background min-h-screen pt-5 gap-5 lg:pt-9">
        <section
          id="loginSection"
          className="mb-30 mx-5 flex justify-center items-center md:mt-25 lg:mt-0"
        >
          <LoginForm />
        </section>
      </main>
    </>
  );
}

export default Login;
