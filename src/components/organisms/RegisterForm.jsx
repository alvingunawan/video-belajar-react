import googlesvg from "../../assets/icon/google.svg";
import InputWithLabel from "../molecules/InputWithLabel";
import DividerWithText from "../molecules/DividerWithText";
import Button from "../atoms/Button";
import PhoneNumberInput from "../molecules/PhoneNumberInput";
import PasswordInput from "../molecules/PasswordInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim().match(/^\+\d{6,}$/) ||
      !formData.password ||
      !formData.passwordConfirm
    ) {
      alert("Semua field wajib diisi atau tidak valid!");
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registrasi berhasil!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <div className="container bg-white py-8 border-2 border-gray-300 rounded-md md:w-1/2">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-3 lg:text-3xl">
          Pendaftaran Akun
        </h3>
        <p className="text-gray-500 text-xs mb-5 lg:text-base">
          Yuk, daftarkan akunmu sekarang juga!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="px-5 py-2">
          <InputWithLabel
            label="Nama Lengkap"
            name="fullName"
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <InputWithLabel
            label="E - Mail"
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <PhoneNumberInput
            value={formData.phone}
            onChange={handlePhoneChange}
          />
          <PasswordInput
            label="Kata Sandi"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordInput
            label="Konfirmasi Kata Sandi"
            name="passwordConfirm"
            id="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
          />

          <p className="text-right text-xs text-gray-500 font-bold mb-6 cursor-pointer lg:text-base">
            Lupa Password?
          </p>

          <Button
            type="submit"
            className="text-center w-full bg-primary-default text-white font-bold mb-4 py-2 rounded-lg cursor-pointer"
          >
            Daftar
          </Button>

          {/* Tombol Masuk */}
          <Button
            type="button"
            onClick={() => navigate("/login")}
            className="text-center w-full bg-primary-100 text-primary-default font-bold py-2 rounded-lg cursor-pointer hover:opacity-90 ease-in-out duration-200"
          >
            Masuk
          </Button>

          <DividerWithText> Atau </DividerWithText>

          <Button className="text-center w-full text-gray font-bold border-2 border-border py-2 rounded-lg text-xs flex items-center space-x-3 justify-center cursor-pointer lg:text-base">
            <img src={googlesvg} alt="googleicon" className="w-5 h-5" />
            <span className="font-bold">Masuk Dengan Google</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
