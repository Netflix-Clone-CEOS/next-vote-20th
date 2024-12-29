"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function HeaderIsOrNot() {
  const pathname = usePathname();

  return pathname.startsWith("/login") ||
    pathname.startsWith("/signin") ? null : (
    <Header />
  );
}
