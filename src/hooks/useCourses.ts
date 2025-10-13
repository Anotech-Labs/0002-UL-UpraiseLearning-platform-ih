"use client";

import type { Course, Instructor } from "@/types/course";
import type { UseCoursesOptions, UseCoursesResult } from "@/types/useCourses";
import { useEffect, useState } from "react";
import axios from "axios";

// --- API Types ---
interface FermionProduct {
  fermionDigitalProductId: string;
  name: string;
  slug: string;
  tags?: string[];
  link: string;
  thumbnailUrl: string;
}

interface FermionApiResponse {
  output: { data: { products: FermionProduct[] } };
}

type FermionCourseMeta = {
  fermionCourseId: string;
  courseName: string;
  courseSlug: string;
  courseLink: string;
  thumbnailUrl: string;
  createdAt: string;
  lastUpdatedAt: string;
  ratingOutOf10: number;
  instructors: {
    name: string;
    profilePhotoUrl: string;
    longDescriptionMarkdown: string;
    tagline: string;
  }[];
};

interface FermionCoursesApiResponse {
  output: { status: string; data: { courses: FermionCourseMeta[] } };
}

type CoursePrice = {
  planType: string;
  fermionDigitalProductPriceId: string;
  originalPriceExclusiveOfDiscountAndTaxInLowestCurrencyUnit: number;
  discountComponentValueInLowestCurrencyUnit: number;
  currencySymbol: string;
  currencyType: string;
  inrGstSpecificData: unknown;
  couponData: unknown;
};

interface CoursePriceResponse {
  output: { status: string; data: { prices: CoursePrice[] } };
}

export function useCourses<T extends boolean = false>(
  options: UseCoursesOptions & { categorize?: T } = {}
): UseCoursesResult<T> {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async (): Promise<void> => {
      try {
        // --- Products ---
        const res1 = await axios.post<FermionApiResponse[]>(
          "https://backend.codedamn.com/api/public/get-all-products-internal",
          {
            data: [
              {
                data: {
                  filterByStatus: ["Active"],
                  filterByType: ["FermionCourse"],
                  productTagsSearchFilter: [],
                },
              },
            ],
          },
          {
            headers: {
              "FERMION-API-KEY":
                process.env.NEXT_PUBLIC_FERMION_API_KEY ?? "",
              "Content-Type": "application/json",
            },
          }
        );
        const apiProducts = res1.data[0]?.output?.data?.products ?? [];

        // --- Courses Meta ---
        const res2 = await axios.post<FermionCoursesApiResponse[]>(
          "https://backend.codedamn.com/api/public/get-all-courses",
          {
            data: [
              {
                data: {
                  fermionSchoolId: process.env.NEXT_PUBLIC_FERMION_SCHOOL_ID,
                },
              },
            ],
          },
          { headers: { "Content-Type": "application/json" } }
        );
        const apiCoursesMeta: FermionCourseMeta[] =
          res2.data[0]?.output?.data?.courses ?? [];

        // --- Transform courses ---
        let transformedCourses: Course[] = apiProducts.map((p) => {
          const meta = apiCoursesMeta.find((m) => m.courseSlug === p.slug);

          const instructors: Instructor[] =
            meta?.instructors
              ?.filter((inst) => inst?.name?.trim())
              .map((inst) => ({
                name: inst.name.trim(),
                avatar:
                  inst.profilePhotoUrl ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
                tagline: inst.tagline || "",
                longDescriptionMarkdown: inst.longDescriptionMarkdown || "",
              })) ?? [];

          return {
            id: meta?.fermionCourseId ?? p.fermionDigitalProductId ?? p.slug,
            title: meta?.courseName ?? p.name,
            technology: "General",
            lectures: 20,
            level: "Beginner",
            price: 0, // will fill below
            rating: meta?.ratingOutOf10 && meta.ratingOutOf10 > 0 ? meta.ratingOutOf10 : 4.8,
            reviews: "1.2k",
            instructor:
              instructors[0] ?? {
                name: "Upraise Instructor",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
                tagline: "Expert Instructor",
              },
            instructors,
            link: meta?.courseLink ?? p.link,
            courseLink: meta?.courseLink,
            thumbnail: meta?.thumbnailUrl ?? p.thumbnailUrl,
            courseSlug: meta?.courseSlug ?? p.slug,
            createdAt: meta?.createdAt,
            updatedAt: meta?.lastUpdatedAt,
          };
        });

        // Deduplicate
        const courseMap = new Map<string, Course>();
        transformedCourses.forEach((c) => {
          if (!courseMap.has(c.id)) courseMap.set(c.id, c);
        });
        transformedCourses = Array.from(courseMap.values());

        // --- Fetch price individually per course ---
        await Promise.allSettled(
          transformedCourses.map(async (c) => {
            try {
              const res = await axios.post<CoursePriceResponse[]>(
                "https://backend.codedamn.com/api/public/get-course-price",
                {
                  data: [
                    {
                      data: {
                        fermionCourseId: c.id,
                        fermionSchoolId: process.env.NEXT_PUBLIC_FERMION_SCHOOL_ID,
                        discountCouponCode: null,
                      },
                    },
                  ],
                },
                { headers: { "Content-Type": "application/json" } }
              );
              const priceData = res.data[0]?.output?.data?.prices?.[0];
              if (priceData) {
                c.price = priceData.originalPriceExclusiveOfDiscountAndTaxInLowestCurrencyUnit / 100;
              }
            } catch (err) {
              console.warn(`Failed to fetch price for course ${c.title}`, err);
            }
          })
        );

        setCourses(transformedCourses);
        // console.log("🎯 Courses with instructors, ratings & prices:", transformedCourses);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    void fetchCourses();
  }, []);

  return { courses, loading } as UseCoursesResult<T>;
}