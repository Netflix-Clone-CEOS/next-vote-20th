import { pagelayout } from "@/SigninLogin/styles/pagelayout.css";
import LoginInputs from "./components/LoginInputs";

export default function page() {
  return (
    <div className={pagelayout}>
      <p>로그인</p>
      <LoginInputs />
    </div>
  );
}
