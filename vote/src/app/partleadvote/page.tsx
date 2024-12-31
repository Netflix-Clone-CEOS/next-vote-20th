import VoteType from '@/DemoDay/components/voting/VoteType';
import Button from '@/DemoDay/components/voting/Button';
import { pageStyle, voteTypeWrapper, voteTypeContainerStyle } from "@/DemoDay/styles/voting/container.css";
import { title } from "@/DemoDay/styles/text.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

export default function page() {
  return (
      <div className={pageStyle}>
        <p className={`${title} ${pretendardSemiBold}`}>파트장 투표</p>
        <div className={voteTypeContainerStyle}>
        <div className={voteTypeWrapper}>
          <VoteType title='FRONT-END 파트장 투표' route="/feleadvote" />
          <Button variant="result" key="결과보기" text="결과보기"/>
        </div>
        <div className={voteTypeWrapper}>
          <VoteType title='BACK-END 파트장 투표' route="/beleadvote"/>
          <Button variant="result" key="결과보기" text="결과보기"/>
        </div>
        </div>
      </div>
    );
}
