"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import Buttons from "./Buttons";
import Ceos from "@/components/Ceos";
import { headerContainer, logined_container } from "./styles/header.css";
import { useQuery } from "@tanstack/react-query";
import { member } from "@/SigninLogin/api/member";
import LoginedHeader from "./LoginedHeader";
import Logout from "./Logout";

export default function Header() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["member"],
    queryFn: member,
  });

  const handleCeosClick = () => {
    router.push("/");
  };

  return (
    <header className={headerContainer}>
      <div onClick={handleCeosClick} style={{ cursor: "pointer" }}>
        <Ceos />
      </div>
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
