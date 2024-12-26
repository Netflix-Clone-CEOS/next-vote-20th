import Button from "./Button";

const BUTTON_LIST = ["로그인", "회원가입"];

export default function Buttons() {
  return (
    <div>
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
