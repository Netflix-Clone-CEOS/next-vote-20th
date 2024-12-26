import Buttons from "@/DemoDay/components/voting/Buttons";
import Container from "@/DemoDay/components/voting/Container";
import React from "react";

export default function page() {
  return (
    <div>
      <p>데모데이 투표</p>
      <Container />
      <div>
        <Buttons />
      </div>
    </div>
  );
}
