import { pretendardSemi } from "@/styles/font.css";
import { style } from "@vanilla-extract/css";

export const pagelayout = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexDirection: "column",

  gap: "3rem",

  backgroundColor: "#384084",

  height: "100vh",

  color: "white",
  fontSize: "5rem",
  fontFamily: pretendardSemi,
});
