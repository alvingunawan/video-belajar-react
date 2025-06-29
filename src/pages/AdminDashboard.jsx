import React, { useEffect, useState } from "react";
import image7 from "../assets/img/cardgroup/7.png";
import avatar7 from "../assets/img/avatarhome.png";
import Button from "../components/atoms/Button.jsx";
import AdminUserLayouts from "../layouts/AdminUserLayouts.jsx";

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;
  const [formData, setFormData] = useState({
    imageSrc: image7,
    title: "",
    description: "",
    avatarSrc: avatar7,
    authorName: "",
    authorPosition: "",
    rating: "",
    totalReviews: "",
    price: "",
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    const {
      title,
      description,
      authorName,
      authorPosition,
      rating,
      totalReviews,
      price,
    } = formData;

    if (
      !title ||
      !description ||
      !authorName ||
      !authorPosition ||
      !rating ||
      !totalReviews ||
      !price
    ) {
      alert("Semua field harus diisi.");
      return;
    }

    const confirmed = window.confirm(
      editIndex !== null
        ? "Yakin ingin menyimpan perubahan produk ini?"
        : "Apakah Anda yakin ingin menambah produk ini?"
    );
    if (!confirmed) return;

    const updatedProduct = {
      ...formData,
      imageAlt: "big4analysisimg",
      rating: parseFloat(rating),
      totalReviews: parseInt(totalReviews),
    };

    let updatedProducts;
    if (editIndex !== null) {
      updatedProducts = [...products];
      updatedProducts[editIndex] = updatedProduct;
      alert("Produk berhasil diperbarui!");
    } else {
      updatedProducts = [...products, updatedProduct];
      alert("Produk berhasil ditambahkan!");
    }

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    resetForm();
    setCurrentPage(1);
  };

  const handleEdit = (index) => {
    const product = products[index];
    setFormData({ ...product });
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("Yakin ingin menghapus produk ini?");
    if (!confirmed) return;

    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    if (editIndex === index) {
      resetForm();
    }
    setCurrentPage(1);
  };

  const resetForm = () => {
    setFormData({
      imageSrc: image7,
      title: "",
      description: "",
      avatarSrc: avatar7,
      authorName: "",
      authorPosition: "",
      rating: "",
      totalReviews: "",
      price: "",
    });
    setEditIndex(null);
  };

  if (!user) {
    return (
      <AdminUserLayouts>
        <main className="min-h-screen bg-background py-10 flex justify-center items-center">
          <p>Memuat data pengguna...</p>
        </main>
      </AdminUserLayouts>
    );
  }

  return (
    <AdminUserLayouts>
      <main className="bg-background my-12 py-5 px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Admin Dashboard
              </h2>
              <p className="text-gray-600 text-sm mt-1">Admin Configuration</p>
            </div>
            <aside className="bg-white rounded-lg shadow p-5">
              <ul className="space-y-3 font-medium text-gray-600">
                <li className="text-primary-default">Master Produk</li>
              </ul>
            </aside>
          </div>

          <section className="w-full lg:w-3/4 bg-white rounded-lg shadow p-5">
            <div className="flex items-center flex-col gap-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Master Produk
              </h3>
              <p className="text-sm text-gray-500">
                Pengaturan untuk Tambah / Edit / Update / Hapus Produk
              </p>
            </div>

            <div className="flex flex-col gap-6 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <InputField
                  id="title"
                  label="Judul"
                  value={formData.title}
                  onChange={handleChange}
                />
                <InputField
                  id="authorName"
                  label="Nama Pengajar"
                  value={formData.authorName}
                  onChange={handleChange}
                />
                <InputField
                  id="authorPosition"
                  label="Posisi Pengajar"
                  value={formData.authorPosition}
                  onChange={handleChange}
                />
                <InputField
                  id="rating"
                  label="Rating (0–5)"
                  type="number"
                  value={formData.rating}
                  onChange={handleChange}
                />
                <InputField
                  id="totalReviews"
                  label="Jumlah Review"
                  type="number"
                  value={formData.totalReviews}
                  onChange={handleChange}
                />
                <InputField
                  id="price"
                  label="Harga (misal: Rp 300K)"
                  value={formData.price}
                  onChange={handleChange}
                />
                <div className="lg:col-span-2">
                  <label
                    htmlFor="description"
                    className="text-sm text-gray-600 block mb-1"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                {editIndex !== null && (
                  <p className="text-sm text-gray-500 italic">
                    Sedang mengedit produk ke-{editIndex + 1}
                  </p>
                )}
                <div className="flex gap-2 ml-auto">
                  {editIndex !== null && (
                    <Button
                      type="button"
                      onClick={handleCancelEdit}
                      className="bg-gray-300 text-gray-800 px-4 py-1 hover:opacity-90 duration-200"
                    >
                      Batal Edit
                    </Button>
                  )}
                  <Button
                    type="button"
                    onClick={handleSave}
                    className="bg-primary-default text-white px-4 py-1 hover:opacity-90 duration-200"
                  >
                    {editIndex !== null ? "Simpan Perubahan" : "Tambah Produk"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Daftar Produk
              </h4>
              {products.length === 0 ? (
                <p className="text-gray-600">Belum ada produk.</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {currentProducts.map((product, i) => {
                      const index = (currentPage - 1) * productsPerPage + i;
                      return (
                        <div
                          key={index}
                          className="p-4 border rounded-lg shadow-sm bg-white"
                        >
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-32 object-cover w-full rounded"
                          />
                          <h5 className="mt-2 font-bold">{product.title}</h5>
                          <p className="text-sm text-gray-600">
                            {product.description}
                          </p>
                          <p className="text-sm mt-1 text-gray-500">
                            Pengajar: {product.authorName} (
                            {product.authorPosition})
                          </p>
                          <p className="text-sm text-gray-500">
                            Rating: {product.rating} ({product.totalReviews}{" "}
                            ulasan)
                          </p>
                          <p className="text-sm font-semibold text-primary-default">
                            {product.price}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button
                              type="button"
                              onClick={() => handleEdit(index)}
                              className="bg-primary-default text-white px-3 py-1 hover:opacity-90 duration-200"
                            >
                              Edit
                            </Button>
                            <Button
                              type="button"
                              onClick={() => handleDelete(index)}
                              className="bg-red-500 text-white px-3 py-1 hover:opacity-90 duration-200"
                            >
                              Hapus
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2 sm:gap-4">
                      <Button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="bg-gray-200 text-gray-800 px-4 py-1 rounded disabled:opacity-50"
                      >
                        Sebelumnya
                      </Button>
                      <span className="text-gray-600">
                        Halaman {currentPage} dari {totalPages}
                      </span>
                      <Button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-gray-200 text-gray-800 px-4 py-1 rounded disabled:opacity-50"
                      >
                        Berikutnya
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </AdminUserLayouts>
  );
}

const InputField = ({ id, label, value, onChange, type = "text" }) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white mt-2"
    />
  </div>
);

export default AdminDashboard;
