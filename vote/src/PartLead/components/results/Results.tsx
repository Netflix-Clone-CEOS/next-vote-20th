import React from "react";
import Candidate from "./Candidate";
import { result, resultColumn } from "@/PartLead/styles/results/results.css";

interface ResultsProps {
  leadList: { count: number; developerName: string; teamName: string }[];
}

export default function Results({ leadList }: ResultsProps) {
  const columnCount = Math.ceil(leadList.length / 2);
  const column1 = leadList.slice(0, columnCount);
  const column2 = leadList.slice(columnCount);

  return (
    <div className={result}>
      {/* 첫 번째 열 */}
      <div className={resultColumn}>
        {column1.map((candidate, index) => (
          <Candidate
            key={index}
            ranking={index + 1}
            team={candidate.teamName}
            name={candidate.developerName}
            count={candidate.count}
          />
        ))}
      </div>

      {/* 두 번째 열 */}
      <div className={resultColumn}>
        {column2.map((candidate, index) => (
          <Candidate
            key={index}
            ranking={columnCount + index + 1}
            team={candidate.teamName}
            name={candidate.developerName}
            count={candidate.count}
          />
        ))}
      </div>
    </div>
  );
}
