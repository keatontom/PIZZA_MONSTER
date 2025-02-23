"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.4,
              }}
              className="text-center w-full"
            >
              <motion.h1
                className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-bold text-primary leading-none tracking-normal"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.3,
                }}
              >
                PIZZA MONSTER
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 md:mt-12 space-y-6 md:space-y-8"
              >
                <div className="space-y-2">
                  <p className="text-[46.8px] leading-[46.8px] font-bold text-primary tracking-normal break-all antialiased">
                    168 DIVISION ST
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Info Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-primary">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.4,
              }}
              className="text-center w-full space-y-12 md:space-y-16"
            >
              <p className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-bold text-background tracking-normal break-all antialiased leading-none">
                NOW OPEN 11AM
              </p>
              <p className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-background tracking-normal break-all antialiased leading-none">
                MONDAY TO SATURDAY
              </p>
              <p className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-bold text-background tracking-normal break-all antialiased leading-none mt-12">
                613 217 1195
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}

