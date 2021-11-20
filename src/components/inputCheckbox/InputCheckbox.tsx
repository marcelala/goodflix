import { useRef } from "react";

// Interfaces
interface iFields {
  key: string;
  label: string;
}
interface iProps {
  onChange: Function;
  options: iFields;
  state: any;
}
export default function InputCheckbox({ onChange, options, state }: iProps) {
  const { key, label } = options;

  // Properties
  const inputReference = useRef<HTMLInputElement>(null);

  return (
    <div className={"checkbox-container"}>
      <input
        checked={Boolean(state)}
        onChange={() => onChange(key, !state)}
        ref={inputReference}
        type="checkbox"
      />{" "}
      <label>
        <span className="label"> {label}</span>
        <div className="helper"></div>
      </label>
    </div>
  );
}
