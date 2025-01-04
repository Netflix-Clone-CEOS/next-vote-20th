import { pretendardSemi } from "@/styles/font.css";
import { style } from "@vanilla-extract/css";

export const teams = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  gap: "2.6rem",
  borderRadius: "20px",

  width: "38rem",
  height: "14.5rem",

  flexDirection: "column",

  cursor: "pointer",

  transition: "transform 0.3s ease, background-color 0.3s ease",

  selectors: {
    "&:hover": {
      backgroundColor: "#384084",
      transform: "scale(1.05)",
    },
  },
});

export const clicked_teams = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #384084",
  gap: "2.6rem",
  borderRadius: "20px",

  width: "38rem",
  height: "14.5rem",

  flexDirection: "column",

  cursor: "pointer",
  backgroundColor: "#384084",
});

export const teamNameStyle = style({
  fontSize: "4.8rem",
  color: "black",
  fontFamily: pretendardSemi,

  selectors: {
    [`${teams}:hover &`]: {
      color: "#FFFFFF",
    },
    [`${clicked_teams} &`]: {
      color: "#FFFFFF",
    },
  },
});

export const teamSummaryStyle = style({
  fontSize: "2rem",
  color: "black",
  fontFamily: pretendardSemi,

  selectors: {
    [`${teams}:hover &`]: {
      color: "#FFFFFF",
    },
    [`${clicked_teams} &`]: {
      color: "#FFFFFF",
    },
  },
});
