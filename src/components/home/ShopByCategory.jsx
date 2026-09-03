import { Link } from "react-router";
import { useProducts } from "../../context/ProductsContext";
import SectionTitle from "../ui/SectionTitle";
import { useCategoryFilter } from "../../context/CategoryFilterContext";

function ShopByCategory() {
    const { category } = useProducts()
    const { setFilteredcategory } = useCategoryFilter()

    const slugify = (str) =>
        str.toLowerCase().trim().replace(/\s+/g, '-');

    return (
        <section className="shop-category-main flex flex-col gap-4 p-8 overflow-x-hidden py-10 bg-(--bg-primary)">
            <div className="shop-category-content width-common flex flex-col gap-5 w-full min-w-0">

                {/* >----------------->Section-Heading<---------------< */}
                <div className="flex justify-center">
                    <SectionTitle title="Shop by Category" />
                </div>

                {/* >----------------->Cards<---------------< */}
                <div className="cards flex flex-row gap-5 overflow-x-auto w-full">
                    {category.slice(0, 7).map((cat) => (
                        <div key={cat.category} className="shrink-0">
                            <div className="h-32 w-32 md:w-42 md:h-42 overflow-hidden rounded-full group/img">
                                <img
                                    src={cat.items[0]?.image1}
                                    alt={cat.category}
                                    className="h-full w-full object-cover group-hover/img:scale-110 transition-all duration-150"
                                />
                            </div>
                            <Link to={`/shop-by-category/${slugify(cat.category)}`} onClick={() => { setFilteredcategory(cat) }}>
                                <h1 className="text-center pt-2 pb-1">
                                    {cat.category}
                                </h1>
                            </Link>
                            <h6 className="text-center text-xs text-black/60">
                                {cat.items.length} Product(s)
                            </h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopByCategory