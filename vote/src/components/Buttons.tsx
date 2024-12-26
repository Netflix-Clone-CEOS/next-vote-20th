import Button from "./Button";
import { buttons } from "@/styles/headerBtn.css";

const BUTTON_LIST = ["로그인", "회원가입"];

export default function Buttons() {
  return (
    <div className={buttons}>
      {BUTTON_LIST.map((text) =>
        text === "로그인" ? (
          <Button variant="login" key={text} text={text} />
        ) : (
          <Button variant="signin" key={text} text={text} />
        )
      )}
    </div>
  );
}
