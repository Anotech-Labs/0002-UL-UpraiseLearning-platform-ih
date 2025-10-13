"use client"

import Image from "next/image";
import Container from "../Container";
import { useEffect, useState } from "react";
import { motion } from "motion/react"

export default function WhyUpraise() {
    const SUBDOMAIN_URL = process.env.NEXT_PUBLIC_SUBDOMAIN_URL ?? "#";
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = Array(9).fill("/reviews/card new.png");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/save-to-sheet", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "tutor",
                    data,
                }),
            });

            if (res.ok) {
                setMessage("✅ Your request has been submitted!");
                form.reset();
            } else {
                setMessage("❌ Failed to submit. Try again.");
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
        <>
            {/* WHY UPRAISE SECTION */}
            <section id="about" className="bg-white md:py-20 cursor-default">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-5xl lg:text-6xl text-gray-900 leading-snug">
                                Why Upraise <br /> Learning Platform?
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Throughout human history, our greatest leaps forward have come from a fundamental truth: learning never stops.
                                From the moment our ancestors discovered fire to the digital revolution transforming our world today, humanity&apos;s defining characteristic has been our relentless pursuit of knowledge and growth.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Upraise Learning understands that today&apos;s tech landscape demands continuous evolution. With skills for the same occupation shifting by 25% between 2015-2021, and 40% of job skills expected to change by 2025, standing still means falling behind. The platform provides developers, engineers, and digital agencies with the tools to not just keep pace, but lead the charge.
                            </p>

                            {/* Features */}
                            <div className="mt-8 grid grid-cols-2 gap-4 text-gray-900 font-medium">
                                <div className="flex items-center gap-2"><Image src="/green_tick.svg" alt="tick" width={20} height={20} /> Comprehensive Tech Curriculum</div>
                                <div className="flex items-center gap-2"><Image src="/green_tick.svg" alt="tick" width={20} height={20} /> 24/7 Flexible Access</div>
                                <div className="flex items-center gap-2"><Image src="/green_tick.svg" alt="tick" width={20} height={20} /> Get Certificate</div>
                                <div className="flex items-center gap-2"><Image src="/green_tick.svg" alt="tick" width={20} height={20} /> Workshops</div>
                            </div>

                            {/* CTA LINK */}
                            <div className="mt-8">
                                <a
                                    href={`${SUBDOMAIN_URL}/register`}
                                    className="bg-[#097aee] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition inline-block"
                                >
                                    Create an Account
                                </a>
                            </div>
                        </div>

                        {/* RIGHT CONTENT (single combined image) */}
                        <motion.div
                            className="flex justify-center lg:justify-end"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/whyUpraise-student.png"
                                alt="Students"
                                width={500}
                                height={600}
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>
            <section className="bg-white text-center relative cursor-default">
                <Container>
                    <div className="my-6 md:my-4">
                        <p className="text-4xl font-bold text-gray-900 mb-4">Don&apos;t believe us? Hear from our students.</p>
                        <p className="py-4 md:py-0 md:pt-4 text-gray-600 leading-relaxed">From beginners to working pros, they&apos;ve all grown with Upraise —
                            now they&apos;re sharing how it changed their journey.</p>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden relative mt-4 md:mt-0">
                        <div
                            className="overflow-hidden"
                            onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
                                const touch = e.touches[0];
                                if (touch) {
                                    e.currentTarget.dataset.touchStart = touch.clientX.toString();
                                }
                            }}
                            onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => {
                                const touch = e.touches[0];
                                if (!touch) return;

                                const touchStart = parseFloat(e.currentTarget.dataset.touchStart ?? '0');
                                const touchCurrent = touch.clientX;
                                const diff = touchStart - touchCurrent;

                                // Optional: Add visual feedback during swipe
                                if (Math.abs(diff) > 10) {
                                    e.currentTarget.style.cursor = 'grabbing';
                                }
                            }}
                            onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => {
                                const touch = e.changedTouches[0];
                                if (!touch) return;

                                const touchStart = parseFloat(e.currentTarget.dataset.touchStart ?? '0');
                                const touchEnd = touch.clientX;
                                const diff = touchStart - touchEnd;
                                const swipeThreshold = 50; // Minimum swipe distance

                                if (Math.abs(diff) > swipeThreshold) {
                                    if (diff > 0) {
                                        // Swiped left - go to next slide
                                        setCurrentSlide((prev) =>
                                            prev === images.length - 1 ? 0 : prev + 1
                                        );
                                    } else {
                                        // Swiped right - go to previous slide
                                        setCurrentSlide((prev) =>
                                            prev === 0 ? images.length - 1 : prev - 1
                                        );
                                    }
                                }

                                e.currentTarget.style.cursor = 'grab';
                                delete e.currentTarget.dataset.touchStart;
                            }}
                            style={{ cursor: 'grab' }}
                        >
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {images.map((src, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <Image
                                            src={`/reviews/card ${index + 1}.png`}
                                            width={420}
                                            height={160}
                                            alt={`Review ${index + 1}`}
                                            className="w-full h-auto border-2 border-gray-300 rounded-3xl object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-4">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-gray-800 w-6' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="relative hidden md:block w-full min-h-[300px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] ">
                        <Image
                            src="/reviews/bento.png"
                            alt="bento"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw"
                            priority
                        />
                    </div>

                </Container>
            </section>

            <section className="bg-[#f9f9f9] pb-0 pt-5 mt-4 md:py-20 relative cursor-default">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-5xl lg:text-7xl font-light text-[#0b2b6a] leading-tight">
                                Hello! <br /> Become Tutor Today
                            </h2>

                            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
                                Join the evolution of tech education and transform your expertise into impact. Scale your impact and income by reaching thousands of students simultaneously without physical classroom limitations.
                            </p>

                            {/* Features */}
                            <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 text-gray-900 font-medium">
                                <div className="flex items-center gap-3">
                                    <Image src="/green_tick.svg" alt="tick" width={22} height={22} />
                                    Global Reach
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/green_tick.svg" alt="tick" width={22} height={22} />
                                    Higher Earnings
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/green_tick.svg" alt="tick" width={22} height={22} />
                                    Meaningful Impact
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/green_tick.svg" alt="tick" width={22} height={22} />
                                    Creative Freedom
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT (FORM) */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* First Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="border border-gray-300 bg-white rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="border border-gray-300 bg-white rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Second Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="border border-gray-300 bg-white rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone No."
                                    className="border border-gray-300 bg-white rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                className="border border-gray-300 bg-white rounded-lg px-5 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#097aee] hover:bg-blue-700 text-white py-4 rounded-lg mb-8 md:mb-0 font-semibold shadow-md transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                            >
                                {loading ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>

                        {/* Message placeholder */}
                        <div className="h-6 mt-3 text-center absolute bottom-1/8 right-1/8">
                            {message && (
                                <p className="text-sm font-medium text-center text-gray-700">{message}</p>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
