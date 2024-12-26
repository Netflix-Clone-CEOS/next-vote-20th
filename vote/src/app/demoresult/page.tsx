import Button from "@/DemoDay/components/results/Button";
import Results from "@/DemoDay/components/results/Results";
import { title } from "@/DemoDay/styles/text.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

export default function page() {
  return (
    <div>
      <p className={`${title} ${pretendardSemiBold}`}>데모데이 투표 결과</p>
      <Results />
      <Button />
    </div>
  );
}
