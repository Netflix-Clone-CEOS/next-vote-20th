import {
  clicked_teams,
  teamNameStyle,
  teams,
  teamSummaryStyle,
} from "@/DemoDay/styles/voting/teams.css";
import React from "react";

interface TeamsProps {
  teamName: string;
  teamSummary: string;
  clickedTeam: number;
  teamId: number;
  handleClickTeam: (teamId: number) => void;
}

export default function Teams(props: TeamsProps) {
  const { teamName, teamId, teamSummary, handleClickTeam, clickedTeam } = props;

  return (
    <div
      onClick={() => handleClickTeam(teamId)}
      className={teamId === clickedTeam ? clicked_teams : teams}
    >
      <div className={teamNameStyle}>{teamName}</div>
      <div className={teamSummaryStyle}>{teamSummary}</div>
    </div>
  );
}
