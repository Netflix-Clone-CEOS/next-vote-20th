import { inputStyle } from "../styles/inputStyles.css";

export default function Input({ title }: { title: string }) {
  return <input className={inputStyle} placeholder={title} />;
}
