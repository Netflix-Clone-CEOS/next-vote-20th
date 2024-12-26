import { button } from "@/DemoDay/styles/voting/button.css";
import { pretendardSemiBold } from "@/styles/font.css";
import React from "react";

export default function Button() {
  return <div className={`${button} ${pretendardSemiBold}`}>돌아가기</div>;
}
