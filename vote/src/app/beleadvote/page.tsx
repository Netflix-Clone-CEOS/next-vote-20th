"use client"

import Button from "@/PartLead/components/results/Button";
import Container from "@/PartLead/components/voting/CandidateContainer";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React, { useEffect, useState } from "react";
import { nomilist } from '@/PartLead/api/nomilist';

export default function page() {
  const [backList, setBackList] = useState([]);

  useEffect(() => {
      const fetchBackList = async () => {
        try {
          const list = await nomilist("backend");
          setBackList(list);
          console.log(list);
        } catch (error) {
          console.error("backend list 불러오기 실패:", error);
        }
      };
  
      fetchBackList();
    }, []);

  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>BE 파트장 투표</p>
      <Container list={backList} redirectPath="/beleadresult"/>
      <Button />
    </div>
  );
}
