"use client";
import React from "react";
import { logout_btn } from "./styles/header.css";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/SigninLogin/api/logout";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      console.log("성공");
      router.push("/login");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  function handleLogout() {
    mutation.mutate();
  }

  return (
    <button onClick={handleLogout} className={logout_btn}>
      로그아웃
    </button>
  );
}
