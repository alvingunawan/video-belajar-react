import React from "react";
import HeroImg from "../../assets/img/heroimg.png";

function Hero() {
  return (
    <section
      id="heroSection"
      className="mx-5 flex justify-center items-center md:mx-15"
    >
      <div
        className="relative container mt-5 bg-cover bg-center bg-no-repeat min-h-100 py-12 border-1 rounded-md overflow-hidden md:mt-8 md:py-18 lg:mt-10"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="absolute bg-black/77 inset-0"></div>
        <div className="relative font-bold text-center mx-2 mobileM:mx-1">
          <h1 className="text-2xl text-white font-bold mb-3 tracking-wider leading-6 mobileM:px-10 mobileL:px-15 md:px-40 md:text-2xl lg:px-25 lg:mb-5 lg:pt-2 lg:text-4xl lg:leading-tight">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Pratform Video
            Interaktif!
          </h1>
          <p className="text-white text-xs mb-5 tracking-wider mobileM:px-10 mobileL:px-15 md:px-40 lg:px-25 lg:text-base lg:mb-10">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="bg-primary-default text-white rounded-lg text-xs px-1 py-3 mx-1 mobileL:px-5 md:text-base hover:cursor-pointer hover:bg-primary-default/80 ease-in-out duration-200">
            Temukan Video Course untuk dipelajari!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
