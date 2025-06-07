import Label from "../atoms/Label";

function GenderSelect({ name = "gender", id = "gender" }) {
  return (
    <>
      <Label htmlFor={"gender"}>
        Jenis Kelamin<span className="text-ternary-default"></span>
      </Label>

      <br />
      <select
        name={name}
        id={id}
        className="h-10 w-full border-2 border-gray-300 rounded-lg mb-4 cursor-pointer"
      >
        <option value="woman" className="cursor-pointer">
          &nbsp;Wanita
        </option>
        <option value="man" className="cursor-pointer">
          &nbsp;Pria
        </option>
      </select>
    </>
  );
}

export default GenderSelect;
