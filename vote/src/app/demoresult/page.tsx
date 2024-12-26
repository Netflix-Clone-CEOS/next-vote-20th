import Button from "@/DemoDay/components/results/Button";
import Results from "@/DemoDay/components/results/Results";
import React from "react";

export default function page() {
  return (
    <div>
      <p>데모데이 투표 결과</p>
      <Results />
      <Button />
    </div>
  );
}
