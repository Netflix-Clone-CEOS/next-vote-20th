import React from "react";
import Teams from "./Teams";
import { TEAM_LIST } from "@/DemoDay/core/teamlist";

export default function Container() {
  return (
    <div>
      {TEAM_LIST.map((team, index) => {
        const { name, summary } = team;
        return <Teams key={index} teamName={name} teamSummary={summary} />;
      })}
    </div>
  );
}
