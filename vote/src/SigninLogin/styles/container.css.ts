import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flexDirection: "column",

  gap: "3rem",

  width: "78rem",

  backgroundColor: "white",

  borderRadius: "20px",
  padding: "10rem",
});
