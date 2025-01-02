"use client";
import { login } from "@/SigninLogin/api/login";
import Button from "@/SigninLogin/components/Button";
import Input from "@/SigninLogin/components/Input";
import { container } from "@/SigninLogin/styles/container.css";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

export default function LoginInputs() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async () => {
      console.log("성공");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleLogin = () => {
    mutation.mutate({
      userId: userId,
      password: password,
    });
  };

  return (
    <div className={container}>
      <Input
        text="로그인"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        text="비밀번호"
      />
      <Button onClick={handleLogin} text="로그인" />
    </div>
  );
}
