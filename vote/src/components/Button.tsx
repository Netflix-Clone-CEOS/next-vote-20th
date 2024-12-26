import { buttonVariants, headerBtn } from "@/styles/headerBtn.css";

type ButtonProps = {
  variant: "login" | "signin";
  text: string;
};

export default function Button({ variant, text }: ButtonProps) {
  return (
    <button className={`${headerBtn} ${buttonVariants[variant]}`}>
      {text}
    </button>
  );
}
