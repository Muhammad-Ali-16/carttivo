import { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id != id))
  }

  const increaseCartQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ?
          { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
          : item
      ))
  }


  const decreaseCartQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ?
          { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      ))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseCartQuantity, decreaseCartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}