import React from 'react'
import Container from '../Container'
import Image from 'next/image'

const ParallaxSection = () => {
    return (
        <div className='min-h-96 relative w-full hidden md:block'>
            <section className='bg-black text-white min-h-96 sticky top-[69px] z-[20]'>
                <Container>
                    <div className='flex w-full justify-center h-[500px]'>
                       {/* Left Section */}
                        <div className="w-1/2 flex flex-col justify-center px-10 space-y-6">
                            <div className="inline-block bg-gradient-to-r from-gray-500 to-transparent text-sm font-medium text-white px-4 py-1 rounded-lg w-fit">
                                Step 1: Learn With Real-World Mentors
                            </div>

                            <div>
                                <h2 className="text-4xl font-semibold leading-tight">
                                    <span className="text-white">Gain skills</span>{" "}
                                    <span className="text-[#aaaaaa] font-medium">directly from industry experts</span>
                                </h2>
                                <p className="text-[#aaaaaa] mt-2 text-lg">
                                    No boring theory — only practical, hands-on knowledge that builds confidence.
                                </p>
                            </div>

                            <div className="flex items-center gap-10 text-[#aaaaaa] mt-4">
                                <div>
                                    <p className="text-2xl font-semibold text-white">10+</p>
                                    <p className="text-sm">Hours of learning content</p>
                                </div>
                                <div className="h-10 w-px bg-[#aaaaaa]" />
                                <div>
                                    <p className="text-2xl font-semibold text-white">70%</p>
                                    <p className="text-sm">Learner satisfaction rate</p>
                                </div>
                            </div>

                            <button className="bg-white text-black font-medium px-6 py-3 rounded-md w-fit mt-6 hover:bg-gray-300 transition">
                                Start learning
                            </button>
                        </div>
                        <div className="relative w-full p-4 md:w-1/2 h-64 sm:h-80 md:h-auto">
                            <Image
                                src="/parallax1.png"
                                alt="parallax1"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <svg
                                className="absolute inset-0 w-full h-full left-5 -z-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 495 499"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M293.801 1965.96C122.464 1885.27 43.8206 1692.16 64.1877 1580.39C84.5549 1468.63 282.726 1484.9 327.051 1351.57C371.376 1218.23 319.959 1038.69 163.774 1011.35C79.775 996.653 13.6764 1062.2 22.317 1127.69C31.564 1197.79 123.382 1248.58 214.062 1254.5C357.774 1263.88 370.741 1125.36 385.699 1016.45C399.607 915.181 342.904 855.878 301.46 755.097C277.872 697.736 244.533 668.309 234.088 609.572C206.197 452.727 441.869 422.649 469.54 269.818C488.867 163.074 435.526 -10.9648 435.526 -10.9648"
                                    stroke="#EE2C3C"
                                    strokeWidth="42"
                                />
                            </svg>
                        </div>

                    </div>
                </Container>
            </section>
            <section className='bg-[#660202] text-white min-h-96 sticky top-[0px] z-[21] -mt-screen'>
                <Container>
                    <div className='flex w-full justify-center h-[500px]'>
                        {/* Left Section */}
                        <div className="w-1/2 flex flex-col justify-center px-10 space-y-6">
                            <div className="inline-block bg-gradient-to-r from-[#871616] to-transparent text-sm font-medium text-white px-4 py-1 rounded-lg w-fit">
                                Step 2: Build, Don&apos;t Just Watch
                            </div>

                            <div>
                                <h2 className="text-4xl font-semibold leading-tight">
                                    <span className="text-white">Improve</span>{" "}
                                    <span className="text-[#f0827e] font-medium">with real-world practice projects</span>
                                </h2>
                                <p className="text-[#f0827e] mt-2 text-lg">
                                    You own the skill — not just the certificate.
                                </p>
                            </div>

                            <div className="flex items-center gap-10 text-[#f0827e] mt-4">
                                <div>
                                    <p className="text-2xl font-semibold text-white">50+</p>
                                    <p className="text-sm">Real-world case studies</p>
                                </div>
                                <div className="h-10 w-px bg-[#f0827e]" />
                                <div>
                                    <p className="text-2xl font-semibold text-white">20+</p>
                                    <p className="text-sm">Industry experts</p>
                                </div>
                            </div>

                            <button className="bg-[#f6abab] text-black font-medium px-6 py-3 rounded-md w-fit mt-6 hover:bg-[#f0827e] transition">
                                Get interview ready
                            </button>
                        </div>
                        <div className="relative w-full p-4 md:w-1/2 h-64 sm:h-80 md:h-auto">
                            <Image
                                src="/parallax2.png"
                                alt="parallax2"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <svg
                                className="absolute inset-0 w-full h-full left-5 -z-10"
                                xmlns="http://www.w3.org/2000/svg"
                                width="495"
                                height="499"
                                viewBox="0 0 495 499"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M294.074 1462.83C122.736 1382.15 44.0933 1189.03 64.4605 1077.27C84.8276 965.5 282.999 981.777 327.324 848.439C371.649 715.1 328.958 582.206 172.773 554.873C88.7742 540.172 13.9491 559.068 22.5897 624.566C31.8367 694.66 123.655 745.45 214.335 751.369C358.047 760.749 371.014 622.234 385.971 513.324C399.879 412.054 343.177 352.75 301.733 251.97C278.145 194.609 244.806 165.182 234.361 106.445C206.469 -50.3999 442.142 -80.4785 469.813 -233.309C489.14 -340.054 435.799 -514.092 435.799 -514.092"
                                    stroke="#F08282"
                                    strokeWidth="42"
                                />
                            </svg>
                        </div>

                    </div>
                </Container>
            </section>
            <section className='bg-[#1945b0] text-white min-h-96 sticky top-[69px] z-[22] -mt-screen'>
                <Container>
                    <div className='flex w-full justify-center h-[500px]'>
                        {/* Left Section */}
                        <div className="w-1/2 flex flex-col justify-center px-10 space-y-6">
                            <div className="inline-block bg-gradient-to-r from-[#446bcb] to-transparent text-sm font-medium text-white px-4 py-1 rounded-lg w-fit">
                                Step 3: Get Guided, Not Just Taught
                            </div>

                            <div>
                                <h2 className="text-4xl font-semibold leading-tight">
                                    <span className="text-white">Track</span>{" "}
                                    <span className="text-[#c2d3f9] font-medium">your progress, and help you stay on your path to success.</span>
                                </h2>
                                <p className="text-[#c2d3f9] mt-2 text-lg">
                                    Our educators don&apos;t disappear after class.
                                </p>
                            </div>

                            <div className="flex items-center gap-10 text-[#c2d3f9] mt-4">
                                <div>
                                    <p className="text-2xl font-semibold text-white">89.5%</p>
                                    <p className="text-sm">Positive career impact</p>
                                </div>
                                <div className="h-10 w-px bg-[#c2d3f9]" />
                                <div>
                                    <p className="text-2xl font-semibold text-white">4.6/5</p>
                                    <p className="text-sm">Career support rating</p>
                                </div>
                            </div>

                            <button className="bg-[#c2d3f9] text-black font-medium px-6 py-3 rounded-md w-fit mt-6 hover:bg-[#94b6ff] transition">
                                Get job-ready
                            </button>
                        </div>
                        <div className="relative w-full p-4 md:w-1/2 h-64 sm:h-80 md:h-auto">
                            <Image
                                src="/parallax3.png"
                                alt="parallax3"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <svg
                                className="absolute inset-0 w-full h-full left-5 -z-10"
                                xmlns="http://www.w3.org/2000/svg"
                                width="495"
                                height="499"
                                viewBox="0 0 495 499"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M293.801 969.956C122.464 889.273 43.8206 696.16 64.1877 584.394C84.5549 472.627 282.726 488.905 327.051 355.566C371.376 222.227 319.959 42.6864 163.774 15.353C79.775 0.65266 13.6764 66.1952 22.317 131.693C31.564 201.788 123.382 252.577 214.062 258.496C357.774 267.876 368.042 131.411 383 22.5C396.908 -78.7699 342.904 -140.122 301.46 -240.903C277.872 -298.264 244.533 -327.691 234.088 -386.428C206.197 -543.273 441.869 -573.351 469.54 -726.182C488.867 -832.926 435.526 -1006.96 435.526 -1006.96"
                                    stroke="#0099FE"
                                    strokeWidth="42"
                                />
                            </svg>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='bg-[#024f29]  text-white min-h-96 sticky top-[69px] z-[22] -mt-screen'>
                <Container>
                    <div className='flex w-full justify-center h-[500px]'>
                        {/* Left Section */}
                        <div className="w-1/2 flex flex-col justify-center px-10 space-y-6">
                            <div className="inline-block bg-gradient-to-r from-[#0C784A] to-transparent text-sm font-medium text-white px-4 py-1 rounded-lg w-fit">
                                Step 4: Learn Smart, Grow Fast
                            </div>

                            <div>
                                <h2 className="text-4xl font-semibold leading-tight">
                                    <span className="text-white">Transform</span>{" "}
                                    <span className="text-[#a2e0c1] font-medium">with structured pathways and smart learning tools</span>
                                </h2>
                                <p className="text-[#C8E5CA] mt-2 text-lg">
                                    whether you’re a beginner, final-year student, or young professional.
                                </p>
                            </div>

                            <div className="flex items-center gap-10 text-[#C8E5CA] mt-4">
                                <div>
                                    <p className="text-2xl font-semibold text-white">20K+</p>
                                    <p className="text-sm">Nationwide learners</p>
                                </div>
                                <div className="h-10 w-px bg-[#2F7A55]" />
                                <div>
                                    <p className="text-2xl font-semibold text-white">15+</p>
                                    <p className="text-sm">Career specialisation</p>
                                </div>
                            </div>

                            <button className="bg-[#87E6A5] text-black font-medium px-6 py-3 rounded-md w-fit mt-6 hover:bg-[#9ff0b9] transition">
                                Land your dream role
                            </button>
                        </div>
                        <div className="relative w-full p-4 md:w-1/2 h-64 sm:h-80 md:h-auto">
                            <Image
                                src="/parallax4.png"
                                alt="parallax4"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <svg
                                className="absolute inset-0 w-full h-full left-5 -z-10"
                                xmlns="http://www.w3.org/2000/svg"
                                width="495"
                                height="499"
                                viewBox="0 0 495 499"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M398.864 518.5C227.526 437.817 18.4961 186.266 38.8633 74.5C59.2304 -37.2663 283.045 -18.0949 327.37 -151.434C371.695 -284.773 320.278 -464.313 164.093 -491.647C80.094 -506.347 13.9954 -440.805 22.636 -375.307C31.883 -305.212 123.701 -254.422 214.381 -248.504C358.093 -239.124 371.06 -377.638 386.018 -486.549C399.926 -587.819 343.223 -647.122 301.779 -747.902C278.191 -805.263 244.852 -834.69 234.407 -893.428C206.515 -1050.27 442.188 -1080.35 469.859 -1233.18C489.186 -1339.93 435.845 -1513.96 435.845 -1513.96"
                                    stroke="#D0F0C0"
                                    strokeWidth="42"
                                />
                            </svg>
                        </div>

                    </div>
                </Container>
            </section>
        </div>
    )
}

export default ParallaxSection