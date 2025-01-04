import { style } from "@vanilla-extract/css";
import { pretendardSemi } from "@/styles/font.css";

export const candidate = style({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  border: "3px solid #384084",
  padding: "0rem 2rem",
  boxSizing: "border-box",

  width: "50rem",
  height: "8.5rem",
  strokeWidth: "0.3rem",
  color: "black",
  gap: "3rem",
  borderRadius: "20px",
  fontFamily: pretendardSemi,
});

export const rank = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#384084",
  color: "white",

  width: "8.5rem",
  height: "5.8rem",

  borderRadius: "10px",

  fontSize: "3rem",
});

export const candidateName = style({
  fontSize: "4rem",
  width: "15rem",
  textAlign: "left",
});

export const teamName = style({
  fontSize: "2rem",
  width: "15rem",
  textAlign: "center",
});

export const voted = style({
  fontSize: "4rem",
  color: "#384084",
});
