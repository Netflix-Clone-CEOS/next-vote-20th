import VoteType from '@/DemoDay/components/voting/VoteType';
import { pageStyle, containerStyle, voteTypeContainerStyle } from "@/DemoDay/styles/voting/container.css";
import { title } from "@/DemoDay/styles/text.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";


export default function page() {
  return (
      <div className={pageStyle}>
        <p className={`${title} ${pretendardSemiBold}`}>파트장 투표</p>
        <div className={voteTypeContainerStyle}>
          <VoteType title='FRONT-END 파트장 투표' />
          <VoteType title='BACK-END 파트장 투표'/>
        </div>
      </div>
    );
}
