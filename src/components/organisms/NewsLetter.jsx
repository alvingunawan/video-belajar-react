import React from "react";
import NewsletterForm from "../molecules/NewsletterForm";
import NewsletterContent from "../molecules/NewsletterContent";
import NewsLetterImg from "../../assets/img/newsletterimg.png";

function Newsletter() {
  return (
    <>
      <section id="newsletter" className="mt-5 mx-5 flex justify-center mb-5">
        <div
          className="relative container bg-cover py-12 bg-center no-repeat min-h-100 border-1 border-gray rounded-md lg:pt-20"
          style={{ backgroundImage: `url(${NewsLetterImg})` }}
        >
          <div className="absolute bg-black/80 inset-0"></div>
          <NewsletterContent />
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

export default Newsletter;
