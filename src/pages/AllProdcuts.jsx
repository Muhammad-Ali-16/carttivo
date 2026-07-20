import { useState, useEffect } from 'react'
import { GetAllProdcuts } from '../services/api'


function AllProdcuts() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState([])

    useEffect(() => {

        GetAllProdcuts()
            .then((data) => {
                setCategory(data)
                console.log(data)
            })
            .catch((err) => { setError(err.message) })
            .finally(() => { setLoading(false) })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            {category.map((cat) => (
                <section>
                    <h1 className='font-bold text-2xl'>{cat.category} ({cat.items.length} items)</h1>
                    <div className='card-main flex flex-wrap gap-10 items-center justify-center'>
                        {cat.items.map((product) => (
                            <div key={product.id} className='card border-2 border-black'>
                                <h4>{product.title}</h4>
                                <div className='flex gap-5'>
                                    <img src={product.image1} alt="image1" style={{ width: 200 }} />
                                    <img src={product.image2} alt="image2" style={{ width: 200 }} />
                                </div>
                                <h4>$ {product.price}</h4>
                                <h4>{product.brand}</h4>
                                <h4>{product.inStock ? `In Stock (${product.stock})` : 'Out Of Stock'}</h4>
                                {product.discount > 0 && <h4>-{product.discount}%</h4>}
                                {product.featured && <span>Featured</span>}
                                <h4>{product.reviews} reviews</h4>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default AllProdcuts