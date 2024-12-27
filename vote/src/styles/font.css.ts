import { fontFace, style } from "@vanilla-extract/css";

export const pretendardSemi = fontFace([
  {
    fontWeight: 600,
    src: "url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-SemiBold.woff') format('woff')",
  },
]);

export const pretendardSemiBold = style({
  fontFamily: pretendardSemi,
});
