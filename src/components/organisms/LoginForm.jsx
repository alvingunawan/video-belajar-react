import InputWithLabel from "../molecules/InputWithLabel";
import PasswordInput from "../molecules/PasswordInput";
import DividerWithText from "../molecules/DividerWithText";
import Button from "../atoms/Button";
import googlesvg from "../../assets/icon/google.svg";

function LoginForm() {
  return (
    <>
      <div className="container bg-white py-8 border-2 border-gray-300 rounded-md md:w-1/2">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3 lg:text-3xl">Masuk ke Akun</h3>
          <p className="text-gray-500 text-xs mb-5 lg:text-base">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>
        <form>
          <div className="px-5 py-2">
            <InputWithLabel label="E - Mail" name="email" type="email" />

            <PasswordInput label="Kata Sandi" name="password" />

            <p className="text-right text-xs text-gray-500 font-bold mb-6 cursor-pointer lg:text-base">
              Lupa Password?
            </p>

            <Button className="bg-primary-default text-white mb-4 hover:opacity-90 duration-200">
              Masuk
            </Button>

            <Button className="bg-primary-100 text-primary-default">
              Daftar
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
