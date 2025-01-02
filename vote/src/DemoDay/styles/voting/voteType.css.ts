import { style } from "@vanilla-extract/css";
import { pretendardSemi } from "@/styles/font.css";

export const voteType = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  padding: "12.5rem 5.7rem",
  boxSizing: "border-box",
  color: "white",
  borderRadius: "20px",
  width: "40.631rem",
  height: "41.869rem",
  textAlign: "center",
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
  fontSize: "4.95rem",
  color: "#242957",
  fontFamily: pretendardSemi,
  whiteSpace: "pre-line",
  selectors: {
    [`${voteType}:hover &`]: {
      color: "#FFFFFF",
    },
  },
});
