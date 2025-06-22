import React from "react";
import NavbarUser from "../components/organisms/NavbarUser";

function Profile() {
  return (
    <>
      <NavbarUser />
      <main className="min-h-screen bg-background py-5 gap-5 lg:pt-9">
        <section
          id="loginSection"
          className="mx-5 flex justify-center items-center md:mt-25 lg:mt-0"
        ></section>
      </main>
    </>
  );
}
export default Profile;
