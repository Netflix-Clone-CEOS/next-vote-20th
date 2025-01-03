import { style } from "@vanilla-extract/css";

export const result = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexDirection: "column",
  gap: "3rem",
});

export const resultBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: "white",

  borderRadius: "20px",

  width: "30rem",
  height: "8.2rem",

  fontSize: "3rem",

  border: "3px solid #384084",
  backgroundColor: "#384084",

  cursor: "pointer",
});
