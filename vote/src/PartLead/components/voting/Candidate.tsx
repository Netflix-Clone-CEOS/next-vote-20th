import {
  teamNameStyle,
  candidates,
  nameStyle,
} from "@/PartLead/styles/voting/candidates.css";
import React from "react";

interface TeamsProps {
  team: string;
  name: string;
}

export default function Candidate(props: TeamsProps) {
  const { team, name } = props;
  return (
    <div className={candidates}>
      <div className={teamNameStyle}>{team}</div>
      <div className={nameStyle}>{name}</div>
    </div>
  );
}
