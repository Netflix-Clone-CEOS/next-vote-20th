"use client";
import { resultBtn } from "@/DemoDay/styles/results/results.css";
import { pretendardSemiBold } from "@/styles/font.css";
import { useRouter } from "next/navigation";
import React from "react";

export default function Button() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <div onClick={handleClick} className={`${resultBtn} ${pretendardSemiBold}`}>
      돌아가기
    </div>
  );
}
