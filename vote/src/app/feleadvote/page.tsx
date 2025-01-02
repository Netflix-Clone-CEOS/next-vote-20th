import Button from "@/PartLead/components/results/Button";
import Container from "@/PartLead/components/voting/CandidateContainer";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import { FRONT_LIST } from '@/PartLead/core/frontlist';
import React from "react";

export default function page() {
  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>FE 파트장 투표</p>
      <Container list={FRONT_LIST}/>
      <Button />
    </div>
  );
}
