import React from "react";
import Candidate from './Candidate';
import { containerStyle } from "@/PartLead/styles/voting/container.css";

interface CandidateListProps {
  list: Array<{ team: string; name: string }>;
}

export default function Container({ list }: CandidateListProps) {
  return (
    <div className={containerStyle}>
      {list.map((candidate, index) => {
        const { team, name } = candidate;
        return <Candidate key={index} team={team} name={name} />;
      })}
    </div>
  );
}
