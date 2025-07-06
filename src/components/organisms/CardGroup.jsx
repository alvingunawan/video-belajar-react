// CardGroup.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api/productServices.js";
import CardComponent from "../molecules/CardComponent.jsx";

function CardGroup() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setCardsData(products);
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {cardsData.length > 0 ? (
        cardsData.map((card, index) => (
          <CardComponent
            key={index}
            imageSrc={card.photos}
            imageAlt={card.imageAlt || "img"}
            title={card.title}
            description={card.description}
            avatarSrc={card.avatar}
            authorName={card.mentor}
            authorPosition={card.rolementor}
            rating={`2.5`}
            totalReviews={card.totalReviews}
            price={`Rp ${card.price}0`}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Memuat produk...</p>
      )}
    </>
  );
}

export default CardGroup;
