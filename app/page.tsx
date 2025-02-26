"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import PizzaMenu from './components/PizzaMenu'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div>
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
                className="sharp-text text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-extrabold text-primary leading-none tracking-normal"
                style={{
                  WebkitTextStroke: "2px text-primary",
                }}
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
                  <p className="sharp-text text-[46.8px] leading-[46.8px] font-bold text-primary tracking-normal break-all antialiased">
                    168 DIVISION ST
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Green Info Section */}
      <section className="min-h-[120vh] flex flex-col items-center justify-center px-4 bg-primary">
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
              className="text-center w-full space-y-16 md:space-y-24 max-w-[100vw] px-4"
            >
              <p 
                className="sharp-text text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-bold text-background tracking-normal antialiased leading-none whitespace-normal overflow-hidden"
                style={{ WebkitTextStroke: "3px text-background" }}
              >
                NOW OPEN 11AM
              </p>
              <p 
                className="sharp-text text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-background tracking-normal antialiased leading-none whitespace-normal overflow-hidden"
                style={{ WebkitTextStroke: "3px text-background" }}
              >
                MONDAY TO SATURDAY
              </p>
              <p 
                className="sharp-text text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-bold text-background tracking-normal antialiased leading-none whitespace-normal overflow-hidden"
                style={{ WebkitTextStroke: "3px text-background" }}
              >
                613 217 1195
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Menu Section */}
      <section className="min-h-screen bg-background">
        <PizzaMenu />
      </section>
    </div>
  )
}

