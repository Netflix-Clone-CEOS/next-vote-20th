import { rank, teams, teamname } from "@/DemoDay/styles/results/teams.css";

interface TeamsProp {
  ranking: number;
  teamName: string;
  teamSummary: string;
}
export default function Teams(props: TeamsProp) {
  const { ranking, teamName, teamSummary } = props;
  return (
    <div className={teams}>
      <div className={rank}>{ranking}</div>
      <p className={teamname}>{teamName}</p>
      <p>{teamSummary}</p>
      <p>{ranking}</p>
    </div>
  );
}
