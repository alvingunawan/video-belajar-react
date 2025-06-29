import React, { useEffect, useState } from "react";
import avatar from "../assets/img/avatarhome.png";
import Button from "../components/atoms/Button.jsx";
import HomeUserLayouts from "../layouts/HomeUserLayouts.jsx";
import AdminUserLayouts from "../layouts/AdminUserLayouts.jsx";

function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
      setFormData({
        fullName: loggedInUser.fullName || "",
        email: loggedInUser.email || "",
        phone: loggedInUser.phone || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus akun?");
    if (!confirmed) return;

    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Buang user yang emailnya sama dengan yang login
    const filteredUsers = allUsers.filter(
      (u) => u.email !== loggedInUser.email
    );

    // Simpan array baru ke localStorage
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    localStorage.removeItem("loggedInUser");

    alert("Akun berhasil dihapus!");
    window.location.href = "/"; // Redirect ke halaman login
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Semua field harus diisi.");
      return;
    }

    const confirmed = window.confirm(
      "Apakah Anda yakin ingin mengubah data ini?"
    );
    if (!confirmed) return;

    const updatedUser = { ...user, ...formData };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Profil berhasil disimpan!");
  };

  const Layout = user?.role === "admin" ? AdminUserLayouts : HomeUserLayouts;

  if (!user) {
    return (
      <>
        <Layout>
          <main className="min-h-screen bg-background py-10 flex justify-center items-center">
            <p>Memuat data pengguna...</p>
          </main>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <main className="bg-background my-12 py-5 px-4 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Kolom Kiri: Judul + Sidebar */}
            <div className="w-full lg:w-1/4 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Ubah Profil
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Ubah data diri Anda
                </p>
              </div>
              <aside className="bg-white rounded-lg shadow p-5">
                <ul className="space-y-3 font-medium text-gray-600">
                  <li className="text-primary-default">Profil Saya</li>
                  <li className="hover:text-primary-default cursor-pointer">
                    Kelas Saya
                  </li>
                  <li className="hover:text-primary-default cursor-pointer">
                    Pesanan Saya
                  </li>
                </ul>
              </aside>
            </div>

            {/* Konten Kanan */}
            <section className="w-full lg:w-3/4 bg-white rounded-lg shadow p-5">
              {/* Header: Foto + Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={avatar}
                  alt="Foto Profil"
                  className="w-[92px] h-[92px] rounded-md object-cover border"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {user.fullName}
                  </h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-red-500 mt-2 cursor-not-allowed">
                    Ganti Foto Profil
                  </p>
                </div>
              </div>

              {/* Form Input */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Nama Lengkap */}
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white mt-2"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white mt-2"
                    />
                  </div>

                  {/* No. HP */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600"
                    >
                      No. HP
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white mt-2"
                    />
                  </div>
                </div>

                {/* Tombol */}
                <div className="flex justify-end gap-2 mt-2">
                  <div className="w-fit">
                    <Button
                      type="button"
                      onClick={handleDelete}
                      className="w-fit bg-red-500 text-white px-4 py-1 hover:opacity-90 duration-200"
                    >
                      Hapus Akun
                    </Button>
                  </div>
                  <div className="w-fit">
                    <Button
                      type="button"
                      onClick={handleSave}
                      className="w-fit bg-primary-default text-white px-4 py-1 hover:opacity-90 duration-200"
                    >
                      Simpan
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Profile;
