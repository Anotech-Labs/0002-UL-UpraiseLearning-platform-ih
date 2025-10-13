// src/app/courses/page.tsx
"use client";

import { useState, useMemo, useCallback, memo } from "react";
import Container from "@/components/Container";
import CourseCard from "@/components/explore/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import Image from "next/image";

// Memoized Skeleton Card Component
const CourseCardSkeleton = memo(() => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Category Badge */}
        <div className="h-6 w-24 bg-gray-200 rounded-full" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-full" />
          <div className="h-5 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <div className="h-4 bg-gray-200 rounded w-32" />
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-20" />
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-7 bg-gray-200 rounded w-20" />
          <div className="h-10 bg-gray-200 rounded w-28" />
        </div>
      </div>
    </div>
  );
});

CourseCardSkeleton.displayName = 'CourseCardSkeleton';

// Memoized Search Section Component
const SearchSection = memo(() => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    console.log({ searchQuery, category, topic });
  }, [searchQuery, category, topic]);

  return (
    <>
      {/* Desktop Search */}
      <div className="hidden md:flex absolute -bottom-28 left-1/2 -translate-x-1/2 w-11/12 max-w-[1200px] bg-white px-6 py-6 rounded-4xl shadow-lg z-20 flex-col">
        <p className="my-2.5 font-bold text-lg text-left">
          What do you want to learn?
        </p>

        <form onSubmit={handleSubmit} className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Find courses, skill, software, etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#fafafa] p-4 rounded-xl flex-[3] min-w-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="text"
            placeholder="Categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#fafafa] p-4 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-[#fafafa] p-4 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl whitespace-nowrap hover:bg-blue-700 active:scale-95 transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Mobile Search */}
      <div className="flex flex-col md:hidden max-w-[1200px] bg-white px-6 py-4 shadow-lg z-20">
        <p className="my-2.5 font-bold text-lg text-center">
          What do you want to learn?
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Find courses, skill, software, etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#fafafa] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#fafafa] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <input
              type="text"
              placeholder="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-[#fafafa] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
});

SearchSection.displayName = 'SearchSection';

export default function CoursesPage() {
  const { courses, loading } = useCourses();

  // Responsive skeleton count based on viewport
  const skeletonCount = useMemo(() => {
    if (typeof window === 'undefined') return 8;
    return window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 6 : 8;
  }, []);

  // Memoized skeleton array
  const skeletons = useMemo(
    () => Array.from({ length: skeletonCount }, (_, i) => i),
    [skeletonCount]
  );

  return (
    <div className="w-full inset-0 relative bg-[#f9f8f6]">
      <div className="relative w-full bg-black flex flex-col justify-center">
        {/* Image (hidden on small screens) */}
        <Image
          src="/course-bg.png"
          alt="Courses background"
          width={1200}
          height={300}
          priority
          className="hidden md:block object-contain w-full h-auto"
        />

        {/* Search Section */}
        <SearchSection />
      </div>

      <Container>
        <h1 className="my-8 text-3xl font-semibold block md:hidden">All Courses</h1>

        {/* Courses Grid with Loading State */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pt-46 pb-6">
          {loading ? (
            // Show skeleton cards while loading
            skeletons.map((index) => (
              <CourseCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : courses.length === 0 ? (
            // Empty state
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-600">
              <svg
                className="w-20 h-20 mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl font-medium">No courses found</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your search criteria</p>
            </div>
          ) : (
            // Actual courses with fade-in animation
            courses.map((course, index) => (
              <div
                key={course.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CourseCard
                  course={{
                    ...course,
                    instructor: course.instructor ?? {
                      name: "Unknown Instructor",
                      avatar: "/default-avatar.png",
                    },
                  }}
                />
              </div>
            ))
          )}
        </div>
      </Container>
      <section className="bg-white">
        <Container>
          <div className="py-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 my-5 pb-5 text-center">How are we different from others?</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-full">
              {/* Left Image */}
              <Image
                src="/courses/Table.png"
                alt="Comparison Table"
                width={800}
                height={400}
                className="w-full h-auto max-w-[400px] sm:max-w-[700px] md:max-w-[800px] object-contain"
              />

              {/* Right Image */}
              <Image
                src="/courses/standing.svg"
                alt="Person Standing"
                width={800}
                height={400}
                className="hidden md:block w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[400px] object-contain"
              />

            </div>
          </div>
          {/* Certificate Section */}

        </Container>

      </section>
      <div className="py-20  flex flex-col md:flex-row items-center justify-between rounded-3xl px-5 md:p-25 gap-5 bg-[#f9f8f6]">
        {/* Text Content */}
        <div className="flex-1 text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Get signed Certificate on <span className="font-extrabold text-[#097aee]">Completion of Course</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify md:text-left">
            You will get a signed certificate on successful completion of the course.
            You can add this Certificate to your LinkedIn Profile as well as share it
            in the form of a post so that it can grab HR&apos;s attention.
          </p>
        </div>

        {/* Certificate Image */}
        <div className="flex-1 md:mt-0 flex justify-center md:justify-end w-full">
          <Image
            src="/courses/certificate.png" // <-- Replace with your actual certificate image path
            alt="Course Certificate"
            width={600}
            height={450}
            className="object-contain w-full max-w-[600px] md:max-w-[600px] "
          />
        </div>
      </div>
      <section className="bg-white py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Text */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Level Up with Live Interactive Workshops
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Learn directly from industry experts through hands-on, immersive sessions designed to accelerate your growth.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <Image
                    src="/green_tick.svg" // <-- your green tick SVG path
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  Get real-time feedback and personalized guidance
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  Learn practical skills you can apply immediately
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  Engage with mentors and peers in live Q&A sessions
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  Build your portfolio through guided projects
                </li>
              </ul>


              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all">
                  Explore Workshops
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-50 active:scale-95 transition-all">
                  Join Upcoming Session
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <Image
                src="/courses/workshop.jpg" // replace with your actual image path
                alt="Live Workshop"
                width={600}
                height={400}
                className="w-full max-w-[600px] h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </section>



      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}