import React from "react";
import { inputStyle } from "../styles/inputStyles.css";

export default function PasswordInput() {
  return <input className={inputStyle} placeholder="비밀번호" />;
}
