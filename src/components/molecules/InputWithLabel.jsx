import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputWithLabel = ({ label, name, ...props }) => (
  <div className="mb-4">
    <Label htmlFor={name}>
      {label} <span className="text-ternary-default">*</span>
    </Label>
    <Input name={name} id={name} {...props} />
  </div>
);
export default InputWithLabel;
