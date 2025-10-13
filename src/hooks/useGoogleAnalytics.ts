import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function useGoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-EN9ZJ8C4T0", {
        page_path: pathname,
      });
    }
  }, [pathname]);
}

