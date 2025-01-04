import { pretendardSemi } from "@/styles/font.css";
import { style } from "@vanilla-extract/css";

export const candidates = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  color: "white",
  borderRadius: "20px",

  width: "30rem",
  height: "15rem",
  padding: "1.25rem 4.3rem",
  boxSizing: "border-box",

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

export const nameStyle = style({
  fontSize: "4.8rem",
  color: "black",
  fontFamily: pretendardSemi,

  selectors: {
      [`${candidates}:hover &`]: {
        color: "#FFFFFF",
      },
  },
});

export const teamNameStyle = style({
  fontSize: "2rem",
  color: "black",
  fontFamily: pretendardSemi,
  selectors: {
    [`${candidates}:hover &`]: {
      color: "#FFFFFF",
    },
  },
});
