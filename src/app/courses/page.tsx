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
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-5 space-y-4">
        <div className="h-6 w-24 bg-gray-200 rounded-full" />
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-full" />
          <div className="h-5 bg-gray-200 rounded w-3/4" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <div className="h-4 bg-gray-200 rounded w-32" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-20" />
        </div>
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
    console.log({ searchQuery, category, topic });
  }, [searchQuery, category, topic]);

  return (
    <>
      {/* Desktop Search - Fixed positioning issues */}
      <div className="hidden md:flex absolute -bottom-20 lg:-bottom-24 xl:-bottom-28 left-1/2 -translate-x-1/2 w-[95%] lg:w-11/12 max-w-[1200px] bg-white px-4 lg:px-6 py-4 lg:py-6 rounded-2xl lg:rounded-4xl shadow-lg z-20 flex-col">
        <p className="my-2 lg:my-2.5 font-bold text-base lg:text-lg text-left">
          What do you want to learn?
        </p>

        <div className="flex gap-2 lg:gap-4 items-center">
          <input
            type="text"
            placeholder="Find courses, skill, software..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#fafafa] p-3 lg:p-4 rounded-xl flex-[3] min-w-0 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="text"
            placeholder="Categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#fafafa] p-3 lg:p-4 rounded-xl flex-1 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-[#fafafa] p-3 lg:p-4 rounded-xl flex-1 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl text-sm lg:text-base whitespace-nowrap hover:bg-blue-700 active:scale-95 transition-all"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="flex flex-col md:hidden w-full bg-white px-4 py-4 shadow-lg z-20">
        <p className="my-2 font-bold text-lg text-center">
          What do you want to learn?
        </p>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Find courses, skill, software..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#fafafa] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#fafafa] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <input
              type="text"
              placeholder="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-[#fafafa] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

SearchSection.displayName = 'SearchSection';

export default function CoursesPage() {
  const { courses, loading } = useCourses();

  const skeletonCount = useMemo(() => {
    if (typeof window === 'undefined') return 8;
    return window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 6 : 8;
  }, []);

  const skeletons = useMemo(
    () => Array.from({ length: skeletonCount }, (_, i) => i),
    [skeletonCount]
  );

  return (
    <div className="w-full inset-0 relative bg-[#f9f8f6]">
      <div className="relative w-full bg-black flex flex-col justify-center">
        <Image
          src="/course-bg.png"
          alt="Courses background"
          width={1200}
          height={300}
          priority
          className="hidden md:block object-contain w-full h-auto"
        />

        <SearchSection />
      </div>

      <Container>
        {/* Added proper spacing for desktop search overlap */}
        <h1 className="mt-8 mb-6 text-2xl sm:text-3xl font-semibold block md:hidden px-4">All Courses</h1>

        {/* Courses Grid with proper spacing */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 md:pt-28 lg:pt-32 xl:pt-36 pb-6 px-4 md:px-0">
          {loading ? (
            skeletons.map((index) => (
              <CourseCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : courses.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-20 text-gray-600">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 text-gray-400"
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
              <p className="text-lg sm:text-xl font-medium">No courses found</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your search criteria</p>
            </div>
          ) : (
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

      {/* Comparison Section */}
      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20 px-4 md:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 my-3 sm:my-5 pb-3 sm:pb-5 text-center">
              How are we different from others?
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 w-full">
              <Image
                src="/courses/Table.png"
                alt="Comparison Table"
                width={800}
                height={400}
                className="w-full h-auto max-w-full sm:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] object-contain"
              />

              <Image
                src="/courses/standing.svg"
                alt="Person Standing"
                width={400}
                height={400}
                className="hidden lg:block w-full h-auto max-w-[300px] xl:max-w-[400px] object-contain flex-shrink-0"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Certificate Section */}
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between rounded-none sm:rounded-3xl px-4 sm:px-6 lg:px-12 xl:px-20 gap-6 sm:gap-8 lg:gap-10 bg-[#f9f8f6] mx-0 sm:mx-4 lg:mx-8">
        <div className="flex-1 text-left space-y-3 sm:space-y-4 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Get signed Certificate on <span className="font-extrabold text-[#097aee]">Completion of Course</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            You will get a signed certificate on successful completion of the course.
            You can add this Certificate to your LinkedIn Profile as well as share it
            in the form of a post so that it can grab HR&apos;s attention.
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <Image
            src="/courses/certificate.png"
            alt="Course Certificate"
            width={600}
            height={450}
            className="object-contain w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]"
          />
        </div>
      </div>

      {/* Workshop Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 px-4 md:px-0">
            <div className="flex-1 space-y-4 sm:space-y-6 w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Level Up with Live Interactive Workshops
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Learn directly from industry experts through hands-on, immersive sessions designed to accelerate your growth.
              </p>

              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span>Get real-time feedback and personalized guidance</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span>Learn practical skills you can apply immediately</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span>Engage with mentors and peers in live Q&A sessions</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                  <Image
                    src="/green_tick.svg"
                    alt="Tick"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span>Build your portfolio through guided projects</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base hover:bg-blue-700 active:scale-95 transition-all">
                  Explore Workshops
                </button>
                <button className="border border-blue-600 text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base hover:bg-blue-50 active:scale-95 transition-all">
                  Join Upcoming Session
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <Image
                src="/courses/workshop.jpg"
                alt="Live Workshop"
                width={600}
                height={400}
                className="w-full max-w-full sm:max-w-[500px] lg:max-w-[600px] h-auto object-contain rounded-xl sm:rounded-2xl"
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