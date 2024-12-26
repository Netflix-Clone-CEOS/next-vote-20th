import { SIGN_IN } from "../core/signin";
import { container } from "../styles/container.css";
import Button from "./Button";
import InputSignin from "./InputSignin";

export default function SigninInputs() {
  return (
    <div className={container}>
      {SIGN_IN.map((item) => {
        if (item != "이메일주소") {
          return <InputSignin key={item} title={item} />;
        } else {
          return (
            <>
              <InputSignin title={item} /> <Button text="인증" />
            </>
          );
        }
      })}
      <div>
        <Button text="소속 팀명" />
        <Button text="소속 파트" />
      </div>
      <div>
        <Button text="가입하기" />
      </div>
    </div>
  );
}
