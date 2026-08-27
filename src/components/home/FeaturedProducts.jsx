import { useState, useEffect } from 'react'
import { GetAllProducts } from '../../services/api'
import ProductCard from '../ui/ProductCard'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

function FeaturedProducts() {

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

    return (
        <section className="featured-products-main flex flex-col gap-4 p-8 overflow-hidden py-10 bg-(--bg-primary)">
            <div className="featured-products-content width-common flex flex-col justify-center items-center gap-5 w-full min-w-0">

                <SectionTitle title="Featured Products" />

                {loading && <p className="text-center">Loading Products...</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}

                {!loading && !error && (
                    <div className="card-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {category
                            .flatMap((cat) => cat.items)
                            .filter((item) => item.featured)
                            .slice(0, 8)
                            .map((product, i) => {
                                const discountedPrice =
                                    product.discount > 0
                                        ? (
                                            product.price -
                                            (product.price * product.discount) / 100
                                        ).toFixed(2)
                                        : null;
                                return (
                                    <ProductCard product={product} discountedPrice={discountedPrice} key={product.id} />
                                );
                            })
                        }
                    </div>
                )}

                <Button path="/all-products" text="See all products"/>
            </div>
        </section>
    )
}

export default FeaturedProducts