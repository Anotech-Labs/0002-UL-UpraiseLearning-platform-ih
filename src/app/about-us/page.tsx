"use client";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Image from "next/image";

export default function AboutUsPage() {

    const slides = [
        {
            name: "Shivam Kumar",
            role: "Founder - Upraise Learning, Anotech India Solutions, Ex-Byjus, Ex-Unacademy",
            img: "/shivam.png",
            desc: `Shivam Kumar is a Software Engineer and YouTuber, widely recognized for his expertise in coding, technology, and software development. He has built a strong presence among students and professionals across various social media platforms, with his YouTube and LinkedIn profiles collectively reaching nearly one million followers. Over the years, Shivam has mentored and guided more than 500,000 learners in mastering programming and career growth. He holds a B.Tech degree in Computer Science and Engineering from BC Roy College and has previously worked with Unacademy and BYJU’S.`,
        },
        {
            name: "Subham Kumar",
            role: "CEO, Co-Founder",
            img: "/subham.png",
            desc: `Subham Kumar is a passionate Software Engineer and entrepreneur, widely recognized for his expertise in coding, technology, and software development. He has built a strong reputation among students and professionals across multiple social platforms, sharing insights on programming, innovation, and career growth. As the Founder of Upraise, he has guided and mentored thousands of learners, helping them become confident and skilled developers. Subham holds a B.Tech in Information Technology from Asansol Engineering College and continues to inspire the next generation of tech professionals.`,
        },
    ];

    const [current, setCurrent] = useState(1); // start at first real slide
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, 5000); // every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // When reaching the cloned first slide (end)
        if (current === slides.length + 1) {
            // Wait for the transition to finish
            setTimeout(() => {
                // Disable transition, instantly jump to real first slide
                setIsTransitioning(false);
                setCurrent(1);

                // Force browser reflow before re-enabling transition
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsTransitioning(true);
                    });
                });
            }, 700); // matches transition duration
        }
    }, [current, slides.length]);

    return (
        <div className="w-full py-5 relative bg-[#f9f8f6]">
            <Container>
                {/* ---------- Existing About Sections ---------- */}
                <section className="w-11/12 mx-auto flex flex-col items-center gap-8 md:gap-12 ">
                    {/* ---------- Top About Section ---------- */}
                    <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-8">
                        {/* Left heading area */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl relative font-bold mt-3 leading-tight grow w-full md:w-1/2 text-center md:text-left">
                            <p className="uppercase text-xs sm:text-sm font-medium tracking-widest text-gray-500 mb-2">
                                About Us
                            </p>
                            <div className="bg-[#f9f8f6] py-0 sm:py-8 px-6 sm:px-10 md:px-12 inline-block md:absolute md:top-8 md:left-16 z-10">
                                We are a team of <br className="hidden sm:block" />
                                content writers who <br className="hidden sm:block" />
                                share their learnings
                            </div>
                        </h2>

                        {/* Right description */}
                        <p className="text-gray-600 text-sm sm:text-base mt-2 md:mt-4 md:w-1/2 w-full text-center md:text-left leading-relaxed">
                            We help people learn, grow, and explore new possibilities every day. Our mission is to make learning simple, meaningful, and inspiring, so everyone can discover their potential and keep moving forward.
                        </p>
                    </div>

                    {/* ---------- About Image Section ---------- */}
                    <div className="flex-1 relative w-full">
                        {/* <img
                            src="/about/Overview.png"
                            alt="About hero"
                            className="object-cover w-full h-auto rounded-t-lg"
                        /> */}
                        <Image
                            src={"/about/Overview.png"}
                            alt={"About hero"}
                            width={550}
                            height={550}
                            className="object-cover w-full h-auto rounded-t-lg"
                        />
                        <div className="absolute -bottom-15 sm:bottom-5 left-0  sm:left-6 md:left-24 bg-white shadow-md rounded-xl px-6 sm:px-10 md:px-12 py-1.5 sm:py-6 flex gap-4 sm:gap-6 justify-start">
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-lg sm:text-xl">12+</h3>
                                <p className="text-xs sm:text-sm text-gray-500">Blogs Published</p>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-lg sm:text-xl">18K+</h3>
                                <p className="text-xs sm:text-sm text-gray-500">Views on Finsweet</p>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-lg sm:text-xl">30K+</h3>
                                <p className="text-xs sm:text-sm text-gray-500">Total Active Users</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- Mission & Vision Section ---------- */}
                <section className="bg-blue-50 px-6 sm:px-10 md:px-16 pt-20 sm:pt-10 md:pt-10 pb-5 sm:pb-10 md:pb-10 mb-5 mx-auto  w-11/12 rounded-b-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 max-w-6xl mx-auto text-center md:text-left">
                        <div>
                            <h4 className="uppercase text-xs sm:text-sm font-semibold text-gray-500">
                                Our Mission
                            </h4>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                                Creating valuable content for creatives all around the world
                            </h2>
                            <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                                We craft stories that inspire imagination and spark action. Through thoughtful design and meaningful ideas, we empower creators everywhere to learn, grow, and make an impact.
                            </p>
                        </div>
                        <div>
                            <h4 className="uppercase text-xs sm:text-sm font-semibold text-gray-500">
                                Our Vision
                            </h4>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                                A platform that empowers individuals to improve
                            </h2>
                            <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                                We provide tools, insights, and guidance to help people grow, learn, and achieve their full potential in every aspect of life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ---------- New Carousel Section ---------- */}
                <section className="relative w-11/12 overflow-hidden mx-auto mt-10 bg-[#111F2D] rounded-2xl shadow-sm text-white">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
                        }}
                    >
                        {/* Clone of last slide at the beginning */}
                        <div
                            className="min-w-full flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:gap-15 px-10 relative"
                        >
                            <div className="relative z-10 h-full w-full md:w-auto flex items-end justify-center">
                                {slides[slides.length - 1] && (
                                    <Image
                                        src={slides[slides.length - 1]?.img ?? "/fallback.png"}
                                        alt={slides[slides.length - 1]?.name ?? "Team member"}
                                        width={550}
                                        height={550}
                                        className="object-cover relative"
                                    />
                                )}
                            </div>
                            <div className="max-w-md w-full text-center md:text-left text-white z-10 pt-8 pb-0 md:pb-12">
                                <h3 className="text-3xl font-bold mb-2">{slides[slides.length - 1]?.name}</h3>
                                <p className="text-lg text-white/80 mb-3 leading-snug">{slides[slides.length - 1]?.role}</p>
                                <p className="text-white/70 leading-snug text-[15px] text-justify md:text-left">
                                    {slides[slides.length - 1]?.desc}
                                </p>
                            </div>
                        </div>

                        {/* Actual slides */}
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="min-w-full flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-15 px-10 relative"
                            >
                                <div className="relative z-10 h-full w-full md:w-auto flex items-end justify-center">
                                    <Image
                                        src={slide.img}
                                        alt={slide.name}
                                        width={550}
                                        height={550}
                                        className="object-cover relative"
                                    />
                                </div>
                                <div className="max-w-md w-full text-center md:text-left text-white z-10 pt-8 pb-0 md:pb-12">
                                    <h3 className="text-3xl font-bold mb-2">{slide.name}</h3>
                                    <p className="text-lg text-white/80 mb-3 leading-snug">{slide.role}</p>
                                    <p className="text-white/70 leading-snug text-[15px] text-justify md:text-left">
                                        {slide.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Clone of first slide at the end */}
                        <div
                            className="min-w-full flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-15 px-10 relative"
                        >
                            <div className="relative z-10 h-full w-full md:w-auto flex items-end justify-center">
                                <Image
                                    src={slides[0]?.img ?? "/fallback.png"}
                                    alt={slides[0]?.name ?? "Team member"}
                                    width={550}
                                    height={550}
                                    className="object-cover relative"
                                />
                            </div>
                            <div className="max-w-md w-full text-center md:text-left text-white z-10 pt-8 pb-0 md:pb-12">
                                <h3 className="text-3xl font-bold mb-2">{slides[0]?.name}</h3>
                                <p className="text-lg text-white/80 mb-3 leading-snug">{slides[0]?.role}</p>
                                <p className="text-white/70 leading-snug text-[15px] text-justify md:text-left">{slides[0]?.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-11/12 mt-10 mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">Our team of creatives</h2>
                        <p className="font-semibold text-gray-800 mb-3">
                            Transforming bold ideas into experiences that move people.
                        </p>
                        <p className="text-gray-600">
                            At Upraise Learning, our team of creatives exists to turn ideas into experiences that inspire and connect. Just as imagination has always fueled innovation—from the first sketches on paper to digital masterpieces—we believe creativity is how the world moves forward. Every project we craft is driven by purpose, curiosity, and collaboration, because true creativity begins the moment we dare to see things differently.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/about/Know more image.svg"
                            alt="Team"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full"
                        />
                    </div>
                </section>


                <section className="w-11/12 mx-auto mt-10 mb-8 flex flex-col md:flex-row-reverse items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">
                            Why we started this Blog
                        </h2>
                        <p className="font-semibold text-gray-800 mb-3">
                            Empowering minds to grow through shared knowledge and new perspectives.
                        </p>
                        <p className="text-gray-600">
                            At Upraise Learning, this blog exists to explore what it truly means to learn and evolve. Just as humanity has advanced by sharing knowledge—from cave drawings to code—we believe learning is what keeps us moving forward. Every article here is built to help you grow, think differently, and stay curious, because evolution begins the moment we choose to learn something new.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/about/Image.svg"
                            alt="Blog team"
                            width={400}
                            height={400}
                            className="rounded-xl object-cover w-full"
                        />
                    </div>
                </section>




            </Container>
        </div>
    );
}
