// src/app/page.tsx
import WhyUpraise from "@/components/home/WhyUpraise";
import DiscoverCategories from "@/components/home/DiscoverCategories";
import MeetInstructors from "@/components/home/MeetInstructors";
import Hero from "@/components/home/Hero";
import Explore from "@/components/home/Explore";
import PricingSection from "@/components/home/PricingSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Explore />
        <DiscoverCategories />
        <MeetInstructors/>
        <WhyUpraise />
        <NewsletterSection/>
        <PricingSection/>
        {/* other sections will follow */}
      </main>
    </>
  );
}
