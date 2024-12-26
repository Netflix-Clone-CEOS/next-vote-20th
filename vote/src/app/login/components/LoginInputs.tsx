import Button from "@/SigninLogin/components/Button";
import Input from "@/SigninLogin/components/Input";
import { LOGIN } from "@/SigninLogin/core/login";
import { container } from "@/SigninLogin/styles/container.css";
import React from "react";

export default function LoginInputs() {
  return (
    <div className={container}>
      {LOGIN.map((item) => {
        return <Input title={item} key={item} />;
      })}
      <Button text="로그인" />
    </div>
  );
}
