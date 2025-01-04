"use client"

import React, { useState } from "react";
import Image from "next/image";
import Candidate from "./Candidate";
import {
  candidateContainer,
  modalOverlay,
  modalContent,
} from "@/PartLead/styles/voting/container.css";
import {
  teamNameStyle,
  nameStyle,
} from "@/PartLead/styles/voting/candidates.css";
import Button from "@/PartLead/components/voting/Button";

interface CandidateListProps {
  list: Array<{ developerId: number; developerName: string; teamName: string }>;
}

export default function Container({ list }: CandidateListProps) {
  const [selectedCandidate, setSelectedCandidate] = useState<{
    developerId: number;
    developerName: string;
    teamName: string;
  } | null>(null);

  const handleCandidateClick = (candidate: {
    developerId: number;
    developerName: string;
    teamName: string;
  }) => {
    setSelectedCandidate(candidate);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <>
      <div className={candidateContainer}>
        {list.map((candidate) => {
          const { developerId, developerName, teamName } = candidate;
          return (
            <div key={developerId} onClick={() => handleCandidateClick(candidate)}>
              <Candidate team={teamName} name={developerName} />
            </div>
          );
        })}
      </div>

      {/* 후보 상세보기 모달 */}
      {selectedCandidate && (
        <div className={modalOverlay} onClick={closeModal}>
          <div
            className={modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile.svg"
              alt={`${selectedCandidate.developerName}'s profile`}
              width={200}
              height={200}
            />
            <h2 className={nameStyle}>{selectedCandidate.developerName}</h2>
            <p className={teamNameStyle}>자기소개 들어갈 자리: {selectedCandidate.teamName}</p>
          <Button text='투표하기' variant='voting'/>
          </div>
        </div>
      )}
    </>
  );
}
