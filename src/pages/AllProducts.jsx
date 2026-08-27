import { useState, useEffect, useMemo } from 'react'
import { GetAllProducts } from '../services/api'
import ProductCard from '../components/ui/ProductCard'


function AllProducts() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState([])
    const [filterMinPrice, setFilterMinPrice] = useState(0)
    const [filterMaxPrice, setFilterMaxPrice] = useState(999)
    const [isInStock, setIsInStock] = useState(null)
    const [openIndex, setOpenIndex] = useState(null)
    const [filteredCategory, setFilteredCategory] = useState('')
    const [filteredBrand, setFilteredBrand] = useState('')
    const [showCount, setShowCount] = useState(6)

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

    const resetFilter = () => {
        setFilterMinPrice(0)
        setFilterMaxPrice(999)
        setIsInStock(null)
        setFilteredCategory('')
        setFilteredBrand('')
        setShowCount(6)
    }

    const toggleAccordion = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    const handleFilteredCategory = (name) => {
        setFilteredCategory((prev) => (prev === name ? '' : name))
    }

    const handleFilteredBrand = (name) => {
        setFilteredBrand((prev) => (prev === name ? '' : name))
    }

    const handleStockFilter = (value) => {
        setIsInStock((prev) => (prev === value ? null : value))
    }

    useEffect(() => {
        GetAllProducts()
            .then((data) => {
                setCategory(data)
            })
            .catch((err) => { setError(err.message) })
            .finally(() => { setLoading(false) })
    }, [])


    const accordionItems = [
        {
            title: 'Price', content: (
                <div className="flex flex-row gap-3 items-end pb-4">
                    <div className="flex flex-col gap-1 flex-1">
                        <label htmlFor="minPrice" className="text-xs text-black/60">Min</label>
                        <div className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-black/80 pointer-events-none">$</span>
                            <input
                                id="minPrice"
                                type="number"
                                min="0"
                                value={filterMinPrice}
                                onChange={(e) => setFilterMinPrice(e.target.value === '' ? 0 : Number(e.target.value))}
                                onFocus={(e) => e.target.select()}
                                className="w-full pl-6 pr-2 py-1.5 text-sm rounded-md border border-black/15 bg-white outline-none transition-colors focus:border-(--bg-secondary) focus:ring-1 focus:ring-(--bg-secondary)"
                            />
                        </div>
                    </div>
                    <span className="pb-2.5 text-black/30 select-none">—</span>
                    <div className="flex flex-col gap-1 flex-1">
                        <label htmlFor="maxPrice" className="text-xs text-black/60">Max</label>
                        <div className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-black/80 pointer-events-none">$</span>
                            <input
                                id="maxPrice"
                                type="number"
                                min="0"
                                value={filterMaxPrice}
                                onChange={(e) => setFilterMaxPrice(e.target.value === '' ? 0 : Number(e.target.value))}
                                onFocus={(e) => e.target.select()}
                                className="w-full pl-6 pr-2 py-1.5 text-sm rounded-md border border-black/15 bg-white outline-none transition-colors focus:border-(--bg-secondary) focus:ring-1 focus:ring-(--bg-secondary)"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Availability', content: (
                <div className="flex flex-col gap-1 pb-4 text-sm">

                    <label className="flex items-center justify-between cursor-pointer rounded-md px-2 py-2 text-gray-600 transition-colors hover:bg-(--bg-light)">
                        <span className="flex items-center gap-2.5">
                            <input
                                type="checkbox"
                                checked={isInStock === true}
                                onChange={() => handleStockFilter(true)}
                                className="w-4 h-4 accent-(--bg-secondary) cursor-pointer"
                            />
                            In Stock
                        </span>
                        <span className="text-xs text-gray-500 bg-black/5 rounded-full px-2 py-0.5">{inStockCount}</span>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer rounded-md px-2 py-2 text-gray-600 transition-colors hover:bg-(--bg-light)">
                        <span className="flex items-center gap-2.5">
                            <input
                                type="checkbox"
                                checked={isInStock === false}
                                onChange={() => handleStockFilter(false)}
                                className="w-4 h-4 accent-(--bg-secondary) cursor-pointer"
                            />
                            Out Of Stock
                        </span>
                        <span className="text-xs text-gray-500 bg-black/5 rounded-full px-2 py-0.5">{outOfStockCount}</span>
                    </label>
                </div>
            )
        },
        {
            title: 'Categories', content: (
                <div className="flex flex-col gap-2 pb-4 text-sm">

                    <ul className="p-6 flex flex-col gap-5">
                        {category.map((product) => (
                            <li
                                className={`product-card flex flex-row gap-3 items-center justify-start cursor-pointer ${filteredCategory === product.category ? 'font-semibold' : ''}`}
                                key={product.category}
                                onClick={() => handleFilteredCategory(product.category)}
                            >
                                <div className="img w-8 h-8 overflow-hidden rounded-full border border-black/20">
                                    <img src={product.items[0].image1} alt={product.category} className="object-cover" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-gray-600 text-sm hover:text-(--bg-secondary)">{product.category}</h1>
                                    <span className="text-xs text-gray-600">( {product.items.length} )</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            )
        },
        {
            title: 'Brands', content: (
                <div className="flex flex-col gap-2 pb-4 text-sm">
                    <ul className="p-6 flex flex-col gap-4">
                        {brands.map((brand) => (
                            <li
                                className={`product-card flex flex-row gap-3 items-center justify-start cursor-pointer ${filteredBrand === brand ? 'font-semibold' : ''}`}
                                key={brand}
                                onClick={() => handleFilteredBrand(brand)}
                            >
                                <div className="flex items-center gap-3">
                                    <h1 className="text-gray-600 text-sm hover:text-(--bg-secondary)">{brand}</h1>
                                    <span className="text-xs text-gray-600">( {brand.length} )</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    ]

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <section className='prodcuts-main w-full pt-25 bg-(--bg-primary)'>
            <div className=" layout-main width-common py-10! flex flex-col lg:flex-row justify-between gap-10">

                <div className="side-bar h-fit lg:sticky top-26 lg:max-w-xs w-full bg-white shadow-md shadow-[#68676726] p-6">
                
                    <div className="sider-bar-top flex justify-between flex-row">
                        <h6 className="text-sm font-semibold mb-3">Filter</h6>
                        <button className="text-sm text-red-600 cursor-pointer font-semibold mb-3" onClick={() => resetFilter()}>Reset</button>
                    </div>

                    <div className="accordion-main divide-y divide-black/10 space-y-3">

                        {accordionItems.map((item, index) => (
                            <div className="accordion-item">
                                <button
                                    className="flex justify-between flex-row cursor-pointer items-center w-full font-semibold text-sm text-black/50 py-3"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.title}
                                    <i className={`bi bi-chevron-right transform transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}></i>
                                </button>
                                <div className={`transition-all duration-300 overflow-y-auto ${openIndex === index ? 'max-h-70 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {item.content}
                                </div>
                            </div>
                        ))}

                    </div>

                    {filterMinPrice > filterMaxPrice && (
                        <p className="text-xs text-red-600 mt-2">Min price is greater than max price.</p>
                    )}
                </div>

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