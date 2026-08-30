import { useState, useEffect, createContext, useContext } from 'react'
import { GetAllProducts } from '../services/api'


const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState([])


    useEffect(() => {
        GetAllProducts()
            .then((data) => {
                setCategory(data)
            })
            .catch((err) => { setError(err.message) })
            .finally(() => { setLoading(false) })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <ProductsContext.Provider value={{ category }}>
            {children}
        </ProductsContext.Provider>
    )
}



export function useProducts() {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider')
    }
    return context
}