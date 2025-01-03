import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  flexWrap: "wrap",

  gap: "2.7rem",
});

export const team_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",

  gap: "3rem",

  width: "70%",
});

export const voteTypeContainerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexWrap: "wrap",

  gap: "16.5rem",
});

export const voteTypeWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  flexWrap: "wrap",

  gap: "4.44rem",
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

  gap: "2rem",
});
