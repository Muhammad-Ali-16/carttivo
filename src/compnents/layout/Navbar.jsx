import { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'



function CartOverlay({ cartOverlayOpen, setCartOverlayOpen }) {

    const { cart, removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useCart()

    return (
        <div
            className={`cart-overlay-main fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 ease-in-out font-inter
                 ${cartOverlayOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`overlay-content-main absolute top-0 right-0 bg-white w-full max-w-[280px] md:max-w-[380px] h-screen flex flex-col justify-between transition-transform duration-200 ease-in-out
                 ${cartOverlayOpen ? 'translate-x-0' : 'translate-x-full'}`}
            // onClick={(e) => e.stopPropagation()}
            >
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
                    <div className="cart-items overflow-y-scroll justify-self-start w-full max-h-[62vh] [scrollbar-width:none]">

                        {cart.length === 0 ?
                            <div className='empty-cart h-[20vh] flex flex-col items-center justify-center gap-3 m-3 bg-[#eeeff1] mt-4 text-black/65'>
                                <i class="bi bi-cart2 text-3xl"></i>
                                <h5 className='text-sm'>Your shopping cart is empty!</h5>
                            </div> :
                            <table className='w-full'>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td className='border border-black text-center flex justify-center items-center m-2'>
                                                <img src={item.image1} alt={item.title} className='min-w-[120px] max-h-[120px] object-cover object-top' />
                                            </td>
                                            <td className='border border-black text-left'>
                                                <h4>{item.title}</h4>
                                            </td>
                                            <td className='border border-black text-center'>
                                                <h4>{item.quantity}</h4>
                                                <button
                                                    className={` ${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                                    onClick={() => decreaseCartQuantity(item.id)}
                                                >
                                                    <i class="bi bi-dash"></i>
                                                </button>
                                                <button
                                                    className=' cursor-pointer'
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <i class="bi bi-trash3"></i>
                                                </button>
                                                <button
                                                    className={` ${item.quantity === item.stock ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                                    onClick={() => increaseCartQuantity(item.id)}
                                                >
                                                    <i class="bi bi-plus"></i>
                                                </button>
                                            </td>
                                            <td className='border border-black text-center'>
                                                <h4>${item.price}</h4>
                                            </td>
                                            <td className='border border-black text-center'>${(item.price * item.quantity).toFixed(2)}</td>
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
                        <div className="cart-amount bg-[#f7f7f7] p-4 text-xs flex flex-col gap-3 text-black/60 font-semibold">
                            <div className="sub-total flex gap-4 justify-end">
                                <h4>Sub Total</h4>
                                <h4 className='font-bold text-black/70'>$685.71</h4>
                            </div>
                            <div className="total flex gap-4 justify-end">
                                <h4>Total</h4>
                                <h4 className='font-bold text-black/70'>$685.71</h4>
                            </div>
                        </div>
                        <div className="btn-main bg-[#eeeff1] p-4 gap-4 flex flex-col text-sm">
                            <button type="button" className='view-cart relative w-full py-2 border border-black text-black/70 bg-white hover:bg-transparent hover:text-black rounded-full cursor-pointer'>
                                View Cart
                            </button>
                            <button type="button" className='order relative w-full py-2 border border-black hover:border-[var(--bg-secondary)] bg-black/88 text-white hover:bg-[var(--bg-secondary)] rounded-full cursor-pointer'>
                                Place Order
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
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
            <nav
                className={`navbar-main absolute z-10 w-full max-lg:px-2 ${isScroll ? 'nav-scroll bg-[var(--bg-primary)] shadow-md shadow-[#6867676e]' : ''}`}
            >
                <div className="nav-content-main width-common flex justify-between items-center h-18">
                    <div className="logo flex items-center">
                        <div className={`toggle-btn lg:hidden block font-extrabold text-2xl cursor-pointer ${textColorClass}`}>
                            <i className="bi bi-text-left"></i>
                        </div>
                        <img src={`${isScroll ? '/logo.png' : '/logo-scroll.png'}`} alt="logo" className='lg:w-40 w-28' />
                    </div>
                    <ul className={`nav-items flex gap-8 uppercase text-xs font-semibold max-lg:hidden ${textColorClass}`}>
                        <li className="nav-link">
                            <a href="?">
                                Shop
                                <i
                                    className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"
                                >
                                </i>
                            </a>
                        </li>
                        <li className="nav-link cursor-pointer">
                            Full Width
                            <i
                                className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"
                            >
                            </i>
                        </li>
                        <li className="nav-link">
                            <a href="?">
                                All Products
                                <i
                                    className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"
                                >
                                </i>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="?">
                                Blog
                            </a>
                        </li>
                    </ul>
                    <div className={`feautres-main flex items-center lg:gap-6 gap-4 ${textColorClass}`}>
                        <button className="search-btn">
                            <a href="?">
                                <i className="bi bi-search text-md lg:text-lg"></i>
                            </a>
                        </button>
                        <button className="account-btn">
                            <a href="?">
                                <i className="bi bi-person text-md lg:text-xl"></i>
                            </a>
                        </button>
                        <button className="wishlist-btn relative">
                            <a href="?">
                                <i className="bi bi-heart text-md lg:text-lg"></i>
                                {wishlist.length === 0
                                    ? null
                                    : <span
                                        className='lg:h-4.5 lg:w-4.5 w-3 h-3 flex justify-center items-center bg-[var(--bg-secondary)] text-white text-[8px] lg:text-xs absolute -top-1 lg:-top-2 -right-1 lg:-right-2 rounded-full'
                                    >
                                        {wishlist.length}
                                    </span>
                                }
                            </a>
                        </button>
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