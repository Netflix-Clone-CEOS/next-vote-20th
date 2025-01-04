"use client"

import VoteType from '@/DemoDay/components/voting/VoteType';
import Button from '@/DemoDay/components/voting/Button';
import { useRouter } from 'next/navigation';
import { pageStyle, voteTypeWrapper, voteTypeContainerStyle } from "@/DemoDay/styles/voting/container.css";
import { title } from "@/DemoDay/styles/text.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

export default function Page() {
  const router = useRouter();

  function handleFrontResult() {
    router.push("/feleadresult");
  }

  function handleBackResult() {
    router.push("/beleadresult");
  }

  return (
      <div className={pageStyle}>
        <p className={`${title} ${pretendardSemiBold}`}>파트장 투표</p>
        <div className={voteTypeContainerStyle}>
        <div className={voteTypeWrapper}>
          <VoteType title='FRONT-END 파트장 투표' route="/feleadvote" />
          <Button onClick={handleFrontResult} variant="voting" key="결과보기" text="결과보기"/>
        </div>
        <div className={voteTypeWrapper}>
          <VoteType title='BACK-END 파트장 투표' route="/beleadvote"/>
          <Button onClick={handleBackResult} variant="voting" key="결과보기" text="결과보기"/>
        </div>
        </div>
      </div>
    );
}
