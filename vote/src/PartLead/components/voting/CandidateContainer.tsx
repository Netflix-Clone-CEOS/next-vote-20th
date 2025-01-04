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
import { leadvote } from "@/PartLead/api/leadvote";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface CandidateListProps {
  list: Array<{ developerId: number; developerName: string; teamName: string }>;
  redirectPath: string;
}

export default function Container({ list, redirectPath }: CandidateListProps) {

  const [selectedCandidate, setSelectedCandidate] = useState<{
    developerId: number;
    developerName: string;
    teamName: string;
  } | null>(null);

  const [introduction, setIntroduction] = useState<string>("");
  const router = useRouter();

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
    setIntroduction("");
  };

  const mutation = useMutation({
    mutationFn: leadvote,
    onSuccess: () => {
      console.log("파트장 투표 성공");
      router.push(redirectPath);
    },
    onError: (error) => {
      console.error("파트장 투표 실패:", error);
    },
  });

  const handleVote = () => {
    if (!selectedCandidate) return;
    mutation.mutate({ memberId: selectedCandidate.developerId });
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
          <Button text='투표하기' variant='voting' onClick={handleVote}/>
          </div>
        </div>
      )}
    </>
  );
}
