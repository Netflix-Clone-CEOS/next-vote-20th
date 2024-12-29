import { button, buttonVariants } from "@/DemoDay/styles/voting/button.css";

type ButtonProps = {
  variant: "voting" | "result";
  text: string;
};

export default function Button({ text, variant }: ButtonProps) {
  return (
    <button className={`${button} ${buttonVariants[variant]}`}>{text}</button>
  );
}
