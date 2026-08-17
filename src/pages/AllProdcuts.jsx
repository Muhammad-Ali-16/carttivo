import { useState, useEffect } from 'react'
import { GetAllProducts } from '../services/api'
import ProdcutCard from '../components/layout/ProdcutCard'

function AllProdcuts() {
    
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
        <section className='prodcuts-main w-full pt-[100px]'>
            <div className='product-content-main width-common'>
                {category.map((cat, i) => (
                    <div className="card-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" key={i}>
                        {cat.items.map((product) => {
                            const discountedPrice =
                                product.discount > 0
                                    ? (
                                        product.price -
                                        (product.price * product.discount) / 100
                                    ).toFixed(2)
                                    : null;
                            return (
                                <ProdcutCard product={product} discountedPrice={discountedPrice} key={product.id} />
                            );
                        })}
                    </div>
                ))}



            </div>
        </section>
    )
}

export default AllProdcuts