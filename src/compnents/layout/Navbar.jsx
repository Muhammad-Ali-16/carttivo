import React from 'react'
import { useState, useEffect } from 'react'

function Navbar() {

    const [isScroll, setIsScroll] = useState(false)

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
        <nav
            className={`navbar-main absolute z-10 w-full max-lg:px-2 max-lg:bg-[var(--bg-primary)] ${isScroll ? 'nav-scroll bg-[var(--bg-primary)] shadow-md shadow-[#6867676e]' : ''}`}
        >
            <div className="nav-content-main flex justify-between items-center mx-auto max-w-7xl h-18">
                <div className="logo flex items-center">
                    <div className="toggle-btn lg:hidden block max-lg:text-[var(--text-dark)] font-extrabold text-2xl cursor-pointer">
                        <i className="bi bi-text-left"></i>
                        </div>
                    <img src={`${isScroll ? '/logo.png' : '/logo-scroll.png'}`} alt="logo" className='lg:w-40 lg:block hidden' />
                    <img src='/logo.png' alt="logo" className='lg:hidden block w-28' />
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
                <div className={`feautres-main flex items-center lg:gap-6 gap-4 max-lg:text-[var(--text-dark)] ${textColorClass}`}>
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
                    <button className="wishlist-btn">
                        <a href="?">
                            <i className="bi bi-heart text-md lg:text-lg"></i>
                        </a>
                    </button>
                    <button className="cart-btn">
                        <a href="?">
                            <i className="bi bi-cart2 text-md lg:text-xl"></i>
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar