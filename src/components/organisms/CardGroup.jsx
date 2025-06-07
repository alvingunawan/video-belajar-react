// CardGroup.jsx
import React from "react";
import CardComponent from "../molecules/CardComponent.jsx";
import image1 from "../../assets/img/cardgroup/1.png";
import image2 from "../../assets/img/cardgroup/2.png";
import image3 from "../../assets/img/cardgroup/3.png";
import image4 from "../../assets/img/cardgroup/4.png";
import image5 from "../../assets/img/cardgroup/5.png";
import image6 from "../../assets/img/cardgroup/6.png";
import image7 from "../../assets/img/cardgroup/7.png";
import image8 from "../../assets/img/cardgroup/8.png";
import image9 from "../../assets/img/cardgroup/9.png";

import avatar1 from "../../assets/img/cardgroup/avatar/1.png";
import avatar2 from "../../assets/img/cardgroup/avatar/2.png";
import avatar3 from "../../assets/img/cardgroup/avatar/3.png";
import avatar4 from "../../assets/img/cardgroup/avatar/4.png";
import avatar5 from "../../assets/img/cardgroup/avatar/5.png";
import avatar6 from "../../assets/img/cardgroup/avatar/6.png";
import avatar7 from "../../assets/img/cardgroup/avatar/7.png";
import avatar8 from "../../assets/img/cardgroup/avatar/8.png";
import avatar9 from "../../assets/img/cardgroup/avatar/9.png";

function CardGroup() {
  const cardsData = [
    {
      imageSrc: image1,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar1,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image2,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar2,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image3,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar3,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image4,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar4,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image5,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar5,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image6,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar6,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image7,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar7,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image8,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar8,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    {
      imageSrc: image9,
      imageAlt: "big4analysisimg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatarSrc: avatar9,
      authorName: "Jenna Ortega",
      authorPosition: "Senior Accountant",
      rating: 4.5,
      totalReviews: 86,
      price: "Rp 300K",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </>
  );
}

export default CardGroup;
