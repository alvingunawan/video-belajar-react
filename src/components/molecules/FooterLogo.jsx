import logo from "../../../src/assets/img/logo.png";

function FooterLogo() {
  return (
    <>
      <div className="space-y-2 lg:col-span-3 lg:mt-5">
        <img src={logo} alt="logo" className="w-40 h-10 ml-2" />
        <div className="textContentLeftFooter mx-5">
          <p className="font-bold mb-2 lg:mb-3">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-sm mb-2">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-sm mb-3">+62-877-7123-1234</p>
        </div>
      </div>
    </>
  );
}

export default FooterLogo;
