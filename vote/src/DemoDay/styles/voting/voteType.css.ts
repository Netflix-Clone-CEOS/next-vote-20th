import { style } from "@vanilla-extract/css";
import { pretendardSemi } from "@/styles/font.css";

export const voteType = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  padding: "7.62rem 3.5rem",
  boxSizing: "border-box",
  color: "white",
  borderRadius: "20px",
  width: "24.625rem",
  height: "25.375rem",
  textAlign: "center",
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.3s ease, background-color 0.3s ease",

  selectors: {
    '&:hover': {
      backgroundColor: "#384084",
      transform: "scale(1.05)",
    },
  },
});

export const titleStyle = style({
  fontSize: "3rem",
  color: "#242957",
  fontFamily: pretendardSemi,
  selectors: {
    [`${voteType}:hover &`]: {
      color: "#FFFFFF",
    },
  },
});
