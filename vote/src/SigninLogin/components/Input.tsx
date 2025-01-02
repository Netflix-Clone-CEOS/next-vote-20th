import { inputStyle } from "../styles/inputStyles.css";

export default function Input({
  text,
  value,
  onChange,
}: {
  text: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={inputStyle}
      placeholder={text}
    />
  );
}
