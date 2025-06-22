import { useState, useEffect } from "react";
import flagid from "../../assets/icon/flag/id.png";
import flagjp from "../../assets/icon/flag/jp.png";
import flagus from "../../assets/icon/flag/us.png";
import Label from "../atoms/Label";

const flagMap = {
  id: flagid,
  jp: flagjp,
  us: flagus,
};

const countryCodeMap = {
  id: "+62",
  jp: "+81",
  us: "+1",
};

function PhoneNumberInput({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState("id");

  // Ambil nomor lokal (tanpa kode negara) dari value luar
  const getLocalNumber = () => {
    const fullCode = countryCodeMap[selectedCountry];
    return value?.startsWith(fullCode)
      ? value.slice(fullCode.length)
      : value || "";
  };

  const handlePhoneChange = (e) => {
    const localNumber = e.target.value;
    const fullPhone = `${countryCodeMap[selectedCountry]}${localNumber}`;
    onChange(fullPhone);
    console.log("Phone changed:", fullPhone); // 🔍 debug
  };

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);

    const currentLocalNumber = getLocalNumber();
    const newFullPhone = `${countryCodeMap[newCountry]}${currentLocalNumber}`;
    onChange(newFullPhone);
    console.log("Country changed:", newFullPhone); // 🔍 debug
  };

  // Update country jika value luar berubah
  useEffect(() => {
    for (const [key, code] of Object.entries(countryCodeMap)) {
      if (value?.startsWith(code)) {
        setSelectedCountry(key);
        break;
      }
    }
  }, [value]);

  return (
    <>
      <Label htmlFor="phoneNumberDetail">
        No. Hp <span className="text-ternary-default">*</span>
      </Label>

      <div className="flex mb-5 gap-2">
        <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center px-2 bg-gray-200 border-r border-gray-300">
            <img
              id="selectedFlag"
              src={flagMap[selectedCountry]}
              alt="flag"
              className="w-2/3"
            />
          </div>
          <select
            name="countryCode"
            id="countryCode"
            className="text-center px-2 md:px-5 bg-white outline-none cursor-pointer"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="id">+62</option>
            <option value="jp">+81</option>
            <option value="us">+1</option>
          </select>
        </div>

        <input
          type="number"
          name="phoneNumberDetail"
          id="phoneNumberDetail"
          className="w-2/3 h-10 border-2 border-gray-300 rounded-lg pl-2 md:flex-grow appearance-none focus:outline-none focus:border-primary-default"
          value={getLocalNumber()}
          onChange={handlePhoneChange}
        />
      </div>
    </>
  );
}

export default PhoneNumberInput;
