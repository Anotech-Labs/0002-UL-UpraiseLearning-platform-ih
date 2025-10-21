import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <>
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
        </>
    )
}

export default HeroSection