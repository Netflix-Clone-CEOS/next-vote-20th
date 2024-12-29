import { SIGN_IN } from "../../../SigninLogin/core/signin";
import { container } from "../../../SigninLogin/styles/container.css";
import Button from "../../../SigninLogin/components/Button";
import Input from "../../../SigninLogin/components/Input";
import { buttoncontainer } from "@/SigninLogin/styles/button.css";

export default function SigninInputs() {
  return (
    <div className={container}>
      {SIGN_IN.map((item) => {
        return <Input key={item} title={item} />;
      })}
      <div className={buttoncontainer}>
        <Button text="소속 팀명" />
        <Button text="소속 파트" />
      </div>
      <div>
        <Button text="가입하기" />
      </div>
    </div>
  );
}
