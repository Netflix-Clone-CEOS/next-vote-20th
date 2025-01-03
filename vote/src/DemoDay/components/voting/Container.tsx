"use client";
import React, { useState } from "react";
import Teams from "./Teams";
import {
  containerStyle,
  team_container,
} from "@/DemoDay/styles/voting/container.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { teamlist } from "@/DemoDay/api/teamlist";
import Buttons from "./Buttons";
import { teamvote } from "@/DemoDay/api/teamvote";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const [clickedTeam, setClickedTeam] = useState(0);

  function handleClickTeam(teamId: number) {
    setClickedTeam(teamId);
  }

  const mutation = useMutation({
    mutationFn: teamvote,
    onSuccess: async () => {
      console.log("성공");
      router.push("/demoresult");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  function handleVoteTeam(teamId: number) {
    mutation.mutate({ teamId });
  }

  return (
    <div className={containerStyle}>
      <div className={team_container}>
        {isLoading && <p>loading...</p>}
        {isError && <p>Error....</p>}
        {data?.map((team) => {
          const { teamName, description, teamId } = team;
          return (
            <Teams
              clickedTeam={clickedTeam}
              handleClickTeam={handleClickTeam}
              key={teamId}
              teamId={teamId}
              teamName={teamName}
              teamSummary={description}
            />
          );
        })}
      </div>
      <Buttons onClick={() => handleVoteTeam(clickedTeam)} />
    </div>
  );
}
