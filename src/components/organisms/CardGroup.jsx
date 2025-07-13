// CardGroup.jsx
import React, { useEffect } from "react";
import useProductStore from "../../store/useProductStore.js";
import CardComponent from "../molecules/CardComponent.jsx";

function CardGroup() {
  const { products, fetchProducts, isLoading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Memuat produk...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Gagal mengambil produk: {error}
      </p>
    );
  }

  return (
    <>
      {products.length > 0 ? (
        products.map((card, index) => (
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
        <p className="text-center text-gray-500">Tidak ada produk ditemukan.</p>
      )}
    </>
  );
}

export default CardGroup;
