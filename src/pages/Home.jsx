import React, { useEffect, useState } from "react";
import HomeGuestLayouts from "../layouts/HomeGuestLayouts.jsx";
import HomeUserLayouts from "../layouts/HomeUserLayouts.jsx";
import Hero from "../components/organisms/Hero.jsx";
import TabsGroup from "../components/molecules/TabsGroup.jsx";
import CardGroup from "../components/organisms/CardGroup.jsx";
import Newsletter from "../components/organisms/NewsLetter.jsx";
import CardSectionIntro from "../components/molecules/CardSectionIntro.jsx";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  useEffect(() => {
    const checkUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };

    // Cek saat mount
    checkUser();

    // Cek saat localStorage berubah (pakai event)
    window.addEventListener("storage", checkUser);

    // Cek saat kembali dari logout
    window.addEventListener("focus", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener("focus", checkUser);
    };
  }, []);

  const LayoutComponent = loggedInUser ? HomeUserLayouts : HomeGuestLayouts;

  return (
    <LayoutComponent key={loggedInUser ? "user" : "guest"}>
      <Hero />
      <main>
        <section id="cardSection" className="mt-10 flex justify-center mx-5">
          <div className="container">
            <CardSectionIntro
              title="Koleksi Video Pembelajaran Unggulan"
              subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
            />
            <TabsGroup />
            <div
              id="cardContainer"
              className="gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:ml-5"
            >
              <CardGroup />
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
    </LayoutComponent>
  );
}

export default Home;
