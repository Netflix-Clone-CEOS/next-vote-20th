import React from "react";
import Button from "./Button";

const BUTTON_LIST = ["투표하기", "결과보기"];

export default function Buttons() {
  return (
    <div>
      {BUTTON_LIST.map((text) => {
        return <Button key={text} text={text} />;
      })}
    </div>
  );
}
