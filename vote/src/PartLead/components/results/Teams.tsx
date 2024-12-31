import {
  rank,
  teams,
  teamname,
  teamsummary,
  voted,
} from "@/DemoDay/styles/results/teams.css";
import { pretendardSemiBold } from "@/styles/font.css";

interface TeamsProp {
  ranking: number;
  teamName: string;
  teamSummary: string;
}
export default function Teams(props: TeamsProp) {
  const { ranking, teamName, teamSummary } = props;
  return (
    <div className={teams}>
      <div className={`${rank} ${pretendardSemiBold}`}>{ranking}</div>
      <p className={teamname}>{teamName}</p>
      <p className={teamsummary}>{teamSummary}</p>
      <p className={voted}>{ranking}</p>
    </div>
  );
}
