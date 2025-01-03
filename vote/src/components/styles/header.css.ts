import { pretendardSemiBold } from "@/styles/font.css";
import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
});

export const logined_haeder = style({
  display: "flex",
  fontSize: "2rem",
});

export const logout_btn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "11rem",
  height: "4.4rem",

  color: "#384084",

  cursor: "pointer",

  fontSize: "1.5rem",
  border: "2px solid #384084",
  borderRadius: "20px",
});

export const logined_container = style([
  pretendardSemiBold,
  {
    display: "flex",
    alignItems: "center",
    width: "35rem",
    height: "4.4rem",

    gap: "2rem",
  },
]);
