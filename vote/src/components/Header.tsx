import React from "react";
import Buttons from "./Buttons";
import Ceos from "@/components/Ceos";
import { headerContainer } from "./styles/header.css";

export default function Header() {
  return (
    <header className={headerContainer}>
      <Ceos />
      <Buttons />
    </header>
  );
}
