import {
  rank,
  candidate,
  teamName,
  candidateName,
  voted,
} from "@/PartLead/styles/results/candidates.css";
import { pretendardSemiBold } from "@/styles/font.css";

interface candidateProp {
  ranking: number;
  team: string;
  name: string;
}
export default function Candidate(props: candidateProp) {
  const { ranking, team, name } = props;

  const dynamicCandidateStyle =
    ranking === 1
      ? { backgroundColor: "#384084", color: "#FFFFFF" }
      : {};

  const dynamicRankStyle =
    ranking === 1
      ? { backgroundColor: "#FFFFFF", color: "#384084" }
      : {};

  const dynamicVotedStyle =
    ranking === 1
      ? { color: "#FFFFFF" }
      : {};

  return (
    <div className={candidate} style={dynamicCandidateStyle}>
      <div className={`${rank} ${pretendardSemiBold}`} style={dynamicRankStyle}>
        {ranking}
      </div>
      <p className={candidateName}>{name}</p>
      <p className={teamName}>{team}</p>
      <p className={voted} style={dynamicVotedStyle}>
        {ranking}
      </p>
    </div>
  );
}
