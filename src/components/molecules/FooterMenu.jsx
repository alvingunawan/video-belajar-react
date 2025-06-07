function FooterMenu({ title, items = [] }) {
  return (
    <div className="mb-2.5 lg:col-span-1">
      <div className="selectButtonFooter mx-5 text-base relative">
        <p className="font-bold lg:mb-3">{title}</p>
        <div className="absolute right-1 top-1 text-gray lg:hidden">
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <ul className="hidden space-y-3 text-gray lg:block lg:w-full">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="hover:text-ternary-default ease-in-out duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {title === "Komunitas" && (
          <hr className="border-1 mt-5 border-gray/30 lg:hidden" />
        )}
      </div>
    </div>
  );
}

export default FooterMenu;
