import {Link} from 'react-router'

function NavOverlay({navOverlayOpen, setNavOverlayOpen, category}) {
  return (
     <div
            className={`nav-overlay-main fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 ease-in-out lg:hidden
                 ${navOverlayOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <div
              className={`overlay-content-main absolute top-0 left-0 bg-white w-full max-w-[280px] md:max-w-[380px] overflow-y-auto h-screen flex flex-col justify-between transition-transform duration-200 ease-in-out
                 ${navOverlayOpen ? 'translate-x-0' : '-translate-x-full'}`}
              onClick={(e) => e.stopPropagation()}
            >

              {/* >----------------->Nav-Overlay-Top<---------------< */}
              <div className="overlay-top font-inter">
                <div className="overlay-toggle flex justify-between items-center bg-[#eeeff1] text-[#5585b] font-semibold px-6 py-3 font-urbanist">
                  <h6>Menu</h6>
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
                {category.map((product) => (
                  <li className="product-card flex flex-row gap-3 items-center justify-start" key={product.category}>
                    <div className="img w-8 h-8 overflow-hidden rounded-full border border-black/20">
                      <img src={product.items[0].image1} alt={product.category} className="object-cover" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-gray-600 text-sm hover:text-[var(--bg-secondary)]">{product.category}</h1>
                      <span className="text-xs text-gray-600">( {product.items.length} )</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* >----------------->Nav-Overlay-Bottom<---------------< */}
              <div className="overlay-bottom bg-[#eeeff1] text-[#5585b] m-5 text-sm text-gray-600">
                <div className="content-main p-3">
                  <ul className="flex flex-col gap-4 p-4">
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-house"></i> Home</Link>
                    </li>
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-person"></i> Account</Link>
                    </li>
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-envelope"></i> Contact</Link>
                    </li>
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-layout-text-window"></i> Blog</Link>
                    </li>
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-question-circle-fill"></i> FAQ</Link>
                    </li>
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-file-person"></i> About Us</Link>
                    </li>
                    <li className="hover:text-[var(--text-secondary)]">
                      <Link><i className="me-2 bi bi-bug"></i> 404 Page</Link>
                    </li>
                  </ul>

                  {/* >----------------->Social-Links<---------------< */}
                  <div className="social-links border-t border-black/15 p-4 flex flex-row gap-4 text-md text-black/60">
                    <Link className="hover:text-[var(--text-secondary)]"><i className="bi bi-facebook"></i></Link>
                    <Link className="hover:text-[var(--text-secondary)]"><i className="bi bi-instagram"></i></Link>
                    <Link className="hover:text-[var(--text-secondary)]"><i className="bi bi-twitter-x"></i></Link>
                    <Link className="hover:text-[var(--text-secondary)]"><i className="bi bi-youtube"></i></Link>
                    <Link className="hover:text-[var(--text-secondary)]"><i className="bi bi-tiktok"></i></Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
)
}

export default NavOverlay