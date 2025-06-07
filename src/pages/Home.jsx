import React from "react";
import HomeGuestLayouts from "../layouts/HomeGuestLayouts.jsx";
import Hero from "../components/organisms/Hero.jsx";
import TabsGroup from "../components/molecules/TabsGroup.jsx";
import CardGroup from "../components/organisms/CardGroup.jsx";
import Newsletter from "../components/organisms/NewsLetter.jsx";
import CardSectionIntro from "../components/molecules/CardSectionIntro.jsx";

function Home() {
  return (
    <>
      <HomeGuestLayouts>
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
      </HomeGuestLayouts>
    </>
  );
}

export default Home;
