"use client"

import Spline from '@splinetool/react-spline';
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
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-background relative">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/CX-KSlc716NS3epA/scene.splinecode" />
        </div>
        <div className="relative z-10">
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
                className="text-center w-full max-w-7xl mx-auto"
              >
                <motion.h1
                  className="sharp-text text-[3rem] xs:text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-extrabold text-primary leading-none tracking-normal whitespace-nowrap [webkit-text-stroke:1px_var(--primary)] sm:[webkit-text-stroke:2px_var(--primary)]"
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
                  className="mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6 md:space-y-8"
                >
                  <div className="space-y-2">
                    <p className="sharp-text text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight font-bold text-primary tracking-normal break-all antialiased">
                      213 MONTREAL STREET
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Green Info Section */}
      <section className="min-h-[120vh] flex flex-col items-center justify-center px-4 sm:px-6 bg-primary overflow-hidden">
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
              className="text-center w-full space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 max-w-[100vw]"
            >
              <p 
                className="sharp-text text-[2.5rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]"
              >
                NOW OPEN 11AM
              </p>
              <p 
                className="sharp-text text-[2rem] xs:text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]"
              >
                MONDAY TO SATURDAY
              </p>
              <p 
                className="sharp-text text-[2.5rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]"
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

