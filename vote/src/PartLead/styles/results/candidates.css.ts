import { style } from "@vanilla-extract/css";

export const teams = style({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  border: "3px solid #384084",

  width: "50rem",
  height: "8.5rem",
  strokeWidth: "0.3rem",
  color: "black",
  gap: "3rem",
  borderRadius: "20px",
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

export const teamname = style({
  fontSize: "4rem",
});

export const teamsummary = style({
  fontSize: "2rem",
});

export const voted = style({
  fontSize: "4rem",
  color: "#384084",
});
