import googlesvg from "../../assets/icon/google.svg";
import InputWithLabel from "../molecules/InputWithLabel";
import DividerWithText from "../molecules/DividerWithText";
import Button from "../atoms/Button";
import PhoneNumberInput from "../molecules/PhoneNumberInput";
import PasswordInput from "../molecules/PasswordInput";

function RegisterForm() {
  return (
    <>
      <div className="container bg-white py-8 border-2 border-gray-300 rounded-md md:w-1/2">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3 lg:text-3xl">
            Pendaftaran Akun
          </h3>
          <p className="text-gray-500 text-xs mb-5 lg:text-base">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>
        <form>
          <div className="px-5 py-2">
            <InputWithLabel
              label="Nama Lengkap"
              name="fullName"
              type="text"
              id="fullName"
            />
            <InputWithLabel
              label="E - Mail"
              name="email"
              type="email"
              id="email"
            />

            <PhoneNumberInput />
            <PasswordInput label="Kata Sandi" name="password" id="password" />

            <PasswordInput
              label="Konfirmasi Kata Sandi"
              name="passwordConfirm"
              id="passwordConfirm"
            />

            <p className="text-right text-xs text-gray-500 font-bold mb-6 cursor-pointer lg:text-base">
              Lupa Password?
            </p>
            <Button className="text-center w-full bg-primary-default text-white font-bold mb-4 py-2 rounded-lg cursor-pointer">
              Daftar
            </Button>
            <Button
              type="button"
              id="loginBtn"
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
    </>
  );
}

export default RegisterForm;
