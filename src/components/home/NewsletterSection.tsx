// src/components/home/NewsletterSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../Container";

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/save-to-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          data: { email },
        }),
      });

      if (res.ok) {
        setMessage("✅ Thanks for subscribing!");
        form.reset();
      } else {
        setMessage("❌ Subscription failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  // auto-hide message after 3s
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="bg-[#097aee] py-26 relative cursor-default">
      <Image
        className="absolute hidden md:block top-1/4 z-0"
        src="/newsletter_bg.png"
        alt="/"
        height={300}
        width={300}
      />
      <Container>
        <div className="text-center text-white max-w-2xl mx-auto relative z-2">
          <h2 className="text-4xl font-semibold mb-3">
            Join Thousand Of Happy Students!
          </h2>
          <p className="mb-8 text-blue-100">
            Subscribe our newsletter &amp; get latest news and updates!
          </p>

          {/* Form */}
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex items-center relative bg-white rounded-full px-1 md:px-2 py-3 md:py-3 mt-1.5 shadow-md"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="flex-1 px-2 md:px-4 py-1 md:py-2 text-gray-700 rounded-l-full focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-2 py-3 md:px-6 md:py-4 right-2 absolute md:relative text-sm md:text-base bg-gray-900 text-white rounded-full whitespace-nowrap hover:bg-gray-800 transition disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Submitting..." : "Get Started"}
            </button>
          </form>

          {/* Message placeholder (fixed height to avoid layout shift) */}
          <div className="h-6 mt-3">
            {message && (
              <p className="text-sm font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
