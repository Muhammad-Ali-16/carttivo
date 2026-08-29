import { useState, useEffect } from 'react'
import { GetAllProducts } from '../services/api'

export function useProducts() {

  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    GetAllProducts()
      .then(setCategory)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { category, loading, error }
}

