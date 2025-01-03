"use client";
import React from "react";
import Buttons from "./Buttons";
import Ceos from "@/components/Ceos";
import { headerContainer } from "./styles/header.css";
import { useQuery } from "@tanstack/react-query";
import { member } from "@/SigninLogin/api/member";
import LoginedHeader from "./LoginedHeader";

export default function Header() {
  const { data } = useQuery({
    queryKey: ["member"],
    queryFn: member,
  });

  return (
    <header className={headerContainer}>
      <Ceos />
      {data ? <LoginedHeader name={data.result.name} /> : <Buttons />}
    </header>
  );
}
