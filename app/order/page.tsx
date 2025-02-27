"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import Image from 'next/image'

// Types for our order system
interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
  specialInstructions: string
  imagePath?: string
}

export default function OrdersPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [specialInstructions, setSpecialInstructions] = useState("")

  // Menu items from your PizzaMenu component
  const menuItems = [
    {
      id: "marinara",
      name: "MARINARA- don't underestimate simplicity, this pie is legit",
      description: "red sauce, garlic oil, basil",
      basePrice: 16,
      imagePath: "/pizzas/marinara.png",
    },
    {
      id: "margherita",
      name: "MARGHERITA- the Queen for a reason",
      description: "red sauce, mozzarella, basil, parm",
      basePrice: 19,
      imagePath: "/pizzas/marg.png",
    },
    {
      id: "pepperoni",
      name: "PEPPERONI- salty, sweet, spicy, freakin' awesome",
      description: "red sauce, pepperoni, garlic honey, parm",
      basePrice: 23,
      imagePath: "/pizzas/Pep.png",
    },
    {
      id: "buffalo",
      name: "BUFFALO CHICKEN OR CAULIFLOWER- spicy, tangy, and a bit of that funk",
      description: "garlic butter, sesame, roasted chicken OR cauliflower, wing sauce, blue cheese crema, green onion, parm",
      basePrice: 24,
      imagePath: "/pizzas/buff.png",
    },
    {
      id: "pineapple",
      name: "PINEAPPLE - f@ck you, it's delicious",
      description: "fresh pineapple, pepperoni, mozzarella, house-made pickled jalapenos, parm",
      basePrice: 23,
      imagePath: "/pizzas/pineapple.png",
    },
    {
      id: "jalapeno",
      name: "JALAPENO- a bit of fire for your face",
      description: "red sauce, pepperoni, house-made pickled jalapenos, mozzarella, parm",
      basePrice: 25,
      imagePath: "/pizzas/jala.png",
    },
    {
      id: "kale-caesar",
      name: "KALE CAESAR- creamy, garlicky, tangy, no anchovies",
      description: "kale, garlic, house-made pickled onions, croutons, parm",
      basePrice: 13,
      imagePath: "/salads/kale.png",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Add item to order
  const addToOrder = (menuItem: { id: string; name: string; basePrice: number; description: string; imagePath: string }) => {
    const existingItemIndex = orderItems.findIndex((item) => item.name === menuItem.name)

    if (existingItemIndex !== -1) {
      setOrderItems(
        orderItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        }),
      )
    } else {
      const newItem: OrderItem = {
        id: `${menuItem.id}-${Date.now()}`,
        name: menuItem.name,
        quantity: 1,
        price: menuItem.basePrice,
        specialInstructions: "",
        imagePath: menuItem.imagePath,
      }
      setOrderItems([...orderItems, newItem])
    }
  }

  // Remove item from order
  const removeFromOrder = (id: string) => {
    setOrderItems(orderItems.filter((item) => item.id !== id))
  }

  // Update item quantity
  const updateQuantity = (id: string, change: number) => {
    setOrderItems(
      orderItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  // Update item instructions
  const updateInstructions = (id: string, instructions: string) => {
    setOrderItems(
      orderItems.map((item) => {
        if (item.id === id) {
          return { ...item, specialInstructions: instructions }
        }
        return item
      }),
    )
  }

  // Calculate order total
  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Submit order
  const submitOrder = () => {
    // In a real app, you would send this to your backend
    const order = {
      items: orderItems,
      customer: { name, phone, address },
      specialInstructions,
      total: calculateTotal(),
    }

    console.log("Order submitted:", order)
    alert("Your order has been placed! We'll call you when it's ready.")

    // Reset form
    setOrderItems([])
    setSpecialInstructions("")
  }

  // Fix TypeScript errors for event handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)
  const handleInstructionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSpecialInstructions(e.target.value)
  const handleItemInstructionsChange = (id: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => updateInstructions(id, e.target.value)

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
            }}
            className="w-full"
          >
            <motion.h1
              className="sharp-text text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-extrabold text-primary leading-none tracking-normal mb-12"
              style={{
                WebkitTextStroke: "2px var(--primary)",
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.3,
              }}
            >
              YOUR ORDER
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Menu Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white/95 p-6 rounded-lg border-2 border-primary/20 shadow-lg backdrop-blur-sm"
              >
                <h2 className="sharp-text text-3xl font-bold text-primary mb-6">ADD TO YOUR ORDER</h2>

                <div className="grid grid-cols-1 gap-6">
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-lg border border-primary/10 shadow-md hover:shadow-lg transition-all hover:border-primary/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image
                            src={item.imagePath}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="sharp-text text-xl font-bold text-primary/90">{item.name}</h3>
                          <p className="text-primary font-bold mb-2">${item.basePrice.toFixed(2)}</p>
                          <p className="text-primary/70 text-sm mb-3">{item.description}</p>
                          <Button
                            onClick={() => addToOrder(item)}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold transition-colors"
                          >
                            <Plus className="mr-2 h-4 w-4" /> Add to Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/95 p-6 rounded-lg border-2 border-primary/20 shadow-lg backdrop-blur-sm"
              >
                <h2 className="sharp-text text-3xl font-bold text-primary mb-6">YOUR CART</h2>

                {orderItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="mx-auto h-16 w-16 text-primary/30 mb-4" />
                    <p className="text-primary/80 text-xl font-bold">Your cart is empty</p>
                    <p className="text-primary/60">Add some delicious pizza to get started!</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {orderItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white p-4 rounded-lg border border-primary/10 shadow-md transition-all hover:border-primary/30"
                        >
                          <div className="flex items-start gap-4">
                            {item.imagePath && (
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={item.imagePath}
                                  alt={item.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            )}
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="sharp-text text-lg font-bold text-primary/90">{item.name}</h3>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFromOrder(item.id)}
                                  className="h-8 w-8 text-destructive/70 hover:text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </Button>
                              </div>

                              <div className="mb-3">
                                <Label htmlFor={`instructions-${item.id}`} className="text-primary/90 text-sm font-bold">
                                  Special Instructions
                                </Label>
                                <Textarea
                                  id={`instructions-${item.id}`}
                                  value={item.specialInstructions}
                                  onChange={handleItemInstructionsChange(item.id)}
                                  placeholder="Any special requests for this item?"
                                  className="border-primary/20 bg-white text-primary placeholder:text-primary/40 mt-1 text-sm min-h-[40px] max-h-[60px] focus:border-primary/50"
                                  rows={1}
                                />
                              </div>

                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center space-x-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="h-8 w-8 bg-white border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="text-primary font-bold w-8 text-center">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="h-8 w-8 bg-white border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                                <span className="text-primary font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t-2 border-primary/20 pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="sharp-text text-xl font-bold text-primary/90">TOTAL</span>
                        <span className="sharp-text text-2xl font-bold text-primary">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-primary/90 font-bold">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={handleNameChange}
                          className="border-primary/20 bg-white text-primary placeholder:text-primary/40 focus:border-primary/50"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-primary/90 font-bold">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          value={phone}
                          onChange={handlePhoneChange}
                          className="border-primary/20 bg-white text-primary placeholder:text-primary/40 focus:border-primary/50"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address" className="text-primary/90 font-bold">
                          Address
                        </Label>
                        <Input
                          id="address"
                          value={address}
                          onChange={handleAddressChange}
                          className="border-primary/20 bg-white text-primary placeholder:text-primary/40 focus:border-primary/50"
                          placeholder="Delivery address"
                        />
                      </div>

                      <div>
                        <Label htmlFor="instructions" className="text-primary/90 font-bold">
                          Special Instructions
                        </Label>
                        <Textarea
                          id="instructions"
                          value={specialInstructions}
                          onChange={handleInstructionsChange}
                          className="border-primary/20 bg-white text-primary placeholder:text-primary/40 focus:border-primary/50"
                          placeholder="Any special requests?"
                          rows={3}
                        />
                      </div>

                      <Button
                        onClick={submitOrder}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-xl transition-colors"
                        disabled={orderItems.length === 0 || !name || !phone}
                      >
                        PLACE ORDER
                      </Button>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

