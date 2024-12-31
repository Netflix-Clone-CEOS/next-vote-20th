"use client"

import { voteType, titleStyle } from "@/DemoDay/styles/voting/voteType.css";
import React from "react";
import { useRouter } from "next/navigation";

interface VoteTypeProps {
  title: string;
  route?: string;
}

export default function VoteType(props: VoteTypeProps) {
  const { title, route } = props;
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <div className={voteType} onClick={handleClick}>
      <div className={titleStyle}>{title}</div>
    </div>
  );
}
