"use client";
import React from "react";
import Buttons from "./Buttons";
import Ceos from "@/components/Ceos";
import { headerContainer, logined_container } from "./styles/header.css";
import { useQuery } from "@tanstack/react-query";
import { member } from "@/SigninLogin/api/member";
import LoginedHeader from "./LoginedHeader";
import Logout from "./Logout";

export default function Header() {
  const { data } = useQuery({
    queryKey: ["member"],
    queryFn: member,
  });

  return (
    <header className={headerContainer}>
      <Ceos />
      {data ? (
        <span className={logined_container}>
          <LoginedHeader name={data.result.name} />
          <Logout />
        </span>
      ) : (
        <Buttons />
      )}
    </header>
  );
}
