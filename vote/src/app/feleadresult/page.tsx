"use client"

import Button from "@/PartLead/components/results/Button";
import Results from "@/PartLead/components/results/Results";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React, { useState, useEffect } from "react";
import { leadresult } from '@/PartLead/api/leadresult';

export default function Page() {
  const [leadResult, setLeadResult] = useState([]);

  useEffect(() => {
      const fetchLeadResult = async () => {
        try {
          const list = await leadresult("frontend");
          setLeadResult(list);
          console.log(list);
        } catch (error) {
          console.error("FE 투표 결과 불러오기 실패:", error);
        }
      };
  
      fetchLeadResult();
    }, []);

  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>FE 파트장 투표 결과</p>
      <Results leadList={leadResult}/>
      <Button />
    </div>
  );
}
