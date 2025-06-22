import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWithLabel from "../molecules/InputWithLabel";
import PasswordInput from "../molecules/PasswordInput";
import DividerWithText from "../molecules/DividerWithText";
import Button from "../atoms/Button";
import googlesvg from "../../assets/icon/google.svg";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua user yang tersimpan
    const storedData = JSON.parse(localStorage.getItem("users")) || [];

    // Cari user dengan email & password cocok
    const matchedUser = storedData.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      setError("");

      // Simpan data user yang login
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

      // alert("Login berhasil!");
      navigate("/"); // Ganti sesuai route tujuan
    } else {
      setError("Email atau password salah.");
    }
  };

  return (
    <>
      <div className="container bg-white py-8 border-2 border-gray-300 rounded-md md:w-1/2">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3 lg:text-3xl">Masuk ke Akun</h3>
          <p className="text-gray-500 text-xs mb-5 lg:text-base">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-5 py-2">
            <InputWithLabel
              label="E - Mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <PasswordInput
              label="Kata Sandi"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <p className="text-right text-xs text-gray-500 font-bold mb-6 cursor-pointer lg:text-base">
              Lupa Password?
            </p>

            <Button
              type="submit"
              className="bg-primary-default text-white mb-4 hover:opacity-90 duration-200"
            >
              Login
            </Button>

            <Button
              type="button"
              className="bg-primary-100 text-primary-default"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>

            <DividerWithText>Atau</DividerWithText>

            <Button className="text-gray border-2 border-border text-xs flex items-center space-x-3 justify-center lg:text-base">
              <img src={googlesvg} alt="googleicon" className="w-5 h-5" />
              <span className="font-bold">Masuk Dengan Google</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
