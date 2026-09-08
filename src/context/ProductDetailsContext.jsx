import { useContext, createContext, useState } from 'react'
import { useProducts } from './ProductsContext'

const ProductDetailsContext = createContext()

export function ProductDetailsProvider({ children }) {

    const { category } = useProducts()

    const [selectedProduct, setSelectedProduct] = useState(category[4].items[0])

    return (
        <ProductDetailsContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </ProductDetailsContext.Provider>
    )
}

export function useProductDetails() {
    const context = useContext(ProductDetailsContext)
    if (!context) {
        throw new Error('useProductDetails must be used within a ProductDetailsProvider')
    }
    return context
}
