"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Container from "../Container";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

type Instructor = {
    name: string;
    role: string;
    rating: number;
    reviews: string;
    image: string;
    isNew?: boolean;
};

const instructors = [
    {
        name: "Mr. Shivam Kumar",
        role: "Training & Development Manager (Sales)",
        rating: 4.9,
        reviews: "2.14k",
        image: "/instructors/shivamSir.png",
    },
    {
        name: "Ms. Twinkle Khurana",
        role: "Senior Marketing Consultant & Trainer",
        rating: 4.9,
        reviews: "2.14k",
        image: "/instructors/twinlekMam.png",
    },
    {
        name: "Ms. Mondira Chanda",
        role: "Frontend Community Mentor",
        rating: 4.7,
        reviews: "1.12k",
        image: "/instructors/mondira.png",
        isNew: true,
    },
    {
        name: "Mr. Sayandeep Paul",
        role: "Technical Coach - Full Stack Engineering",
        rating: 4.8,
        reviews: "1.25k",
        image: "/instructors/sayandeep.png",
    },
    {
        name: "Mr. Hrithik Gupta",
        role: "Javascript Framework Specialist",
        rating: 4.8,
        reviews: "1.17k",
        image: "/instructors/hrithik.png",
    },
    {
        name: "Mr. Subham Kumar",
        role: "Corporate Sales Instructor",
        rating: 4.8,
        reviews: "1.25k",
        image: "/instructors/subhamSir.png",
    },
];

function InstructorCard({
    name,
    role,
    rating,
    reviews,
    image,
    isNew
}: Instructor) {
    return (
        <div className="min-w-[260px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] bg-white px-4 pt-10 pb-6 flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="relative w-24 h-24 mb-6">
                <Image
                    src={image}
                    alt={name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                />
                {isNew && (
                    <span className="absolute -top-2 -right-2 bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-md">
                        NEW
                    </span>
                )}
            </div>

            {/* Info */}
            <h3 className="font-bold text-lg text-gray-800">{name}</h3>
            <p className="text-gray-600 mt-1">{role}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3 text-sm text-gray-700">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{rating}</span>
                <span className="text-gray-500">({reviews} Reviews)</span>
            </div>

            {/* Button with Cal.com data attributes */}
            <button
                data-cal-namespace="30min"
                data-cal-link="internal-development-il79br/30min"
                data-cal-config='{"layout":"month_view"}'
                className="mt-6 md:mt-14 px-4 py-2 w-full bg-gray-100 hover:bg-[#097aee] text-gray-800 hover:text-white rounded-full font-medium transition-colors"
            >
                Meet Your Mentor
            </button>
        </div>
    );
}

export default function MeetInstructors() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadCal = async () => {
            try {
                const cal = await getCalApi({ namespace: "30min" });
                cal("ui", {
                    cssVarsPerTheme: {
                        light: { "cal-brand": "#097aee" },
                        dark: { "cal-brand": "#097aee" },
                    },
                    hideEventTypeDetails: false,
                    layout: "month_view",
                });
            } catch (error) {
                console.error("Failed to load Cal API:", error);
            }
        };

        void loadCal(); // ✅ Clean, safe, and compliant
    }, []);

    const scroll = (dir: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth - 100;
            scrollRef.current.scrollTo({
                left: dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-[#fdfdfd] pb-16 pt-6 relative">
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Meet Our Instructors
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg">
                        Connect with Experienced Professionals Who Are Passionate About Teaching
                    </p>
                </div>

                {/* Scrollable Cards inside container */}
                <div
                    ref={scrollRef}
                    className="mt-0 md:mt-12 py-2 flex gap-6 md:ml-0 overflow-x-auto no-scrollbar scroll-smooth px-8 md:px-0"
                >
                    {instructors.map((inst, i) => (
                        <InstructorCard key={i} {...inst} />
                    ))}
                </div>
            </Container>

            {/* Arrows outside container */}
            {instructors.length > 4 && (
                <>
                    <button
                        onClick={() => scroll("left")}
                        className="absolute hidden md:block left-18 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full p-2"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute hidden md:block right-18 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full p-2"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}
        </section>
    );
}