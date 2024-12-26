import { style, styleVariants } from "@vanilla-extract/css";

export const headerBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "10rem",
  height: "4rem",

  borderRadius: "20px",
});

export const buttonVariants = styleVariants({
  login: {
    border: "1px solid #384084",
    color: "#384084",
    backgroundColor: "white",
  },
  signin: {
    backgroundColor: "#384084",
    color: "white",
    border: "1px solid white",
  },
});
