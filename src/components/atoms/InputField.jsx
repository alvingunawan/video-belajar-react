// components/atoms/InputField.jsx
import React from "react";

function InputField({ id, label, type = "text", value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-600 block mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white"
        required
      />
    </div>
  );
}

export default InputField;
