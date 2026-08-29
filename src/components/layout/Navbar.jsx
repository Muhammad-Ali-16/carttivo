import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import CartOverlay from "./CartOverlay";
import NavOverlay from "./NavOverlay";
import ProductCardSmall from "../ui/ProductCardSmall";

function ShopDropDown() {

  const { category } = useProducts()

  return (

    <div className="drop-down-main fixed left-0 top-17.5 bg-(--bg-primary) text-(--text-dark) w-screen flex-col gap-8  hidden group-hover:flex">
      <div className="collections-main flex flex-col gap-4 p-8">
        {/* >----------------->Collections<---------------< */}
        <h1 className="text-lg">Collections</h1>
        <div className="flex flex-row gap-5 overflow-x-auto">
          {category.slice(0, 7).map((cat) => (
            <div key={cat.category} className="">
              <div className="h-36 w-36 overflow-hidden rounded-full group/img">
                <img
                  src={cat.items[0].image1}
                  alt={cat.category}
                  className="object-cover group-hover/img:scale-110 transition-all duration-150"
                />
              </div>
              <h1 className="text-center pt-2 pb-1">{cat.category}</h1>
              <h6 className="text-center text-xs text-black/60">
                {cat.items.length} Product(s)
              </h6>
            </div>
          ))}
        </div>
      </div>
      {/* >----------------->Top-Sellers<---------------< */}
      <div className="top-sellers bg-(--bg-drop-down) p-8">
        <h1 className="text-lg mb-3">Top Sellers</h1>
        <div className="content-main flex flex-row gap-7 overflow-auto">
          {category
            .flatMap((cat) => cat.items)
            .filter((item) => item.featured)
            .slice(1, 5)
            .map((item, i) => {
              const discountedPrice =
                item.discount > 0
                  ? (
                    item.price -
                    (item.price * item.discount) / 100
                  ).toFixed(2)
                  : null;

              return (
                <div
                  className="card bg-(--bg-primary) border border-black/20 flex flex-row items-center justify-between p-2 gap-3 min-w-70"
                  key={item.id ?? item.title}
                >
                  <ProductCardSmall item={item} discountedPrice={discountedPrice} number={i + 1} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const [isScroll, setIsScroll] = useState(false);
  const [cartOverlayOpen, setCartOverlayOpen] = useState(false);
  const [navOverlayOpen, setNavOverlayOpen] = useState(false);

  const { category } = useProducts()

  useEffect(() => {
    if (!isHome) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setIsScroll(window.scrollY > 60);
        ticking = false;
      });
    };

    setIsScroll(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const pageLinks = [
    { text: 'All Products', path: '/all-products' },
    { text: 'FAQ', path: '/faq' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact Us', path: '/contact' },
    { text: '404 Page', path: '/error-page' },
    { text: 'Journal Blog', path: '/blog' },
  ]

  const isSolid = isHome ? isScroll : true;

  const textColorClass = isSolid
    ? "text-(--text-dark)"
    : "text-(--text-light)";



  return (
    <header className="relative z-10">
      {/* >----------------->Cart-Overlay<---------------< */}
      <CartOverlay
        cartOverlayOpen={cartOverlayOpen}
        setCartOverlayOpen={setCartOverlayOpen}
      />
      {/* >----------------->NavBar-Overlay<---------------< */}
      <NavOverlay
        navOverlayOpen={navOverlayOpen}
        setNavOverlayOpen={setNavOverlayOpen}
        category={category}
      />
      {/* >----------------->NavBar<---------------< */}
      <nav
        className={`navbar-main z-10 w-full max-lg:px-2 ${isHome ? "absolute" : "relative"
          } ${isSolid
            ? "nav-scroll bg-[#eeeff1] shadow-md shadow-[#6867676e]"
            : ""
          }`}
      >

        <div className="nav-content-main width-common flex justify-between items-center h-18">
          {/* >----------------->Logo<---------------< */}
          <div className="logo flex items-center">
            <button
              onClick={() => { setNavOverlayOpen(true), setCartOverlayOpen(false) }}
              className={`toggle-btn lg:hidden block font-extrabold text-2xl cursor-pointer ${textColorClass}`}
            >
              <i className="bi bi-text-left"></i>
            </button>
            <img
              src={`${isSolid ? "/logo.png" : "/logo-scroll.png"}`}
              alt="logo"
              className="lg:w-40 w-28"
            />
          </div>

          {/* >----------------->Nav-Links<---------------< */}
          <ul
            className={`nav-items flex gap-8 text-xs font-semibold max-lg:hidden ${textColorClass}`}
          >

            <li className="nav-link cursor-pointer py-8 relative group">
              <Link to="/all-products" className="uppercase">Shop
                <i className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"></i>
              </Link>
              <i className="bi bi-triangle-fill absolute left-1/2 -translate-x-1/2 top-16 text-(--bg-primary) text-xs z-10 hidden group-hover:block"></i>
              {/* >----------------->Shop-Drop-Down<---------------< */}
              <ShopDropDown />
            </li>

            <li className="nav-link cursor-pointer py-8 relative group">
              <Link to="/" className="uppercase">Pages
                <i className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"></i>
              </Link>
              <i className="bi bi-triangle-fill absolute left-1/2 -translate-x-1/2 top-16 text-(--bg-primary) text-xs z-10 hidden group-hover:block"></i>

              {/* >----------------->Pages-Drop-Down<---------------< */}
              <div className="drop-down-main absolute left-1/2 -translate-x-1/2 top-19 text-[14px] p-3 text-center rounded-sm w-35 bg-(--bg-primary) text-(--text-dark) hidden group-hover:block">
                <ul className="flex flex-col gap-2">
                  {pageLinks.map((link, i) => (
                    <li key={i}>
                      <Link className="hover:text-(--text-secondary)" to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>

            </li>

            <li className="nav-link py-8  relative group">
              <Link to="/all-products" className="uppercase">
                All Products
                <i className="bi bi-caret-down-fill text-[10px] text-black/50 ms-1"></i>
              </Link>
              <i className="bi bi-triangle-fill absolute left-1/2 -translate-x-1/2 top-16 text-(--bg-primary) text-xs z-10 hidden group-hover:block"></i>

              {/* >----------------->All-Products-Drop-Down<---------------< */}
              <div
                className="drop-down-main absolute left-1/2 -translate-x-1/2 top-19 text-[14px] p-3 text-center rounded-sm grid-rows-1 grid-cols-2 w-100 gap-5 bg-(--bg-primary) text-(--text-dark) hidden group-hover:grid">
                {category.slice(7).map((product) => (
                  <div className="product-card flex flex-row gap-3 items-center justify-start" key={product.category}>
                    <div className="img w-10 h-10 overflow-hidden rounded-full border border-black/20">
                      <img src={product.items[0].image1} alt={product.category} className="object-cover" />
                    </div>
                    <h1 className="text-gray-600 hover:text-(--bg-secondary)">{product.category}</h1>
                  </div>
                ))}
              </div>

            </li>

            <li className="nav-link py-8">
              <Link to="/blog" className="uppercase">Blog</Link>
            </li>

          </ul>

          {/* >----------------->Nav-Buttons<---------------< */}
          <div
            className={`feautres-main flex items-center lg:gap-6 gap-4 ${textColorClass}`}
          >
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
                {wishlist.length === 0 ? null : (
                  <span className="lg:h-4.5 lg:w-4.5 w-3 h-3 flex justify-center items-center bg-(--bg-secondary) text-white text-[8px] lg:text-xs absolute -top-1 lg:-top-2 -right-1 lg:-right-2 rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </button>

            {/* >----------------->Cart<---------------< */}
            <button
              className="cart-btn relative cursor-pointer"
              onClick={() => {
                setCartOverlayOpen(true);
              }}
            >
              <i className="bi bi-cart2 text-md lg:text-xl"></i>
              {cart.length === 0 ? null : (
                <span className="lg:h-4.5 lg:w-4.5 w-3 h-3 flex justify-center items-center bg-(--bg-secondary) text-white text-[8px] lg:text-xs absolute -top-1 lg:-top-2 -right-1 lg:-right-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

        </div>

      </nav>
    </header >
  );
}

export default Navbar;
