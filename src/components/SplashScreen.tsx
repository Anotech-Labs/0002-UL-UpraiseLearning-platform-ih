"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Create context to share loading state
const LoadingContext = createContext({ isLoadingComplete: false });

// Export hook to use in other components
export const useLoadingComplete = () => useContext(LoadingContext);

export function SplashScreenProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDisplayTime = 2000;

    const logoImg = new window.Image();
    logoImg.src = "/UpRaise Logo.png";

    let pageLoaded = false;
    let logoLoaded = false;

    const checkBothLoaded = () => {
      if (pageLoaded && logoLoaded) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setIsLoadingComplete(true), 300);
        }, remainingTime);
      }
    };

    logoImg.onload = () => {
      logoLoaded = true;
      checkBothLoaded();
    };

    const handlePageLoad = () => {
      pageLoaded = true;
      checkBothLoaded();
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoadingComplete(true), 300);
    }, 10000);

    return () => {
      window.removeEventListener("load", handlePageLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoadingComplete }}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.5, 1, 1],
                y: [0, 0, -30],
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.2, 0.7, 1],
                ease: "easeInOut",
              }}
            >
              <Image
                src="/UpRaise Logo.png"
                alt="Logo"
                width={300}
                height={300}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}
