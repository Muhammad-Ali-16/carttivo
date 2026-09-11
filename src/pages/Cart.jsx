import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

const money = (n) => `$${n.toFixed(2)}`

const unitPrice = (item) =>
    item.discount > 0 ? item.price - (item.price * item.discount) / 100 : item.price

function EmptyCart() {
    return (
        <section className="cart-main bg-(--bg-primary) py-12">
            <div className="width-common flex flex-col items-center text-center gap-5 py-20 md:py-28">
                <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#eeeff1] text-black/45 text-3xl">
                    <i className="bi bi-cart2"></i>
                </div>
                <h2 className="text-2xl font-semibold text-black/85">Your cart is empty</h2>
                <p className="text-sm text-black/60 max-w-md">
                    You haven’t added anything yet. Browse the collection and find something you love.
                </p>
                <Link
                    to="/all-products"
                    className="mt-2 bg-black/85 hover:bg-(--bg-secondary) text-(--text-light) px-7 py-3 rounded-full text-sm transition-colors"
                >
                    Start shopping <i className="bi bi-arrow-right ms-1"></i>
                </Link>
            </div>
        </section>
    )
}

function QuantityStepper({ item, increaseCartQuantity, decreaseCartQuantity }) {
    const atMin = item.quantity <= 1
    const atMax = item.quantity >= item.stock

    return (
        <div className="inline-flex items-center rounded-full border border-black/15 select-none">
            <button
                className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${atMin ? 'text-black/25 cursor-not-allowed' : 'text-black/70 hover:bg-black/5 cursor-pointer'}`}
                onClick={() => decreaseCartQuantity(item.id)}
                disabled={atMin}
                aria-label="Decrease quantity"
            >
                <i className="bi bi-dash-lg text-xs"></i>
            </button>
            <span className="w-8 text-center text-sm font-semibold text-black/80">{item.quantity}</span>
            <button
                className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${atMax ? 'text-black/25 cursor-not-allowed' : 'text-black/70 hover:bg-black/5 cursor-pointer'}`}
                onClick={() => increaseCartQuantity(item.id)}
                disabled={atMax}
                aria-label="Increase quantity"
            >
                <i className="bi bi-plus-lg text-xs"></i>
            </button>
        </div>
    )
}

function Cart() {
    const { cart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useCart()

    if (cart.length === 0) return <EmptyCart />

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cart.reduce((sum, item) => sum + unitPrice(item) * item.quantity, 0)
    const tax = subtotal * 0.08
    const total = subtotal + tax

    return (
        <section className="cart-main bg-(--bg-primary) font-Inter py-12">
            <div className="width-common py-10 md:py-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                {/* >----------------->Cart-Items<---------------< */}
                <div className="cart-items bg-white shadow-md shadow-[#68676726] p-5 md:p-7 lg:col-span-2">
                    <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
                        <h1 className="text-lg font-semibold text-black/85">Shopping cart</h1>
                        <span className="text-sm text-black/50">{itemCount} item{itemCount > 1 ? 's' : ''}</span>
                    </div>

                    <ul>
                        {cart.map((item) => {
                            const price = unitPrice(item)
                            const hasDiscount = item.discount > 0
                            return (
                                <li key={item.id} className="flex gap-4 py-5 border-b border-black/8 last:border-b-0">
                                    <div className="w-20 h-24 sm:w-24 sm:h-28 shrink-0 overflow-hidden rounded-md bg-[#eeeff1]">
                                        <img
                                            src={item.image1}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col gap-3 min-w-0">
                                        <div className="flex justify-between gap-3">
                                            <div className="min-w-0">
                                                {item.brand && (
                                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-(--text-secondary)">{item.brand}</p>
                                                )}
                                                <h4 className="text-lg font-semibold text-black/80 line-clamp-2">{item.title}</h4>
                                                <div className="mt-1 text-xs text-black/50">
                                                    {hasDiscount ? (
                                                        <span>
                                                            <span className="text-[#d17175] font-semibold">{money(price)}</span>
                                                            <span className="line-through ms-2">{money(item.price)}</span>
                                                            <span className="ms-1">each</span>
                                                        </span>
                                                    ) : (
                                                        <span>{money(price)} each</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <p className="text-sm font-semibold text-black/85 whitespace-nowrap">{money(price * item.quantity)}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <QuantityStepper
                                                item={item}
                                                increaseCartQuantity={increaseCartQuantity}
                                                decreaseCartQuantity={decreaseCartQuantity}
                                            />
                                            <button
                                                className="flex items-center gap-1.5 text-xs text-black/45 hover:text-red-500 transition-colors cursor-pointer"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <i className="bi bi-trash3"></i>
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <Link
                        to="/all-products"
                        className="inline-flex items-center gap-2 mt-5 text-sm text-black/60 hover:text-(--text-secondary) transition-colors"
                    >
                        <i className="bi bi-arrow-left"></i> Continue shopping
                    </Link>
                </div>

                {/* >----------------->Order-Summary<---------------< */}
                <div className="order-summary lg:sticky lg:top-26 h-fit">
                    <div className="bg-white shadow-md shadow-[#68676726] p-6">
                        <h2 className="text-base font-semibold text-black/85 pb-4 border-b border-black/10">Order summary</h2>

                        <div className="flex flex-col gap-3 py-4 text-sm text-black/60">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold text-black/80">{money(subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimated tax</span>
                                <span className="font-semibold text-black/80">{money(tax)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="font-semibold text-black/80">Free</span>
                            </div>
                        </div>

                        <div className="flex items-baseline justify-between py-4 border-t border-black/10">
                            <span className="text-sm font-semibold text-black/70">Total</span>
                            <span className="text-2xl font-bold text-(--text-secondary)">{money(total)}</span>
                        </div>

                        <Link
                            to="/checkout"
                            className="block w-full py-3 rounded-full text-sm font-semibold text-center bg-black/88 hover:bg-(--bg-secondary) text-white transition-colors"
                        >
                            Place Order
                        </Link>

                        <p className="flex items-center justify-center gap-1.5 mt-3 text-xs text-black/45">
                            <i className="bi bi-lock"></i> Secure checkout · Free 30-day returns
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
   
export default Cart



