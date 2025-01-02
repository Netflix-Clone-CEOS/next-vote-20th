"use client";
import React from "react";
import Teams from "./Teams";
import { containerStyle } from "@/DemoDay/styles/voting/container.css";
import { useQuery } from "@tanstack/react-query";
import { teamlist } from "@/DemoDay/api/teamlist";

export default function Container() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teams"],
    queryFn: teamlist,
  });

  const result = data.result;
  console.log(data);
  return (
    <div className={containerStyle}>
      {result.map((team) => {
        const { teamName, description, teamId } = team;
        return (
          <Teams key={teamId} teamName={teamName} teamSummary={description} />
        );
      })}
    </div>
  );
}
