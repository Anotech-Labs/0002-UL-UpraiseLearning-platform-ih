import Image from 'next/image'
import React from 'react'

const BlogSection = () => {
    return (
        <>
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
        </>
    )
}

export default BlogSection