import "@/styles/globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import { SplashScreenProvider } from "@/components/SplashScreen";
import Script from "next/script";
import AnalyticsListener from "@/components/AnalyticsListener";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: "UpRaise Learning | Elevate Your Knowledge & Career",
    template: "%s | UpRaise Learning",
  },
  description:
    "UpRaise Learning empowers learners with expert-led online courses, skill development, and career growth programs designed for future-ready professionals.",
  keywords: [
    "UpRaise Learning",
    "online courses",
    "career development",
    "learning platform",
    "professional training",
    "skill development",
  ],
  authors: [{ name: "UpRaise Learning", url: "https://www.upraiselearning.com" }],
  metadataBase: new URL("https://www.upraiselearning.com"),
  openGraph: {
    title: "UpRaise Learning | Elevate Your Knowledge & Career",
    description:
      "Join UpRaise Learning to unlock your full potential through expert-led online courses and professional training programs.",
    url: "https://www.upraiselearning.com",
    siteName: "UpRaise Learning",
    images: [
      {
        url: "https://www.upraiselearning.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UpRaise Learning - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UpRaise Learning | Elevate Your Knowledge & Career",
    description:
      "Expert-led online courses to accelerate your career growth. Start learning today with UpRaise Learning.",
    images: ["https://www.upraiselearning.com/og-image.jpg"],
    creator: "@upraiselearning",
  },
  alternates: {
    canonical: "https://www.upraiselearning.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <AnalyticsListener />
        <Analytics />
        <SplashScreenProvider>
          <Navbar />
          <div className="w-full">
            {children}
          </div>
          <Footer />
        </SplashScreenProvider>
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EN9ZJ8C4T0"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EN9ZJ8C4T0');
        `}
      </Script>
      {/* ✅ Organization Structured Data */}
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "upraiselearning",
          url: "https://www.upraiselearning.com",
          logo: "https://www.upraiselearning.com/_next/image?url=%2FUpRaise%20Logo.png&w=256&q=75",
          alternateName: "upraiselearning",
          sameAs: [
            "https://www.instagram.com/upraise_learning?igsh=MW9mMWo2NzJ5ajkwbQ==",
            "https://www.facebook.com/share/16DQze1ke8/",
            "https://youtube.com/@upraiselearning?si=P4v8of05jl01YjKx",
            "https://www.linkedin.com/company/upraise-learning/",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "7029934287",
              contactType: "",
              email: "info@upraiselearning.com",
              availableLanguage: "en",
            },
            {
              "@type": "ContactPoint",
              telephone: "",
              contactType: "",
            },
          ],
        })}
      </Script>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "UpRaise Learning",
          url: "https://www.upraiselearning.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.upraiselearning.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </html>
  );
}