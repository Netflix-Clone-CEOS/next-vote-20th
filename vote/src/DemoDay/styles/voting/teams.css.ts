import { style } from "@vanilla-extract/css";

export const teams = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  color: "white",
  gap: "2.6rem",
  borderRadius: "20px",

  width: "38rem",
  height: "14.5rem",

  flexDirection: "column",
});

export const teamNameStyle = style({
  fontSize: "4.8rem",
  color: "black",
});

export const teamSummaryStyle = style({
  fontSize: "2rem",
  color: "black",
});
