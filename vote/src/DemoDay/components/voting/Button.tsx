import { button } from "@/DemoDay/styles/voting/button.css";

export default function Button({ text }: { text: string }) {
  return <button className={button}>{text}</button>;
}
