"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const [current, setCurrent] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);

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
        <>
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
        </>
    )
}

export default Carousel