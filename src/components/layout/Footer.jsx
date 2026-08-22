import { useState, useEffect } from "react";
import { GetAllProducts } from "../../services/api";
import { Link } from 'react-router'

function Footer() {

  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetAllProducts()
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const footerTopCards = [
    { heading: 'Fast Shipping', icon: 'bi-truck' },
    { heading: 'Secure Shopping', icon: 'bi-shield-check' },
    { heading: 'Easy Return', icon: 'bi-arrow-clockwise' },
    { heading: '24h Service', icon: 'bi-headset' },
  ]

  const socialIcons = [
    { icon: 'bi-facebook', link: '/' },
    { icon: 'bi-instagram', link: '/' },
    { icon: 'bi-twitter-x', link: '/' },
    { icon: 'bi-tiktok', link: '/' },
    { icon: 'bi-youtube', link: '/' },
  ]

  const footerItems = [
    {
      name: 'about-us',
      heading: 'About us',
      links: [
        { path: "/", text: 'About us' },
        { path: "/", text: 'Blog' },
        { path: "/", text: 'FAQ' },
        { path: "/", text: 'Privacy Policy' },
        { path: "/", text: 'Terms & Conditions' },
      ]
    },
    {
      name: 'my-account',
      heading: 'My Account',
      links: [
        { path: "/", text: 'Login' },
        { path: "/", text: 'Order History' },
      ]
    },
    {
      name: 'customer-services',
      heading: 'Customer Services',
      links: [
        { path: "/", text: 'Contact Us' },
        { path: "/", text: 'Store Location' },
        { path: "/", text: 'Our Brands' },
        { path: "/", text: 'Delivery Information' },
      ]
    },
  ]

  return (
    <footer className='footer-main'>

      <div className="footer-top overflow-hidden bg-(--bg-secondary)">
        <div className="content max-w-7xl mx-auto px-4 py-6 text-(--text-light) flex flex-row gap-12 justify-between items-center overflow-auto">

          {footerTopCards.map((card, i) => (
            <div className="flex flex-row justify-center items-center shrink-0" key={i}>
              <span className='mx-4 text-xl'>
                <i className={`bi ${card.icon}`}></i>
              </span>
              <div>
                <h6 className='text-sm'>{card.heading}</h6>
                <p className='text-xs opacity-70'>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="footer-bottom py-12">
        <div className="content width-common flex flex-col md:flex-row justify-between items-start flex-wrap gap-12">

          <div className="logo flex flex-col justify-start gap-4">

            <div>
              <img src="/logo.png" alt="logo" className='max-w-48' />
            </div>

            <div className="flex flex-row justify-start items-center gap-4 text-sm text-black/60 hover:text-(--text-secondary) cursor-pointer">
              <span>
                <i className="bi bi-geo-alt"></i>
              </span>
              <h6>123 Main Str, London, UK</h6>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 text-sm text-black/60 hover:text-(--text-secondary) cursor-pointer">
              <span>
                <i className="bi bi-telephone"></i>
              </span>
              <h6>1.800.555.8899</h6>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 text-sm text-black/60 hover:text-(--text-secondary) cursor-pointer">
              <span>
                <i className="bi bi-envelope"></i>
              </span>
              <h6>example@gmail.com</h6>
            </div>

            <div className="social-icons flex flex-row items-center gap-2 mt-6">

              {socialIcons.map((icon, i) => (
                <Link
                  to={icon.link}
                  className="w-9 h-9 flex items-center justify-center border border-black/30 text-black/60 rounded-full hover:border-black/80 hover:text-black/80"
                  key={i}
                >
                  <i className={`bi ${icon.icon}`}></i>
                </Link>
              ))}

            </div>

          </div>

          {footerItems.map((item, i) => (
            <div className={`${item.name}`} key={i}>
              <h6 className='font-semibold'>{item.heading}</h6>
              {item.links.map((link, j) => (
                <ul className="links text-black/65 text-sm mt-4 leading-3" key={j}>
                  <li>
                    <Link to={link.path} className='hover:text-(--text-secondary) hover:underline'>{link.text}</Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}

          <div className="sale">
            <h6 className='font-semibold'>Sale</h6>

            <ul className="flex flex-col gap-5 mt-4">
              {category
                .flatMap((cat) => cat.items)
                .map((product) => ({
                  ...product,
                  discountedPrice:
                    product.discount > 0
                      ? (product.price - (product.price * product.discount) / 100).toFixed(2)
                      : null,
                }))
                .filter((product) => product.discountedPrice)
                .slice(0, 4)
                .map((product) => (
                  <li
                    className="product-card flex flex-row gap-3 items-center justify-start"
                    key={product.id}
                  >
                    <div className="img w-12 h-12 overflow-hidden rounded-full border border-black/20">
                      <img
                        src={product.image1}
                        alt={product.category}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="items-center gap-3 text-xs">
                      <Link to="/" className="text-gray-600 text-sm hover:text-(--bg-secondary) mb-1">
                        {product.category}
                      </Link>
                      <h4>
                        <span className="mr-2 text-[#d17175]">${product.discountedPrice}</span>
                        <span className="line-through opacity-80">${product.price}</span>
                      </h4>
                    </div>
                  </li>
                ))}
            </ul>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer