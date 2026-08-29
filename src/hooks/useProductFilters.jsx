import { useState, useMemo } from 'react'
import { useProducts } from "./useProducts"

export function useProductFilters() {

const {category} = useProducts()

  const [filterMinPrice, setFilterMinPrice] = useState(0)
  const [filterMaxPrice, setFilterMaxPrice] = useState(999)
  const [isInStock, setIsInStock] = useState(null)
  const [filteredCategory, setFilteredCategory] = useState('')
  const [filteredBrand, setFilteredBrand] = useState('')

  const allProducts = useMemo(() => {
    return category.flatMap((cat) => cat.items)
  }, [category])

  const visibleProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesPrice = product.price >= filterMinPrice && product.price <= filterMaxPrice
      const matchesStock = isInStock === null || product.inStock === isInStock
      const matchesCategory = filteredCategory === '' || product.category === filteredCategory
      const matchesBrand = filteredBrand === '' || product.brand === filteredBrand
      return matchesPrice && matchesStock && matchesCategory && matchesBrand
    })
  }, [allProducts, filterMinPrice, filterMaxPrice, isInStock, filteredCategory, filteredBrand])

  const inStockCount = useMemo(
    () => allProducts.filter((item) => item.inStock === true).length,
    [allProducts]
  )
  const outOfStockCount = useMemo(
    () => allProducts.filter((item) => item.inStock === false).length,
    [allProducts]
  )

  const brands = useMemo(
    () => [...new Set(allProducts.map((product) => product.brand))],
    [allProducts]
  )

  const handleFilteredCategory = (name) => {
    setFilteredCategory((prev) => (prev === name ? '' : name))
  }

  const handleFilteredBrand = (name) => {
    setFilteredBrand((prev) => (prev === name ? '' : name))
  }

  const handleStockFilter = (value) => {
    setIsInStock((prev) => (prev === value ? null : value))
  }

  const resetFilter = () => {
    setFilterMinPrice(0)
    setFilterMaxPrice(999)
    setIsInStock(null)
    setFilteredCategory('')
    setFilteredBrand('')
    setShowCount(6)
  }

  return {
    resetFilter, handleFilteredCategory, handleStockFilter, handleFilteredBrand,
    brands, visibleProducts, outOfStockCount, inStockCount, filterMinPrice, setFilterMinPrice,
    filterMaxPrice, setFilterMaxPrice, isInStock, setIsInStock, filteredCategory, setFilteredCategory,
    filteredBrand, setFilteredBrand
  }
}

