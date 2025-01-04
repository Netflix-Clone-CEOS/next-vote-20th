"use client";

import { resultBtn } from "@/DemoDay/styles/results/results.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/partleadvote");
  };

  return (
    <div
      className={`${resultBtn} ${pretendardSemiBold}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      돌아가기
    </div>
  );
}
