"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [pathname]);

  return <>{children}</>;
}
