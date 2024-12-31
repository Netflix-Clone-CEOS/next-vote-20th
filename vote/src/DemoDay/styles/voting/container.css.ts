import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexWrap: "wrap",

  gap: "2.7rem",
});

export const voteTypeContainerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexWrap: "wrap",

  gap: "10rem",
});

export const pageStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexDirection: "column",

  gap: "10rem",
});

export const buttonContainerstyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "60rem",
  height: "fit-content",

  gap: "0.2rem",
});
