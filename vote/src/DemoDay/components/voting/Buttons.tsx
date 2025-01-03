import React from "react";
import Button from "./Button";
import { buttonContainerstyle } from "@/DemoDay/styles/voting/container.css";
import { useRouter } from "next/navigation";

const BUTTON_LIST = ["투표하기", "결과보기"];

export default function Buttons({ onClick }: { onClick: () => void }) {
  const router = useRouter();

  function handleResult() {
    router.push("/domoresult");
  }

  return (
    <div className={buttonContainerstyle}>
      {BUTTON_LIST.map((text) => {
        if (text == "투표하기") {
          return (
            <Button onClick={onClick} variant="voting" key={text} text={text} />
          );
        } else {
          return (
            <Button
              onClick={handleResult}
              variant="result"
              key={text}
              text={text}
            />
          );
        }
      })}
    </div>
  );
}
