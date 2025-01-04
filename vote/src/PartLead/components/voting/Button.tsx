import { button, buttonVariants } from "@/PartLead/styles/voting/button.css";

type ButtonProps = {
  variant: "voting" | "result";
  text: string;
  onClick: () => void;
};

export default function Button({ onClick, text, variant }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`${button} ${buttonVariants[variant]}`}>
        {text}
    </button>
  );
}
