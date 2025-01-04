"use client"

import Button from "@/PartLead/components/results/Button";
import Container from "@/PartLead/components/voting/CandidateContainer";
import { title } from "@/DemoDay/styles/text.css";
import { pageStyle } from "@/DemoDay/styles/voting/container.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React, { useEffect, useState } from "react";
import { nomilist } from '@/PartLead/api/nomilist';

export default function Page() {
  const [frontList, setFrontList] = useState([]);

  useEffect(() => {
    const fetchFrontList = async () => {
      try {
        const list = await nomilist("frontend");
        setFrontList(list);
        console.log(list);
      } catch (error) {
        console.error("frontend list 불러오기 실패:", error);
      }
    };

    fetchFrontList();
  }, []);

  return (
    <div className={pageStyle}>
      <p className={`${title} ${pretendardSemiBold}`}>FE 파트장 투표</p>
      <Container list={frontList} redirectPath="/feleadresult"/>
      <Button />
    </div>
  );
}
