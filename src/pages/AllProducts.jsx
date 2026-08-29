import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useProductFilters } from '../hooks/useProductFilters'
import ProductCard from '../components/ui/ProductCard'
import Accordion from '../components/products/accordion'
import Sidebar from '../components/products/sidebar'


function AllProducts() {

    const [showCount, setShowCount] = useState(6)

    const { visibleProducts } = useProductFilters()

    return (
        <section className='prodcuts-main w-full pt-25 bg-(--bg-primary)'>
            <div className=" layout-main width-common py-10! flex flex-col lg:flex-row justify-between gap-10">

                <Sidebar />

                <div className='section-content flex flex-col'>

                    <div className="dropdown flex items-center gap-2 mb-5 text-sm">
                        <label htmlFor="showCount" className="text-black/60">Show</label>
                        <select
                            id="showCount"
                            value={showCount}
                            onChange={(e) => setShowCount(Number(e.target.value))}
                            className="border border-black/15 rounded-md px-2 py-1 outline-none focus:border-(--bg-secondary) cursor-pointer"
                        >
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={18}>18</option>
                        </select>
                    </div>

                    <div className="cards-main grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {visibleProducts.slice(0, showCount).map((product, i) => {
                            const discountedPrice =
                                product.discount > 0
                                    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
                                    : null;
                            return (
                                <ProductCard
                                    key={i}
                                    product={product}
                                    discountedPrice={discountedPrice}
                                />
                            )
                        })}
                    </div>

                    {visibleProducts.length !== 0 && (
                        <button
                            className="self-center mt-10 px-8 py-2.5 text-sm font-semibold rounded-full border border-(--bg-secondary) text-(--bg-secondary) cursor-pointer transition-colors duration-300 hover:bg-(--bg-secondary) hover:text-white disabled:cursor-not-allowed"
                            onClick={() => setShowCount(showCount + 6)}
                            disabled={showCount > visibleProducts.length}
                        >
                            Load More
                        </button>
                    )}

                    {visibleProducts.length === 0 && (
                        <p className="text-sm text-black/60 mt-6">No products match the selected filters.</p>
                    )}

                </div>

            </div>
        </section>
    )
}

export default AllProducts