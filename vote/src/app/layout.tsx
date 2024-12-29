import type { Metadata } from "next";
import Providers from "./Providers";
import "../styles/global.css";
import HeaderIsOrNot from "@/utils/HeaderIsOrNot";

export const metadata: Metadata = {
  title: "안뇽안뇽뇽",
  description: "나는 안녕하지 못하다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <HeaderIsOrNot />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
