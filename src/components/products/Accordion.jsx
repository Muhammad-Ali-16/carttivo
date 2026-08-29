import { useState } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useProductFilters } from '../../hooks/useProductFilters'

function Accordion() {

    const [openIndex, setOpenIndex] = useState(null)

    const { category, error } = useProducts()

    const { handleFilteredCategory, handleStockFilter, handleFilteredBrand,
        brands, outOfStockCount, inStockCount, filterMinPrice, setFilterMinPrice,
        filterMaxPrice, setFilterMaxPrice, isInStock, filteredCategory, filteredBrand
    } = useProductFilters()


    const toggleAccordion = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }

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

    if (error) return <p>{error}</p>

    return (
        <div className="accordion-main divide-y divide-black/10 space-y-3">

            {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
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
    )
}

export default Accordion