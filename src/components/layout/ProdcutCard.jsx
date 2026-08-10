import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { Link } from 'react-router'

function ProdcutCard({ cat }) {

    const { addToCart } = useCart()
    const { toggleWishlist, isInWishlist } = useWishlist()

    return (
        <div className='card-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {cat.items.map((product) => {
                const discountedPrice = product.discount > 0
                    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
                    : null

                return (
                    <div key={product.id} className='card rounded-sm relative'>

                        {product.discount > 0 && (
                            <div className="discount-badge absolute right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr-sm flex products-center gap-1 z-5">
                                <i className="bi bi-tag-fill"></i>
                                -{product.discount}%
                            </div>
                        )}

                        <div className="card-image-main flex gap-5 relative overflow-hidden cursor-pointer rounded-t-sm">
                            {product.inStock ?
                                <>
                                    {product.stock < 5
                                        ? <div className="image-label-main py-1 w-full text-center bg-[#ffebeb] text-[#d17175] text-sm border-y border-black/20">
                                            Limited Stock
                                        </div>
                                        : null
                                    }
                                </>
                                :
                                <div className="image-label-main py-1 w-full text-center bg-[#ffebeb] text-[#d17175] text-sm border-y border-black/20">
                                    Out Of Stock
                                </div>
                            }

                            <img
                                src={product.image1}
                                alt={product.title}
                                className="product-img-1 min-w-full"
                            />
                            <img
                                src={product.image2}
                                alt={product.title}
                                className="product-img-2 min-w-full absolute inset-0"
                            />
                            <div
                                className="image-overlay text-sm"
                            >
                                {product.inStock ?
                                    <button className="cart-btn image-overlay-btn cursor-pointer py-2.5 px-2"
                                        onClick={() => { addToCart(product) }}

                                    >
                                        <i className="bi bi-cart-plus"></i> Add to cart
                                    </button>
                                    :
                                    <button className="out-stock text-xs py-2.5 px-2 cursor-not-allowed select-none opacity-65">
                                        <i className="bi bi-ban"></i> Out Of Stock
                                    </button>
                                }

                                <button
                                    className="wishlist-btn image-overlay-btn cursor-pointer py-2.5 px-3"
                                    onClick={() => { toggleWishlist(product) }}
                                >
                                    {isInWishlist(product.id)
                                        ? <i className="bi bi-heart-fill text-[#d17175]"></i>
                                        : <i className="bi bi-heart"></i>
                                    }

                                </button>
                            </div>
                        </div>

                        <div className="product-brand text-center py-2.5 text-[var(--text-light-2)] cursor-pointer text-xs font-semibold underline bg-[var(--bg-light)] flex justify-between items-center px-3">
                            <h4> {product.brand}</h4>
                            <h4>{product.inStock ? `In Stock (${product.stock})` : 'Out Of Stock'}</h4>

                        </div>

                        <div className="card-discription flex items-center justify-center flex-col py-3 gap-1">
                            <h4 className='product-title font-semibold transition-all duration-100 text-lg hover:underline hover:text-[var(--text-secondary)]'>
                                <a href="?">
                                    {product.title}
                                </a>
                            </h4>
                            <div className='product-price text-[var(--text-light-2)] text-sm font-semibold'>
                                {discountedPrice ?
                                    (<h4>
                                        <span className='mr-2 text-[#d17175]'>${discountedPrice}</span>
                                        <span className='line-through opacity-80'>${product.price}</span>
                                    </h4>)
                                    :
                                    (<h4>${product.price}</h4>)
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>    
    )
}

export default ProdcutCard