import Buttons from "@/DemoDay/components/voting/Buttons";
import Container from "@/DemoDay/components/voting/Container";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

export default function page() {
  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>데모데이 투표</p>
      <Container />
      <Buttons />
    </div>
  );
}
