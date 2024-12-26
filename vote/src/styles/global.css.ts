import { globalStyle } from "@vanilla-extract/css";

import "./layers.css";
import "./reset.css";

globalStyle("html, body", {
  width: "100vw",
  height: "100vh",
  margin: 0,

  fontSize: "62.5%",
});
