import { inputStyle } from "../styles/inputStyles.css";

export default function InputSignin({ title }: { title: string }) {
  return <input className={inputStyle} placeholder={title} />;
}
