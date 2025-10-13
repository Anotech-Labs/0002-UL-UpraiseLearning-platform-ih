"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const sidebarLinks = [
    // { label: "Terms and conditions", href: "/terms" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-services" },
    { label: "Cookies Policy", href: "/cookies-policy" },
    { label: "User Guidelines", href: "/user-guidelines" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];


  

  return (
    <aside className="w-full md:w-1/4 border-r border-gray-200 md:sticky md:top-24 h-fit">
      <ul className="space-y-3">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`block text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
