import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";


function ProductCardSmall({ item, number, discountedPrice }) {

    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    return (
        <>
            <div className="card-content flex flex-row justify-center items-center gap-2">
                <img
                    src={item.image1}
                    alt={item.title}
                    className="w-20 h-20 object-cover bg-center rounded-sm"
                />
                {/* >----------------->Card-Discription<---------------< */}
                <div className="discription">
                    <h1 className="text-black/50 font-semibold text-xs"> {item.title}</h1>
                    {discountedPrice ? (
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <span className=" text-black/70">
                                ${discountedPrice}
                            </span>
                            <s className=" text-red-500">
                                ${item.price}
                            </s>
                        </div>
                    ) : (
                        <span className="text-black/70">
                            ${item.price}
                        </span>
                    )}

                    <div className="text-xs text-black/60">
                        {/* >----------------->Cart-Button<---------------< */}
                        {item.inStock ? (
                            <button
                                className="cart-btn cursor-pointer"
                                onClick={() => {
                                    addToCart(item);
                                }}
                            >
                                <i className="bi bi-cart-plus"></i>
                            </button>
                        ) : (
                            <button className="out-stock cursor-not-allowed select-none">
                                <i className="bi bi-ban"></i>
                            </button>
                        )}

                        {/* >----------------->Wishlist-Button<---------------< */}
                        <button
                            className="wishlist-btn cursor-pointer py-2.5 px-3"
                            onClick={() => {
                                toggleWishlist(item);
                            }}
                        >
                            {isInWishlist(item.id) ? (
                                <i className="bi bi-heart-fill text-[#d17175]"></i>
                            ) : (
                                <i className="bi bi-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* >----------------->Product-Number<---------------< */}
            {number && (
                <div className="number">
                    <h1
                        className="text-5xl"
                        style={{
                            WebkitTextStroke:
                                "1px rgba(12, 12, 12, 0.65)",
                            color: "transparent",
                        }}
                    >
                        {number + 1}
                    </h1>
                </div>
            )}
        </>
    )
}

export default ProductCardSmall