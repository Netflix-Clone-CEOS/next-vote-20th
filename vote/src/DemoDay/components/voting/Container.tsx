"use client";
import React from "react";
import Teams from "./Teams";
import { containerStyle } from "@/DemoDay/styles/voting/container.css";
import { useQuery } from "@tanstack/react-query";
import { teamlist } from "@/DemoDay/api/teamlist";

interface Team {
  teamId: number;
  teamName: string;
  description: string;
}

export default function Container() {
  const { data, isLoading, isError } = useQuery<Team[]>({
    queryKey: ["teams"],
    queryFn: teamlist,
  });
  console.log(data);
  return (
    <div className={containerStyle}>
      {isLoading && <p>loading...</p>}
      {isError && <p>Error....</p>}
      {data?.map((team) => {
        const { teamName, description, teamId } = team;
        return (
          <Teams key={teamId} teamName={teamName} teamSummary={description} />
        );
      })}
    </div>
  );
}
