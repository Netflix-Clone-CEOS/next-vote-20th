import React from "react";
import { logined_haeder } from "./styles/header.css";

export default function LoginedHeader({ name }: { name: string }) {
  return <p className={logined_haeder}>{name}님 환영합니당</p>;
}
