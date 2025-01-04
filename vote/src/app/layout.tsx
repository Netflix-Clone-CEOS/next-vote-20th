import type { Metadata } from "next";
import Providers from "./Providers";
import "../styles/global.css";
import HeaderIsOrNot from "@/utils/HeaderIsOrNot";

export const metadata: Metadata = {
  title: "CEOS 투표 서비스",
  description: "엔브가 만들었어용!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <HeaderIsOrNot />
          {children}
        </Providers>
      </body>
    </html>
  );
}
