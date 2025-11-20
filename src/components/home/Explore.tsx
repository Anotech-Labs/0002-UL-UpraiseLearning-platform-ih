"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Container";
import CourseCard from "../explore/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import type { Category } from "@/types/course";
import * as motion from "motion/react-client";

const categories: Category[] = [
  "Development",
  "Design",
  "Marketing",
  "Business",
  "Accounting",
];

// Skeleton Card Component
const CourseCardSkeleton = () => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
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
};

const Explore = () => {
  const [activeTab, setActiveTab] = useState<Category>("Development");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { courses, loading } = useCourses();

  const scrollLeft = (): void => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (): void => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <Container>
        <>
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Explore Our Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from Industry Experts and Advance Your Career with Practical Skills
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
          >            {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${activeTab === category
                ? "bg-blue-500 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200"
                }`}
            >
              {category}
            </motion.button>
          ))}
          </motion.div>

          {/* Content */}
          <div className="relative">
            {/* Scroll Buttons - Hidden during loading */}
            {!loading && courses.length > 0 && (
              <>
                <motion.button
                  onClick={scrollLeft}
                  className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-300"
                  aria-label="Scroll left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </motion.button>

                <motion.button
                  onClick={scrollRight}
                  className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-300"
                  aria-label="Scroll right"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </motion.button>
              </>
            )}

            {/* Courses / Loading / Empty State */}
            <motion.div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {loading ? (
                // Skeleton Loading State
                <>
                  {Array.from({ length: 4 }, (_, index) => (
                    <motion.div key={index} variants={cardVariants}>
                      <CourseCardSkeleton />
                    </motion.div>
                  ))}
                </>
              ) : courses.length === 0 ? (
                // Empty State
                <div className="w-full text-center py-12">
                  <p className="text-gray-500 text-lg">No courses available.</p>
                </div>
              ) : (
                // Actual Courses
                [...courses].reverse().map((course) => (
                  <motion.div
                    key={course.id}
                    className="flex-shrink-0 w-80"
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <CourseCard
                      course={{
                        ...course,
                        instructor: course.instructor ?? { name: "Unknown", avatar: "" }
                      }}
                    />
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </>
      </Container>
    </section>
  );
};

export default Explore;