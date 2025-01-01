import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2.7rem",
});

export const candidateContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2.7rem",
  width: "80%",
});

export const voteTypeContainerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16.5rem",
});

export const voteTypeWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "4.44rem",
});

export const pageStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "10rem",
});

export const buttonContainerstyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60rem",
  height: "fit-content",
  gap: "0.2rem",
});

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(56, 64, 132, 0.72)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
  backgroundColor: "white",
  padding: "5rem",
  borderRadius: "20px",
  border: "3px solid #384084",
  maxWidth: "40.625rem",
  // height: "70rem",
  width: "100%",
  zIndex: 1010,
});
