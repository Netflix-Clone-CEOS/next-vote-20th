import { style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#384084",
  color: "white",

  borderRadius: "10px",

  fontSize: "2rem",
  width: "20rem",
  height: "6rem",
});

export const buttoncontainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
});
