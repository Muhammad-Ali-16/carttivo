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

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}