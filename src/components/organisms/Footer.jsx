import FooterCopyright from "../molecules/FooterCopyright";
import FooterLogo from "../molecules/FooterLogo";
import FooterMenu from "../molecules/FooterMenu";
import FooterSocial from "../molecules/FooterSocial";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-white tracking-wider">
          <div className="container mx-auto py-3">
            <div className="flex flex-col lg:grid lg:grid-cols-6">
              <FooterLogo />
              <FooterMenu
                title="Kategori"
                items={[
                  "Digital & Teknologi",
                  "Pemasaran",
                  "Manajemen Bisnis",
                  "Pengembangan Diri",
                  "Desain",
                ]}
              />
              <FooterMenu
                title="Perusahaan"
                items={[
                  "Tentang Kami",
                  "FAQ",
                  "Kebijakan Privasi",
                  "Ketentuan Layanan",
                  "Bantuan",
                ]}
              />
              <FooterMenu title="Komunitas" items={["Tips Sukses", "Blog"]} />
            </div>
            <div className="innerBottomFooter lg:flex lg:flex-row-reverse lg:justify-between mx-5">
              <FooterSocial />
              <FooterCopyright />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
