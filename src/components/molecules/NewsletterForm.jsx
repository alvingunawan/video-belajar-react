import InputEmail from "../atoms/InputEmail";
import ButtonPrimary from "../atoms/ButtonPrimary";

function NewsletterForm() {
  return (
    <form action="#">
      <div className="relative flex flex-col justify-center mx-5 gap-2 mobileM:mx-8 md:mx-50">
        <InputEmail placeholder="Masukan Emailmu" />
        <ButtonPrimary>Subscribe</ButtonPrimary>
      </div>
    </form>
  );
}
export default NewsletterForm;
