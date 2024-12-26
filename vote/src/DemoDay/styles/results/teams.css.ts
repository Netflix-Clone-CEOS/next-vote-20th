import { style } from "@vanilla-extract/css";

export const teams = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  stroke: "#384084",

  width: "88rem",
  height: "8.5rem",
  strokeWidth: "0.3rem",
  color: "white",
  gap: "3rem",
  borderRadius: "20px",
});

export const rank = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#384084",
  color: "white",
});
