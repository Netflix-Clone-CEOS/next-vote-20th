import Button from "@/PartLead/components/results/Button";
import Results from "@/PartLead/components/results/Results";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

import { FRONT_LIST } from '@/PartLead/core/frontlist';

export default function page() {
  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>FE 파트장 투표 결과</p>
      <Results leadList={FRONT_LIST}/>
      <Button />
    </div>
  );
}
