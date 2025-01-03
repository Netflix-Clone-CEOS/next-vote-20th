"use client";
import React from "react";
import Teams from "./Teams";
import { result } from "@/DemoDay/styles/results/results.css";
import { teamresult } from "@/DemoDay/api/teamresult";
import { useQuery } from "@tanstack/react-query";

interface Team {
  result: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map(arg0: (team: any) => React.JSX.Element): React.ReactNode;
    teamName: string;
    description: string;
    count: number;
  };
  teamName: string;
  description: string;
  count: number;
}

export default function Results() {
  const { data, isLoading, isError } = useQuery<Team>({
    queryKey: ["teamsresult"],
    queryFn: teamresult,
  });

  return (
    <div className={result}>
      {isLoading && <p>loading</p>}
      {isError && <p>..isError</p>}
      {data &&
        data.result.map((team) => {
          const { teamName, description, count } = team;
          return (
            <Teams
              key={teamName}
              ranking={count}
              teamName={teamName}
              teamSummary={description}
            />
          );
        })}
    </div>
  );
}
