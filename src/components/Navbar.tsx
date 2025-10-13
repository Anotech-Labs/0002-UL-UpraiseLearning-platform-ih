"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"
import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const SUBDOMAIN_URL = process.env.NEXT_PUBLIC_SUBDOMAIN_URL ?? "#";

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    // replaced Pages → Pricing
    { href: "/about-us", label: "About" },
    { href: "/blogs", label: "Blogs" },
  ];

  // 🔹 Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // 🔹 Smooth scroll handler for in-page anchors
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 left-0 justify-between bg-black text-white z-30">
      <div className="flex items-center justify-between w-full px-4 py-3 sm:px-6 lg:px-16 xl:px-24 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center w-28 md:w-44 lg:w-52">
          <Image
            src="/UpRaise Logo.png"
            alt="UpRaise Logo"
            width={208}
            height={60}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>

        {/* Links - Desktop */}
        <div className="w-full hidden md:flex ml-4 md:ml-10 lg:ml-16 gap-x-2.5 md:gap-x-6 bg-black text-white z-50 shadow-md">
          {links.map(({ href, label }) =>
            href.startsWith("#") ? (
              <a
                key={href}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="text-gray-400 hover:text-gray-200"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`${pathname === href
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`${SUBDOMAIN_URL}/register`}
            className="px-4 py-3 rounded-full border whitespace-nowrap border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            Join for free
          </a>
          <a
            href={SUBDOMAIN_URL + "/login"}
            className="px-4 py-3 rounded-full whitespace-nowrap bg-[#097aee] hover:bg-blue-700 text-white transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-3 top-14 w-56 rounded-2xl border border-gray-700 bg-black/95 backdrop-blur-lg shadow-lg text-white flex flex-col p-5 space-y-4 md:hidden"
          >
            {links.map(({ href, label }) =>
              href.startsWith("#") ? (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className="px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors duration-200 ${pathname === href
                      ? "bg-[#097aee] text-white font-semibold"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {label}
                </Link>
              )
            )}

            <div className="border-t border-gray-700 pt-4 flex flex-col space-y-3">
              <a
                href={`${SUBDOMAIN_URL}/register`}
                className="px-4 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white flex items-center justify-center transition duration-200"
              >
                Join for free
              </a>
              <a
                href={SUBDOMAIN_URL + "/login"}
                className="px-4 py-2 rounded-full whitespace-nowrap bg-[#097aee] hover:bg-blue-700 text-white transition flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Sign In
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
