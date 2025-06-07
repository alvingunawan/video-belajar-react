function InputEmail({ placeholder }) {
  return (
    <input
      type="email"
      className="bg-white py-2.5 text-xs text-center border-0 rounded-md mb-1 lg:text-base lg:py-5 lg:text-left lg:pl-8"
      placeholder={placeholder}
      maxLength="44"
    />
  );
}
export default InputEmail;
