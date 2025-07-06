// AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import Button from "../components/atoms/Button.jsx";
import AdminUserLayouts from "../layouts/AdminUserLayouts.jsx";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/api/productServices.js";
import InputField from "../components/atoms/InputField.jsx";

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mentor: "",
    rolementor: "",
    price: "",
    photos:
      "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?semt=ais_hybrid&w=740",
    avatar: "https://i.pravatar.cc/100",
    totalReviews: 0,
  });
  const [editIndex, setEditIndex] = useState(null);

  const productsPerPage = 2;

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const requiredFields = [
      "title",
      "description",
      "mentor",
      "rolementor",
      "price",
    ];
    for (let field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        alert(`Kolom tidak boleh ada yang kosong.`);
        return false;
      }
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    const confirmation = window.confirm(
      editIndex !== null
        ? "Yakin menyimpan perubahan pada produk ini?"
        : "Yakin menambahkan produk ini?"
    );
    if (!confirmation) return;
    try {
      if (editIndex !== null) {
        const updated = { ...formData };
        await updateProduct(products[editIndex].id, updated);
        setEditIndex(null);
      } else {
        await addProduct(formData);
      }
      setFormData({
        title: "",
        description: "",
        mentor: "",
        rolementor: "",
        price: "",
        photos: "",
        avatar: "https://i.pravatar.cc/100",
        totalRating: 2.5,
        totalReviews: 0,
        imageSrc:
          "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?semt=ais_hybrid&w=740",
        imageAlt: "img",
      });
      fetchData();
    } catch (error) {
      console.error("Gagal menyimpan produk:", error);
    }
  };

  const handleEdit = (index) => {
    const product = currentProducts[index];
    const realIndex = (currentPage - 1) * productsPerPage + index;
    setEditIndex(realIndex);
    setFormData({ ...product });
  };

  const handleDelete = async (index) => {
    const confirmation = window.confirm("Yakin ingin menghapus produk ini?");
    if (!confirmation) return;
    try {
      const realIndex = (currentPage - 1) * productsPerPage + index;
      await deleteProduct(products[realIndex].id);
      fetchData();
    } catch (error) {
      console.error("Gagal menghapus produk:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setFormData({
      title: "",
      description: "",
      mentor: "",
      rolementor: "",
      price: "",
      photos: "",
      avatar: "",
      totalReviews: 0,
    });
  };

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
                  id="mentor"
                  label="Nama Pengajar"
                  value={formData.mentor}
                  onChange={handleChange}
                />
                <InputField
                  id="rolementor"
                  label="Posisi Pengajar"
                  value={formData.rolementor}
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
                  label="Harga"
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
                    {currentProducts.map((product, i) => (
                      <div
                        key={i}
                        className="p-4 border rounded-lg shadow-sm bg-white"
                      >
                        <img
                          src={product.photos}
                          alt={product.imageAlt || "Gambar produk"}
                          className="h-32 object-cover w-full rounded"
                        />
                        <h5 className="mt-2 font-bold">{product.title}</h5>
                        <p className="text-sm text-gray-600">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <img
                            src={product.avatar}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-500">
                            {product.mentor} ({product.rolementor})
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Rating: 2.5 ({product.totalReviews} ulasan)
                        </p>
                        <p className="text-sm font-semibold text-primary-default">
                          Rp {product.price}0
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button
                            type="button"
                            onClick={() => handleEdit(i)}
                            className="bg-primary-default text-white px-3 py-1 hover:opacity-90 duration-200"
                          >
                            Edit
                          </Button>
                          <Button
                            type="button"
                            onClick={() => handleDelete(i)}
                            className="bg-red-500 text-white px-3 py-1 hover:opacity-90 duration-200"
                          >
                            Hapus
                          </Button>
                        </div>
                      </div>
                    ))}
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

export default AdminDashboard;
