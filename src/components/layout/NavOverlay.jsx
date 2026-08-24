import { useState } from 'react'
import { Link } from 'react-router'

function NavOverlay({ navOverlayOpen, setNavOverlayOpen, category }) {
  const [limit, setLimit] = useState(5)

  const navItems = [
    { text: 'Home', link: '/', icon: 'bi-house' },
    { text: 'Account', link: '/account', icon: 'bi-person' },
    { text: 'Contact', link: '/contact', icon: 'bi-envelope' },
    { text: 'Blog', link: '/blog', icon: 'bi-layout-text-window' },
    { text: 'FAQ', link: '/faq', icon: 'bi-question-circle-fill' },
    { text: 'About us', link: '/about', icon: 'bi-file-person' },
    { text: '404 Page', link: '/error-page', icon: 'bi-bug' },
  ]

  const socialLinks = [
    { link: '/', icon: 'bi-facebook' },
    { link: '/', icon: 'bi-instagram' },
    { link: '/', icon: 'bi-twitter-x' },
    { link: '/', icon: 'bi-youtube' },
    { link: '/', icon: 'bi-tiktok' },
  ]

  return (
    <div
      className={`nav-overlay-main fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 ease-in-out lg:hidden
                 ${navOverlayOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        className={`overlay-content-main absolute top-0 left-0 bg-white w-full max-w-70 md:max-w-95 overflow-y-auto h-screen flex flex-col justify-between transition-transform duration-200 ease-in-out
                 ${navOverlayOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* >----------------->Nav-Overlay-Top<---------------< */}
        <div className="overlay-top font-inter">
          <div className="overlay-toggle flex justify-between items-center bg-[#eeeff1] text-[#5585b] font-semibold px-6 py-3">
            <h6 className='font-urbanist'>Menu</h6>
            <button
              className='cursor-pointer'
              onClick={() => { setNavOverlayOpen(false) }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        {/* >----------------->Nav-Overlay-Links<---------------< */}
        <ul className="p-6 flex flex-col gap-5">
          {category.slice(0, limit).map((product) => (
            <li className="product-card flex flex-row gap-3 items-center justify-start" key={product.category}>
              <div className="img w-8 h-8 overflow-hidden rounded-full border border-black/20">
                <img src={product.items[0].image1} alt={product.category} className="object-cover" />
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-gray-600 text-sm hover:text-(--bg-secondary)">{product.category}</h1>
                <span className="text-xs text-gray-600">( {product.items.length} )</span>
              </div>
            </li>
          ))}
          <button
            onClick={() => { setLimit(limit + 5) }}
            className={`text-sm ${limit > category.length ? 'cursor-not-allowed select-none opacity-70' : 'cursor-pointer opacity-100'}`}
          >Show more...</button>
        </ul>

        {/* >----------------->Nav-Overlay-Bottom<---------------< */}
        <div className="overlay-bottom bg-[#eeeff1] m-5 text-sm text-gray-600">
          <div className="content-main p-3">
            <ul className="flex flex-col gap-4 p-4">
              {navItems.map((item, i) => (
                <li className="hover:text-(--text-secondary)" key={i}>
                  <Link to={item.link}>
                    <i className={`me-2 bi ${item.icon}`}></i> {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* >----------------->Social-Links<---------------< */}
            <div className="social-links border-t border-black/15 p-4 flex flex-row gap-4 text-md text-black/60">
              {socialLinks.map((link, i) => (
                <Link to={link.link} className="hover:text-(--text-secondary)" key={i}>
                  <i className={`bi ${link.icon}`}></i>
                </Link>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default NavOverlay