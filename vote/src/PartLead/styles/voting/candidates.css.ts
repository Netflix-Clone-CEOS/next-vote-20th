import { pretendardSemi } from "@/styles/font.css";
import { style } from "@vanilla-extract/css";

export const candidates = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  color: "white",
  borderRadius: "20px",

  width: "30rem",
  height: "15rem",
  padding: "1.25rem 4.3rem",
  boxSizing: "border-box",

  flexDirection: "column",
  cursor: "pointer",
});

export const nameStyle = style({
  fontSize: "4.8rem",
  color: "black",
  fontFamily: pretendardSemi,
});

export const teamNameStyle = style({
  fontSize: "2rem",
  color: "black",
});
