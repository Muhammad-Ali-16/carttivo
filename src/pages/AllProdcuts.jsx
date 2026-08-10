import { useState, useEffect } from 'react'
import { GetAllProdcuts } from '../services/api'
import ProdcutCard from '../components/layout/ProdcutCard'

function AllProdcuts() {

   

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState([])

    useEffect(() => {

        GetAllProdcuts()
            .then((data) => {
                setCategory(data)
            })
            .catch((err) => { setError(err.message) })
            .finally(() => { setLoading(false) })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <section className='prodcuts-main w-full pt-[100px]'>
            <div className='product-content-main width-common'>
                         {category.map((cat, i) => (
                 <ProdcutCard cat={cat} key={i}/>
          ))}
       
                 </div>
        </section>
    )
}

export default AllProdcuts