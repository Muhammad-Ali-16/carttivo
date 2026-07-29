import { useState, createContext, useContext } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exisitingItem = prevWishlist.find((item) => item.id === product.id)

      if (exisitingItem) {
        return prevWishlist.filter((item) => item.id !== product.id)
      }

      else {
        return [...prevWishlist, product]
      }
    })
  }

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
  
}

export function useWishlist() {
  return useContext(WishlistContext)
}