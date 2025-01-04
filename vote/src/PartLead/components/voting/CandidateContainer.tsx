"use client"

import React, { useState, useEffect } from "react";
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
import { leaddetail } from '@/PartLead/api/leaddetail';

interface CandidateListProps {
  list: Array<{ developerId: number; developerName: string; teamName: string }>;
}

export default function Container({ list }: CandidateListProps) {

  const [selectedCandidate, setSelectedCandidate] = useState<{
    developerId: number;
    developerName: string;
    teamName: string;
  } | null>(null);

  const [introduction, setIntroduction] = useState<string>("");

  useEffect(() => {
    const fetchDetail = async () => {
      if (!selectedCandidate) return;
      try {
        const res = await leaddetail(selectedCandidate.developerId);
        setIntroduction(res.introduction);
      } catch (error) {
        console.error("후보 자기소개 불러오기 실패:", error);
        setIntroduction("소개 정보를 불러오지 못했습니다.");
      }
    };

    fetchDetail();
  }, [selectedCandidate]);

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
            <p className={teamNameStyle}>{introduction}</p>
          <Button text='투표하기' variant='voting'/>
          </div>
        </div>
      )}
    </>
  );
}
