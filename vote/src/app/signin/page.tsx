import SigninInputs from "./components/SigninInputs";
import { pagelayout } from "@/SigninLogin/styles/pagelayout.css";

export default function page() {
  return (
    <div className={pagelayout}>
      <p>회원가입</p>
      <SigninInputs />
    </div>
  );
}
