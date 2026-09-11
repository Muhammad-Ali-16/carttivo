import { Link } from 'react-router'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { useProductDetails } from '../context/ProductDetailsContext'

const money = (n) => `$${Number(n).toFixed(2)}`

const slugify = (str) => str.toLowerCase().trim().replace(/\s+/g, '-')

const unitPrice = (item) =>
    item.discount > 0 ? item.price - (item.price * item.discount) / 100 : item.price

function EmptyWishlist() {
    return (
        <section className="wishlist-main bg-(--bg-primary) py-12">
            <div className="width-common flex flex-col items-center text-center gap-5 py-20 md:py-28">
                <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#eeeff1] text-black/45 text-3xl">
                    <i className="bi bi-heart"></i>
                </div>
                <h2 className="text-2xl font-semibold text-black/85">Your wishlist is empty</h2>
                <p className="text-sm text-black/60 max-w-md">
                    Tap the heart on any product to save it here for later.
                </p>
                <Link
                    to="/all-products"
                    className="mt-2 bg-black/85 hover:bg-(--bg-secondary) text-(--text-light) px-7 py-3 rounded-full text-sm transition-colors"
                >
                    Explore products <i className="bi bi-arrow-right ms-1"></i>
                </Link>
            </div>
        </section>
    )
}

function WishlistCard({ item, addToCart, toggleWishlist, setSelectedProduct }) {
    const price = unitPrice(item)
    const hasDiscount = item.discount > 0

    return (
        <div className="wishlist-item group relative flex flex-col bg-white shadow-md shadow-[#68676726] overflow-hidden">

            {/* >----------------->Image<---------------< */}
            <div className="relative overflow-hidden bg-[#eeeff1] aspect-square">
                {hasDiscount && (
                    <div className="absolute top-0 right-0 z-2 flex items-center gap-1 bg-red-600 text-white text-xs px-2 py-1">
                        <i className="bi bi-tag-fill"></i>-{item.discount}%
                    </div>
                )}

                {(!item.inStock || item.stock < 5) && (
                    <div className="absolute top-0 left-0 z-2 w-full text-center py-1 px-2 bg-[#ffebeb] text-[#d17175] text-xs border-b border-black/15">
                        {item.inStock ? 'Limited Stock' : 'Out Of Stock'}
                    </div>
                )}

                <Link
                    to={`/product-details/${slugify(item.title)}`}
                    onClick={() => setSelectedProduct(item)}
                    aria-label={item.title}
                >
                    <img
                        src={item.image1}
                        alt={item.title || ''}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                <button
                    className="absolute bottom-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/95 text-black/55 hover:text-red-500 shadow-sm cursor-pointer transition-colors"
                    onClick={() => toggleWishlist(item)}
                    aria-label="Remove from wishlist"
                >
                    <i className="bi bi-trash3 text-sm"></i>
                </button>
            </div>

            {/* >----------------->Details<---------------< */}
            <div className="flex flex-1 flex-col p-4 gap-2">
                {item.brand && (
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-(--text-secondary)">{item.brand}</p>
                )}

                <h4 className="text-lg font-semibold text-black/80 line-clamp-2 hover:text-(--text-secondary) transition-colors">
                    <Link to={`/product-details/${slugify(item.title)}`} onClick={() => setSelectedProduct(item)}>
                        {item.title}
                    </Link>
                </h4>

                <div className="text-sm mt-auto pt-1">
                    {hasDiscount ? (
                        <span>
                            <span className="text-[#d17175] font-semibold">{money(price)}</span>
                            <span className="line-through text-black/40 text-xs ms-2">{money(item.price)}</span>
                        </span>
                    ) : (
                        <span className="font-semibold text-black/80">{money(price)}</span>
                    )}
                </div>

                {item.inStock ? (
                    <button
                        type="button"
                        className="mt-3 w-full py-2.5 rounded-full text-sm font-semibold bg-black/85 hover:bg-(--bg-secondary) text-(--text-light) transition-colors cursor-pointer"
                        onClick={() => addToCart(item)}
                    >
                        <i className="bi bi-cart-plus me-1.5"></i> Add to cart
                    </button>
                ) : (
                    <button
                        type="button"
                        disabled
                        className="mt-3 w-full py-2.5 rounded-full text-sm font-semibold border border-black/15 text-black/35 cursor-not-allowed select-none"
                    >
                        <i className="bi bi-ban me-1.5"></i> Out of stock
                    </button>
                )}
            </div>
        </div>
    )
}

function Wishlist() {
    const { wishlist, toggleWishlist } = useWishlist()
    const { addToCart } = useCart()
    const { setSelectedProduct } = useProductDetails()

    if (wishlist.length === 0) return <EmptyWishlist />

    return (
        <section className="wishlist-main bg-(--bg-primary) font-Inter py-12">
            <div className="width-common py-10 md:py-14">

                <div className="flex items-baseline justify-between border-b border-black/10 pb-4 mb-7">
                    <h1 className="text-lg font-semibold text-black/85">Saved items</h1>
                    <span className="text-sm text-black/50">
                        {wishlist.length} item{wishlist.length > 1 ? 's' : ''}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                    {wishlist.map((item) => (
                        <WishlistCard
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            toggleWishlist={toggleWishlist}
                            setSelectedProduct={setSelectedProduct}
                        />
                    ))}
                </div>

                <Link
                    to="/all-products"
                    className="inline-flex items-center gap-2 mt-8 text-sm text-black/60 hover:text-(--text-secondary) transition-colors"
                >
                    <i className="bi bi-arrow-left"></i> Continue shopping
                </Link>
            </div>
        </section>
    )
}

export default Wishlist
