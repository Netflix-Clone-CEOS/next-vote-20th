import { TEAM_LIST } from "@/DemoDay/core/teamlist";
import React from "react";
import Teams from "./Teams";

export default function Results() {
  return (
    <div>
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
