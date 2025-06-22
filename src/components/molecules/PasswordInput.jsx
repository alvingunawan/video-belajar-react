import { useState } from "react";
import hidepassword from "../../assets/icon/hidepassword.png";
import openpassword from "../../assets/icon/openpassword.png";

function PasswordInput({ label, name, id, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const inputId = id || name; // fallback jika id tidak dikirim

  return (
    <>
      <label htmlFor={inputId} className="text-xs text-gray-500 lg:text-base">
        {label} <span className="text-ternary-default">*</span>
      </label>
      <br />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
          className="h-10 mb-3 rounded-lg w-full border-2 border-gray-300 pl-2 focus:outline-none focus:border-primary-default"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-5 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          <img
            src={showPassword ? openpassword : hidepassword}
            className="h-5 w-5"
            alt={showPassword ? "hide password" : "show password"}
          />
        </button>
      </div>
    </>
  );
}

export default PasswordInput;
