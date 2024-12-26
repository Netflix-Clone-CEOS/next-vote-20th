import { rank, teams } from "@/DemoDay/styles/results/teams.css";

interface TeamsProp {
  ranking: number;
  teamName: string;
  teamSummary: string;
}
export default function Teams(props: TeamsProp) {
  const { ranking, teamName, teamSummary } = props;
  return (
    <div className={teams}>
      <span className={rank}>{ranking}</span>
      <p>{teamName}</p>
      <p>{teamSummary}</p>
    </div>
  );
}
