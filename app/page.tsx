'use client';

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from "next/image";

interface PizzaItem {
  name: string;
  description: string;
  price: string;
  imagePath: string;
  imageWidth?: string;
  aspectRatio?: string;
}

interface SaladItem {
  name: string;
  description: string;
  price: string;
  imagePath: string;
}

const pizzas: PizzaItem[] = [
  {
    name: "MARINARA- don't underestimate simplicity, this pie is legit",
    description: "red sauce, garlic oil, basil",
    price: "$16",
    imagePath: "/pizzas/marinara.png",
  },
  {
    name: "MARGHERITA- the Queen for a reason",
    description: "red sauce, mozzarella, basil, parm",
    price: "$19",
    imagePath: "/pizzas/marg.png",
    imageWidth: "110%",
  },
  {
    name: "PEPPERONI- salty, sweet, spicy, freakin' awesome",
    description: " red sauce, pepperoni, garlic honey, parm",
    price: "$23",
    imagePath: "/pizzas/Pep.png",
  },
  {
    name: "BUFFALO CHICKEN OR CAULIFLOWER- spicy, tangy, and a bit of that funk",
    description:
      "garlic butter, sesame, roasted chicken OR cauliflower, wing sauce, blue cheese crema, green onion,  parm",
    price: "$24",
    imagePath: "/pizzas/buff.png",
    imageWidth: "110%",
  },
  {
    name: "PINEAPPLE - f@ck you, it's delicious",
    description:
      " fresh pineapple, pepperoni, mozzarella, house-made pickled jalapenos, parm",
    price: "$23",
    imagePath: "/pizzas/pineapple.png",
  },
  {
    name: "JALAPENO- a bit of fire for your face",
    description:
      "red sauce, pepperoni, house-made pickled jalapenos, mozzarella, parm",
    price: "$25",
    imagePath: "/pizzas/jala.png",
    imageWidth: "110%",
  },
];

const salads: SaladItem[] = [
  {
    name: "KALE CAESAR- creamy, garlicky, tangy, no anchovies",
    description: "kale, garlic, house-made pickled onions, croutons, parm",
    price: "$13",
    imagePath: "/salads/kale.png",
  },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div className="fixed inset-0 z-10">
        <Spline scene="https://prod.spline.design/IQuCOfATJQs9GmDE/scene.splinecode" />
      </div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-background relative">

        <div className="relative z-10 pointer-events-none">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
              className="text-center w-full max-w-7xl mx-auto"
            >
              <motion.h1
                className="sharp-text sharp-text-h1 font-extrabold text-primary leading-none tracking-normal whitespace-nowrap [webkit-text-stroke:1px_var(--primary)] sm:[webkit-text-stroke:2px_var(--primary)] mx-auto text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
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
                  <p className="sharp-text sharp-text-p leading-tight font-bold text-primary tracking-normal break-all antialiased">
                    213 MONTREAL STREET
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="text-center w-full max-w-7xl mx-auto">
              <h1 className="sharp-text sharp-text-h1 font-extrabold text-primary leading-none tracking-normal whitespace-nowrap [webkit-text-stroke:1px_var(--primary)] sm:[webkit-text-stroke:2px_var(--primary)]">
                PIZZA MONSTER
              </h1>
              <div className="mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <p className="sharp-text sharp-text-p leading-tight font-bold text-primary tracking-normal break-all antialiased">
                    213 MONTREAL STREET
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Green Info Section */}
      <section className="min-h-[120vh] flex flex-col items-center justify-center px-4 sm:px-6 bg-primary overflow-hidden relative">
        <div className="relative z-10 pointer-events-none">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
              className="text-center w-full space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 max-w-[100vw]"
            >
              <p className="sharp-text sharp-text-h2 font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]">
                NOW OPEN 11AM
              </p>
              <p className="sharp-text sharp-text-h3 font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]">
                MONDAY TO SATURDAY
              </p>
              <p className="sharp-text sharp-text-h2 font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]">
                613 217 1195
              </p>
            </motion.div>
          ) : (
            <div className="text-center w-full space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 max-w-[100vw]">
              <p className="sharp-text sharp-text-h2 font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]">
                NOW OPEN 11AM
              </p>
              <p className="sharp-text sharp-text-h3 font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]">
                MONDAY TO SATURDAY
              </p>
              <p className="sharp-text sharp-text-h2 font-bold text-background tracking-normal antialiased leading-none whitespace-normal [webkit-text-stroke:1px_var(--background)] sm:[webkit-text-stroke:2px_var(--background)] lg:[webkit-text-stroke:3px_var(--background)]">
                613 217 1195
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Menu Section */}
      <section className="min-h-screen bg-background relative z-20">
        <div className="bg-white py-8 overflow-x-hidden relative">
          <div className="max-w-[95%] sm:max-w-[90%] mx-auto relative z-10">
            <h2 className="sharp-text sharp-text-h2 font-bold text-primary tracking-normal text-center mb-8 sm:mb-12">
              PIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-12 md:gap-y-16 mb-16 sm:mb-20">
              {pizzas.map((pizza) => (
                <div key={pizza.name} className="group">
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square mx-auto mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={pizza.imagePath}
                      alt={pizza.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                      priority
                    />
                  </div>
                  <div className="text-center px-2 sm:px-4">
                    <h3 className="text-primary text-lg sm:text-xl font-medium mb-2">
                      {pizza.name}
                    </h3>
                    <p className="text-primary/70 mb-2 text-sm sm:text-base">
                      {pizza.description}
                    </p>
                    <p className="text-primary font-medium text-base sm:text-lg mb-3">
                      {pizza.price}
                    </p>
                    <div className="flex items-center justify-center gap-4"></div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="sharp-text sharp-text-h2 font-bold text-primary tracking-normal text-center mb-8 sm:mb-12">
              SALAD
            </h2>
            <div className="max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
              {salads.map((salad) => (
                <div key={salad.name} className="text-center mb-12 last:mb-0">
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-square">
                      <Image
                        src={salad.imagePath}
                        alt={salad.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 300px, 400px"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl font-medium mb-2">
                    {salad.name}
                  </h3>
                  <p className="text-primary/70 mb-2 text-sm sm:text-base">
                    {salad.description}
                  </p>
                  <p className="text-primary font-medium text-base sm:text-lg mb-3">
                    {salad.price}
                  </p>
                  <div className="flex items-center justify-center gap-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
