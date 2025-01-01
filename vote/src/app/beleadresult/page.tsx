import Button from "@/PartLead/components/results/Button";
import Results from "@/PartLead/components/results/Results";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

import { BACK_LIST } from '@/PartLead/core/backlist';

export default function page() {
  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>BE 파트장 투표 결과</p>
      <Results leadList={BACK_LIST}/>
      <Button />
    </div>
  );
}
