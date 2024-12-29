import { style } from "@vanilla-extract/css";

export const inputStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "65rem",
  height: "6.5rem",
  paddingLeft: "2rem",
  borderRadius: "20px",
  boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",

  color: "black",
  fontSize: "3rem",

  border: "2px solid #242957",

  "::placeholder": {
    color: "gray",
    fontSize: "3rem",
  },
});
