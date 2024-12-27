import { style, styleVariants } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: "white",

  borderRadius: "20px",

  width: "30rem",
  height: "8.2rem",

  fontSize: "3rem",
});

export const buttonVariants = styleVariants({
  vote: {
    backgroundColor: "#384084",
  },
  result: {
    backgroundColor: "rgba(56,64,132,0.5)",
  },
});
