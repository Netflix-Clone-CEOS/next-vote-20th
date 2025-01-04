import { style, styleVariants } from "@vanilla-extract/css";

export const headerBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "12rem",
  height: "4rem",

  borderRadius: "20px",
});

export const buttonVariants = styleVariants({
  login: {
    border: "1.5px solid #384084",
    color: "#384084",
    backgroundColor: "white",
    fontSize: "1.8rem",
  },
  signin: {
    backgroundColor: "#384084",
    color: "white",
    border: "1.5px solid white",
    fontSize: "1.8rem",
  },
});

export const buttons = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "2rem",

  width: "fit-content",
});
