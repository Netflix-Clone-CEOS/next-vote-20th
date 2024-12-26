import { teams } from "@/DemoDay/styles/voting/teams.css";
import React from "react";

interface TeamsProps {
  teamName: string;
  teamSummary: string;
}

export default function Teams(props: TeamsProps) {
  const { teamName, teamSummary } = props;
  return (
    <div className={teams}>
      <p>{teamName}</p>
      <p>{teamSummary}</p>
    </div>
  );
}
