import React from "react";
import Teams from "./Teams";

const TEAMS = [
  { name: "DD", summary: "holy" },
  { name: "DD", summary: "holy" },
  { name: "DD", summary: "holy" },
  { name: "DD", summary: "holy" },
  { name: "DD", summary: "holy" },
  { name: "DD", summary: "holy" },
];

export default function Container() {
  return (
    <div>
      {TEAMS.map((team, index) => {
        const { name, summary } = team;
        return <Teams key={index} teamName={name} teamSummary={summary} />;
      })}
    </div>
  );
}
