import Buttons from "@/DemoDay/components/voting/Buttons";
import Container from "@/PartLead/components/voting/CandidateContainer";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import { BACK_LIST } from '@/PartLead/core/backlist';
import React from "react";

export default function page() {
  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>BE 파트장 투표</p>
      <Container list={BACK_LIST}/>
      <Buttons />
    </div>
  );
}
