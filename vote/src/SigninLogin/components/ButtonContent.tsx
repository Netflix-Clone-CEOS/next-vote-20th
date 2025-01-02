import React from "react";
import { button_content } from "../styles/button.css";

export default function ButtonContent({ value }: { value: string }) {
  return <p className={button_content}>{value}</p>;
}
