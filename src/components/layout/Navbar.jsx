import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import CartOverlay from './CartOverlay'

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
           
           <CartOverlay cartOverlayOpen={cartOverlayOpen} setCartOverlayOpen={setCartOverlayOpen}/>

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