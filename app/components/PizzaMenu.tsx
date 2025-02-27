'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PizzaItem {
  name: string
  description: string
  price: string
  imagePath: string
  imageWidth?: string
  aspectRatio?: string
}

interface SaladItem {
  name: string
  description: string
  price: string
  imagePath: string
}

interface CartItem {
  name: string
  quantity: number
  price: string
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
    imagePath: "/pizzas/Pep.png"
  },
  {
    name: "BUFFALO CHICKEN OR CAULIFLOWER- spicy, tangy, and a bit of that funk",
    description: "garlic butter, sesame, roasted chicken OR cauliflower, wing sauce, blue cheese crema, green onion,  parm",
    price: "$24",
    imagePath: "/pizzas/buff.png",
    imageWidth: "110%",
  },
  {
    name: "PINEAPPLE - f@ck you, it's delicious",
    description: " fresh pineapple, pepperoni, mozzarella, house-made pickled jalapenos, parm",
    price: "$23",
    imagePath: "/pizzas/pineapple.png",
  },
  {
    name: "JALAPENO- a bit of fire for your face",
    description: "red sauce, pepperoni, house-made pickled jalapenos, mozzarella, parm",
    price: "$25",
    imagePath: "/pizzas/jala.png",
    imageWidth: "110%",
  }
]

const salads: SaladItem[] = [
  {
    name: "KALE CAESAR- creamy, garlicky, tangy, no anchovies",
    description: "kale, garlic, house-made pickled onions, croutons, parm",
    price: "$13",
    imagePath: "/salads/kale.png",
  }
]

export default function PizzaMenu() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (name: string, price: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === name)
      if (existingItem) {
        return prevCart.map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { name, quantity: 1, price }]
    })
  }

  const removeFromCart = (name: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === name)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      return prevCart.filter(item => item.name !== name)
    })
  }

  const getItemQuantity = (name: string) => {
    return cart.find(item => item.name === name)?.quantity || 0
  }

  return (
    <section className="bg-white py-8 overflow-x-hidden">
      <div className="max-w-[90%] mx-auto">
        <h2 className="sharp-text text-[5rem] sm:text-[6rem] md:text-[7rem] font-bold text-primary tracking-normal text-center mb-12">
          PIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-16 mb-20">
          {pizzas.map((pizza) => (
            <div key={pizza.name} className="group">
              <div 
                className={`relative -ml-[5%] mb-6 transition-transform duration-300 group-hover:scale-105`}
                style={{
                  width: pizza.imageWidth || "110%",
                  aspectRatio: pizza.aspectRatio || "1/1"
                }}
              >
                <Image
                  src={pizza.imagePath}
                  alt={pizza.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1440px) 30vw, 500px"
                />
              </div>
              <div className="text-center">
                <h3 className="text-primary text-xl font-medium mb-2">{pizza.name}</h3>
                <p className="text-primary/70 mb-2 text-base">{pizza.description}</p>
                <p className="text-primary font-medium text-lg mb-3">{pizza.price}</p>
                <div className="flex items-center justify-center gap-4">
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="sharp-text text-[4rem] sm:text-[5rem] md:text-[6rem] font-bold text-primary tracking-normal text-center mb-12">
          SALAD
        </h2>
        <div className="max-w-2xl mx-auto">
          {salads.map((salad) => (
            <div key={salad.name} className="text-center">
              <div className="flex justify-center mb-8">
                <Image
                  src={salad.imagePath}
                  alt={salad.name}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
              <h3 className="text-primary text-xl font-medium mb-2">{salad.name}</h3>
              <p className="text-primary/70 mb-2 text-base">{salad.description}</p>
              <p className="text-primary font-medium text-lg mb-3">{salad.price}</p>
              <div className="flex items-center justify-center gap-4">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 