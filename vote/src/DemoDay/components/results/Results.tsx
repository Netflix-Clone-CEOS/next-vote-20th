"use client";
import { TEAM_LIST } from "@/DemoDay/core/teamlist";
import React from "react";
import Teams from "./Teams";
import { result } from "@/DemoDay/styles/results/results.css";
import { teamresult } from "@/DemoDay/api/teamresult";
import { useQuery } from "@tanstack/react-query";

export default function Results() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teamsresult"],
    queryFn: teamresult,
  });
  console.log(data);
  return (
    <div className={result}>
      {isLoading && <p>loading</p>}
      {isError && <p>..isError</p>}
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
