import type { Metadata } from "next";
import Providers from "./Providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
