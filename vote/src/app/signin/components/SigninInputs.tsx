"use client";
import { container } from "../../../SigninLogin/styles/container.css";
import Button from "../../../SigninLogin/components/Button";
import Input from "../../../SigninLogin/components/Input";
import { buttoncontainer } from "@/SigninLogin/styles/button.css";
import { useReducer, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/SigninLogin/api/Signin";
import { TEAM_NAME } from "@/SigninLogin/core/team";
import ButtonContent from "@/SigninLogin/components/ButtonContent";
import { PART_LIST } from "@/SigninLogin/core/part";
import { redirect } from "next/navigation";

interface State {
  nameValue: string;
  idValue: string;
  pwValue: string;
  pwcheckValue: string;
  teamValue: string;
  partValue: string;
}

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_ID"; payload: string }
  | { type: "SET_PW"; payload: string }
  | { type: "SET_PW_CHECK"; payload: string }
  | { type: "SET_TEAM"; payload: string }
  | { type: "SET_PART"; payload: string };

const initalState: State = {
  nameValue: "",
  idValue: "",
  pwValue: "",
  pwcheckValue: "",
  teamValue: "",
  partValue: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_NAME": {
      return { ...state, nameValue: action.payload };
    }
    case "SET_ID":
      return { ...state, idValue: action.payload };
    case "SET_PW":
      return { ...state, pwValue: action.payload };
    case "SET_PW_CHECK":
      return { ...state, pwcheckValue: action.payload };
    case "SET_TEAM":
      return { ...state, teamValue: action.payload };
    case "SET_PART":
      return { ...state, partValue: action.payload };
    default:
      return state;
  }
};

export default function SigninInputs() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [isTeam, setIsTeam] = useState(false);
  const [isPart, setIsPart] = useState(false);

  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: async () => {
      console.log("성공");
      redirect("/login");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSignUp = () => {
    mutation.mutate({
      name: state.nameValue,
      userId: state.idValue,
      password: state.pwValue,
      team: state.teamValue,
      part: state.partValue,
    });
  };

  //원래 map으로 돌렸는데 오히려 가독성이 떨어지는 것 같아(머머있었는지 내가 모름,,이슈,,) map 풀어버렸습니덜덜
  return (
    <div className={container}>
      <Input
        text="이름"
        value={state.nameValue}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <Input
        text="아이디"
        value={state.idValue}
        onChange={(e) => dispatch({ type: "SET_ID", payload: e.target.value })}
      />
      <Input
        text="비밀번호"
        value={state.pwValue}
        onChange={(e) => dispatch({ type: "SET_PW", payload: e.target.value })}
      />
      <Input
        text="비밀번호 확인"
        value={state.pwcheckValue}
        onChange={(e) =>
          dispatch({ type: "SET_PW_CHECK", payload: e.target.value })
        }
      />
      <div className={buttoncontainer}>
        <div>
          <Button text="소속 팀명" onClick={() => setIsTeam(!isTeam)} />
          {isTeam &&
            TEAM_NAME.map((value) => {
              return (
                <ButtonContent
                  onClick={() => dispatch({ type: "SET_TEAM", payload: value })}
                  value={value}
                  key={value}
                />
              );
            })}
        </div>
        <div>
          <Button text="소속 파트" onClick={() => setIsPart(!isPart)} />
          {isPart &&
            PART_LIST.map((value) => {
              return (
                <ButtonContent
                  onClick={() => dispatch({ type: "SET_PART", payload: value })}
                  value={value}
                  key={value}
                />
              );
            })}
        </div>
      </div>
      <div>
        <Button onClick={handleSignUp} text="가입하기" />
      </div>
    </div>
  );
}
