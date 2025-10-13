'use client';

import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import * as motion from "motion/react-client";
import { useLoadingComplete } from "@/components/SplashScreen";

export default function Hero() {
  const SUBDOMAIN_URL = process.env.NEXT_PUBLIC_SUBDOMAIN_URL ?? "#";
  const { isLoadingComplete } = useLoadingComplete();

  const animationConfigs = [
    {
      animate: { x: [-10, 10, -10] },
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: [0.42, 0, 0.58, 1] as const,
        type: "tween" as const
      },
      delay: 1
    },
    {
      animate: { x: [10, -10, 10] },
      transition: { 
        duration: 3.5, 
        repeat: Infinity, 
        ease: [0.42, 0, 0.58, 1] as const,
        type: "tween" as const
      },
      delay: 1.5
    },
    {
      animate: { x: [-8, 8, -8] },
      transition: { 
        duration: 2.8, 
        repeat: Infinity, 
        ease: [0.42, 0, 0.58, 1] as const,
        type: "tween" as const
      },
      delay: 2
    }
  ];

  const images = [
    {
      src: "/Freature-Programes.png",
      alt: "75k+ Students",
      width: 200,
      height: 120,
      className: "h-auto w-[30vw] max-w-[200px]"
    },
    {
      src: "/Freature-Expert.png",
      alt: "Expert Trainers",
      width: 240,
      height: 120,
      className: "h-auto w-[30vw] max-w-[240px]"
    },
    {
      src: "/Freature-Certified.png",
      alt: "Certified Courses",
      width: 210,
      height: 120,
      className: "h-auto w-[30vw] max-w-[210px]"
    }
  ];

  return (
    <section
      className="relative bg-black text-white w-full"
      style={{ 
        backgroundImage: "url('/Hero-Bg.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-12 lg:py-14">

          {/* Left Content */}
          <div className="space-y-6">
            <motion.span 
              className="inline-block bg-white text-black pl-2 pr-4 py-2.5 rounded-full font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={isLoadingComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="bg-blue-500 px-3 py-1 rounded-full mr-1 text-white leading-3 text-sm">New</span>
              Empower Your Learning Journey
            </motion.span>

            <motion.h1 
              className="text-3xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              The #1 Place To Learn, Grow, And Succeed
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Real-world projects and certifications to take your learning further with LearnUp Learning Platform.
            </motion.p>

            {/* Feature list */}
            <motion.ul 
              className="space-y-2 text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <li className="flex items-center gap-2">
                <Image src="/green_tick.svg" alt="tick" width={20} height={20} /> 
                World&apos;s Top Instructors
              </li>
              <li className="flex items-center gap-2">
                <Image src="/green_tick.svg" alt="tick" width={20} height={20} /> 
                Skill-Based Training
              </li>
              <li className="flex items-center gap-2">
                <Image src="/green_tick.svg" alt="tick" width={20} height={20} /> 
                Future-Proof Your Career
              </li>
            </motion.ul>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap md:flex-nowrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.a
                href={`${SUBDOMAIN_URL}/register`}
                className="bg-[#097aee] hover:bg-blue-700 whitespace-nowrap px-6 py-3 rounded-lg text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Join For Free
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/courses" 
                  className="border border-white whitespace-nowrap px-6 py-3 rounded-lg text-white font-medium hover:bg-white hover:text-black inline-block"
                >
                  Browse Our Courses
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Images */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoadingComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/Margin.png"
                alt="Students"
                width={850}
                height={850}
                className="relative z-10"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-2 right-4 z-20"
              animate={isLoadingComplete ? {
                y: [0, -20, 0],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                type: "tween"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={isLoadingComplete ? { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.6, delay: 1 }
              } : { opacity: 0, scale: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/Freature-75k.png"
                alt="75k+ Students"
                width={200}
                height={120}
                className="h-auto w-[26vw] max-w-[220px]"
              />
            </motion.div>

            {/* Animated Feature Images */}
            <div className="absolute left-6 md:left-8 lg:left-0 top-14 z-20">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  animate={isLoadingComplete ? animationConfigs[index]?.animate : {}}
                  transition={isLoadingComplete ? animationConfigs[index]?.transition : {}}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={isLoadingComplete ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: animationConfigs[index]?.delay ?? 0,
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  } : { opacity: 0, y: 20, scale: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={image.className}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}