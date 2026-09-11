import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

const money = (n) => `$${n.toFixed(2)}`

const unitPrice = (item) =>
    item.discount > 0 ? item.price - (item.price * item.discount) / 100 : item.price;

const inputClass =
    'w-full bg-(--bg-primary) border border-black/10 px-3 py-2.5 text-sm text-black/80 outline-none focus:border-(--bg-secondary) transition-colors'
const labelClass = 'block text-xs font-semibold text-black/55 mb-1.5'

function Panel({ step, title, children }) {
    return (
        <div className="bg-white shadow-md shadow-[#68676726] p-5 md:p-7">
            <h2 className="flex items-center gap-3 text-base font-semibold text-black/85 pb-4 border-b border-black/10">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-(--bg-secondary) text-white text-xs">
                    {step}
                </span>
                {title}
            </h2>
            <div className="pt-5">{children}</div>
        </div>
    )
}

function EmptyCheckout() {
    return (
        <section className="checkout-main bg-(--bg-primary) py-12">
            <div className="width-common flex flex-col items-center text-center gap-5 py-20 md:py-28">
                <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#eeeff1] text-black/45 text-3xl">
                    <i className="bi bi-bag-check"></i>
                </div>
                <h2 className="text-2xl font-semibold text-black/85">There is nothing to check out</h2>
                <p className="text-sm text-black/60 max-w-md">
                    Add a few items to your cart and come back to complete your order.
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

function Checkout() {
    const { cart } = useCart()


    if (cart.length === 0) return <EmptyCheckout />

    const subtotal = cart.reduce((sum, item) => sum + unitPrice(item) * item.quantity, 0)
    const tax = subtotal * 0.08
    const total = subtotal + tax

    return (
        <section className="checkout-main bg-(--bg-primary) font-Inter py-12">
            <div className="width-common py-10 md:py-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                {/* >----------------->Checkout-Form<---------------< */}
                <div className="checkout-form lg:col-span-2 flex flex-col gap-6">

                    {/* >----------------->Contact-Details<---------------< */}
                    <Panel step="1" title="Contact details">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className={labelClass}>Email address</label>
                                <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="phone" className={labelClass}>Phone number</label>
                                <input id="phone" name="phone" type="tel" placeholder="+1 800 555 8899" className={inputClass} />
                            </div>
                        </div>
                        <label className="flex items-center gap-2.5 mt-4 text-xs text-black/55">
                            <input type="checkbox" className="accent-(--bg-secondary)" />
                            Email me with news and offers
                        </label>
                    </Panel>

                    {/* >----------------->Shipping-Address<---------------< */}
                    <Panel step="2" title="Shipping address">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className={labelClass}>First name</label>
                                <input id="firstName" name="firstName" type="text" placeholder="First name" className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="lastName" className={labelClass}>Last name</label>
                                <input id="lastName" name="lastName" type="text" placeholder="Last name" className={inputClass} />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="address" className={labelClass}>Street address</label>
                                <input id="address" name="address" type="text" placeholder="123 Main Street" className={inputClass} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="apartment" className={labelClass}>Apartment, suite, etc. (optional)</label>
                                <input id="apartment" name="apartment" type="text" placeholder="Apartment or suite" className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="city" className={labelClass}>City</label>
                                <input id="city" name="city" type="text" placeholder="City" className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="postalCode" className={labelClass}>Postal code</label>
                                <input id="postalCode" name="postalCode" type="text" placeholder="Postal code" className={inputClass} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="country" className={labelClass}>Country / region</label>
                                <select id="country" name="country" className={inputClass}>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                    <option>Pakistan</option>
                                </select>
                            </div>
                        </div>

                        <label className="flex items-center gap-2.5 mt-4 text-xs text-black/55">
                            <input type="checkbox" defaultChecked className="accent-(--bg-secondary)" />
                            Use this address for billing as well
                        </label>
                    </Panel>


                    {/* >----------------->Back-To-Cart<---------------< */}
                    <Link
                        to="/cart"
                        className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-(--text-secondary) transition-colors"
                    >
                        <i className="bi bi-arrow-left"></i> Back to cart
                    </Link>
                </div>

                {/* >----------------->Order-Summary<---------------< */}
                <div className="order-summary lg:sticky lg:top-26 h-fit">
                    <div className="bg-white shadow-md shadow-[#68676726] p-6">
                        <h2 className="text-base font-semibold text-black/85 pb-4 border-b border-black/10">Your order</h2>

                        {/* >----------------->Item-List<---------------< */}
                        <ul className="flex flex-col gap-4 py-4 max-h-80 overflow-y-auto scrollbar-none">
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-center gap-3">
                                    <div className="relative w-14 h-16 shrink-0 overflow-hidden rounded-md bg-[#eeeff1]">
                                        <img
                                            src={item.image1}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                        <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-(--bg-secondary) text-white text-[10px]">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-xs font-medium text-black/80 leading-snug line-clamp-2">{item.title}</h4>
                                        {item.brand && <p className="text-[11px] text-black/45 mt-0.5">{item.brand}</p>}
                                    </div>
                                    <span className="text-xs font-semibold text-black/85 whitespace-nowrap">
                                        {money(unitPrice(item) * item.quantity)}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* >----------------->Discount-Code<---------------< */}
                        <div className="flex gap-2 py-4 border-t border-black/10">
                            <input type="text" placeholder="Discount code" className={inputClass} />
                            <button
                                type="button"
                                className="shrink-0 px-4 rounded-full text-xs font-semibold border border-black/80 text-black/80 hover:bg-black/85 hover:text-(--text-light) transition-colors cursor-pointer"
                            >
                                Apply
                            </button>
                        </div>

                        {/* >----------------->Price-Breakdown<---------------< */}
                        <div className="flex flex-col gap-3 py-4 border-t border-black/10 text-sm text-black/60">
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
                                <span className="font-semibold text-black/80">
                                    Free
                                </span>
                            </div>
                        </div>

                        {/* >----------------->Total<---------------< */}
                        <div className="flex items-baseline justify-between py-4 border-t border-black/10">
                            <span className="text-sm font-semibold text-black/70">Total</span>
                            <span className="text-2xl font-bold text-(--text-secondary)">{money(total)}</span>
                        </div>

                        {/* >----------------->Place-Order-Button<---------------< */}
                        <button
                            type="button"
                            className="w-full py-3 rounded-full text-sm font-semibold bg-black/88 hover:bg-(--bg-secondary) text-white transition-colors cursor-pointer"
                        >
                            <Link to='/'>
                                Place Order
                            </Link>
                        </button>

                        <p className="flex items-center justify-center gap-1.5 mt-3 text-xs text-black/45">
                            <i className="bi bi-lock"></i> Secure checkout · Free 30-day returns
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Checkout
