import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'


function CartOverlay({ cartOverlayOpen, setCartOverlayOpen }) {

    const { cart, removeFromCart, } = useCart()
    const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax = subTotal * 0.08
    const total = subTotal + tax

    return (
        <div
            className={`cart-overlay-main fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 ease-in-out font-inter
                 ${cartOverlayOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`overlay-content-main absolute top-0 right-0 bg-white w-full max-w-[280px] md:max-w-[380px] h-screen flex flex-col justify-between transition-transform duration-200 ease-in-out
                 ${cartOverlayOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >

                {/* >----------------->Cart-Overlay-Top<---------------< */}
                <div className="overlay-top">
                    <div className="overlay-toggle flex justify-between items-center bg-[#eeeff1] text-[#5585b] font-semibold px-6 py-3">
                        <h6>Your Cart</h6>
                        <button
                            className='cursor-pointer'
                            onClick={() => { setCartOverlayOpen(false) }}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>

                    {/* >----------------->Cart-Overlay-Items<---------------< */}
                    <div className="cart-items overflow-y-scroll justify-self-start w-full max-h-[62vh] [scrollbar-width:none]">
                        {cart.length === 0 ?
                            <div className='empty-cart h-[20vh] flex flex-col items-center justify-center gap-3 m-3 bg-[#eeeff1] mt-4 text-black/65'>
                                <i className="bi bi-cart2 text-3xl"></i>
                                <h5 className='text-sm'>Your shopping cart is empty!</h5>
                            </div> :
                            <table className='w-full border-collapse'>

                                {/* >----------------->Cart-Content<---------------< */}
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id} className='border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors'>
                                            <td className='text-center align-middle py-3 pl-4 pr-2'>
                                                <img
                                                    src={item.image1}
                                                    alt={item.title}
                                                    className='w-16 h-16 object-cover object-top rounded-md border border-gray-200'
                                                />
                                            </td>
                                            <td className='text-left align-middle py-3 px-2'>
                                                <h4 className='text-xs font-medium text-gray-800 leading-snug line-clamp-2'>{item.title}</h4>
                                                <p className='text-[11px] text-gray-500 mt-1'>Qty: {item.quantity}</p>
                                            </td>
                                            <td className='text-center align-middle py-3 px-2'>
                                                <h4 className='text-xs font-semibold text-gray-700 whitespace-nowrap'>${item.price}</h4>
                                            </td>
                                            <td className='text-center align-middle py-3 pr-4 pl-1'>
                                                <button
                                                    className='w-6 h-6 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 transition cursor-pointer'
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <i className="bi bi-trash3 text-xs"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>

                {cart.length === 0 ?
                    null :
                    <div className="overlay-bottom">

                        {/* >----------------->Cart-Summary<---------------< */}
                        <div className="cart-amount bg-[#f7f7f7] p-4 text-xs flex flex-col gap-3 text-black/60 font-semibold">
                            <div className="sub-total flex gap-4 justify-end">
                                <h4>Sub Total</h4>
                                <h4 className='font-bold text-black/70'>${subTotal.toFixed(2)}</h4>
                            </div>

                            <div className="tax flex gap-4 justify-end">
                                <h4>Tax</h4>
                                <h4 className='font-bold text-black/70'>${tax.toFixed(2)}</h4>
                            </div>

                            <div className="total flex gap-4 justify-end">
                                <h4>Total</h4>
                                <h4 className='font-bold text-black/70'>${total.toFixed(2)}</h4>
                            </div>
                        </div>

                        {/* >----------------->Cart-Buttons<---------------< */}
                        <div className="btn-main bg-[#eeeff1] p-4 gap-4 flex flex-col text-sm">
                            <button type="button" className='view-cart relative w-full py-2 border border-black text-black/70 bg-white hover:bg-transparent hover:text-black rounded-full cursor-pointer'>
                                <Link to="/cart">
                                    View Cart
                                </Link>
                            </button>
                            <button type="button" className='order relative w-full py-2 border border-black hover:border-[var(--bg-secondary)] bg-black/88 text-white hover:bg-[var(--bg-secondary)] rounded-full cursor-pointer'>
                                <Link to='/cart'>
                                    Place Order
                               </Link>
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}


function Navbar() {

    const { cart } = useCart()
    const { wishlist } = useWishlist()

    const [isScroll, setIsScroll] = useState(false)
    const [cartOverlayOpen, setCartOverlayOpen] = useState(false)


    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (ticking) return
            ticking = true

            requestAnimationFrame(() => {
                setIsScroll(window.scrollY > 60)
                ticking = false
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    const textColorClass = isScroll ? 'text-[var(--text-dark)]' : 'text-[var(--text-light)]'

    return (
        <header className=' relative'>
            <CartOverlay cartOverlayOpen={cartOverlayOpen} setCartOverlayOpen={setCartOverlayOpen} />

            {/* >----------------->NavBar<---------------< */}
            <nav
                className={`navbar-main absolute z-10 w-full max-lg:px-2 ${isScroll ? 'nav-scroll bg-[var(--bg-primary)] shadow-md shadow-[#6867676e]' : ''}`}
            >
                <div className="nav-content-main width-common flex justify-between items-center h-18">

                    {/* >----------------->Logo<---------------< */}
                    <div className="logo flex items-center">
                        <div className={`toggle-btn lg:hidden block font-extrabold text-2xl cursor-pointer ${textColorClass}`}>
                            <i className="bi bi-text-left"></i>
                        </div>
                        <img src={`${isScroll ? '/logo.png' : '/logo-scroll.png'}`} alt="logo" className='lg:w-40 w-28' />
                    </div>

                    {/* >----------------->Nav-Links<---------------< */}
                    <ul className={`nav-items flex gap-8 uppercase text-xs font-semibold max-lg:hidden ${textColorClass}`}>
                        <li className="nav-link">
                            <Link to="/footer">
                                Shop
                                <i
                                    className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"
                                >
                                </i>
                            </Link>
                        </li>
                        <li className="nav-link cursor-pointer">
                            Full Width
                            <i
                                className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"
                            >
                            </i>
                        </li>
                        <li className="nav-link">
                            <Link to="/">
                                All Products
                                <i
                                    className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"
                                >
                                </i>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/">
                                Blog
                            </Link>
                        </li>
                    </ul>

                    <div className={`feautres-main flex items-center lg:gap-6 gap-4 ${textColorClass}`}>

                        {/* >----------------->Search<---------------< */}
                        <button className="search-btn">
                            <Link to="/">
                                <i className="bi bi-search text-md lg:text-lg"></i>
                            </Link>
                        </button>

                        {/* >----------------->Account<---------------< */}
                        <button className="account-btn">
                            <Link to="/">
                                <i className="bi bi-person text-md lg:text-xl"></i>
                            </Link>
                        </button>

                        {/* >----------------->WishList<---------------< */}
                        <button className="wishlist-btn relative">
                            <Link to="/wishlist">
                                <i className="bi bi-heart text-md lg:text-lg"></i>
                                {wishlist.length === 0
                                    ? null
                                    : <span
                                        className='lg:h-4.5 lg:w-4.5 w-3 h-3 flex justify-center items-center bg-[var(--bg-secondary)] text-white text-[8px] lg:text-xs absolute -top-1 lg:-top-2 -right-1 lg:-right-2 rounded-full'
                                    >
                                        {wishlist.length}
                                    </span>
                                }
                            </Link>
                        </button>

                        {/* >----------------->Cart<---------------< */}
                        <button className="cart-btn relative cursor-pointer"
                            onClick={() => { setCartOverlayOpen(true) }}
                        >
                                <i className="bi bi-cart2 text-md lg:text-xl"></i>
                                {cart.length === 0
                                    ? null
                                    : <span
                                        className='lg:h-4.5 lg:w-4.5 w-3 h-3 flex justify-center items-center bg-[var(--bg-secondary)] text-white text-[8px] lg:text-xs absolute -top-1 lg:-top-2 -right-1 lg:-right-2 rounded-full'
                                    >
                                        {cart.length}
                                    </span>
                                }
                        </button>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar