import { createContext, useContext, useState, useMemo } from 'react'

const CategoryFilterContext = createContext()

export function CategoryFilterProvider({ children }) {
    const [filteredcategory, setFilteredcategory] = useState(null)

    const value = useMemo(() => ({ filteredcategory, setFilteredcategory }), [filteredcategory])

    return (
        <CategoryFilterContext.Provider value={ value }>
            {children}
        </CategoryFilterContext.Provider>
    )
}

export function useCategoryFilter() {
    const context = useContext(CategoryFilterContext)
    if (!context) {
        throw new Error('useCategoryFilter must be used within a CategoryFilterProvider')
    }
    return context
}