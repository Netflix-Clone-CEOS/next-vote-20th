import React from "react";
import { button_content } from "../styles/button.css";

export default function ButtonContent({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) {
  return (
    <p onClick={onClick} className={button_content}>
      {value}
    </p>
  );
}
