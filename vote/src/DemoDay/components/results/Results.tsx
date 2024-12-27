import { TEAM_LIST } from "@/DemoDay/core/teamlist";
import React from "react";
import Teams from "./Teams";
import { result } from "@/DemoDay/styles/results/results.css";

export default function Results() {
  return (
    <div className={result}>
      {TEAM_LIST.map((team, index) => {
        const { name, summary } = team;
        return (
          <Teams
            key={index}
            ranking={index}
            teamName={name}
            teamSummary={summary}
          />
        );
      })}
    </div>
  );
}
