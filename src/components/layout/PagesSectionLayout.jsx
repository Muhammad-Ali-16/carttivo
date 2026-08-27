import { Link, useLocation } from "react-router"

function PagesSectionLayout({ children, width }) {

  const { pathname } = useLocation();

  const usefulLinks = [
    { text: 'About Us', path: '/about' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Contact Us', path: '/contact' },
    { text: 'Our Blog', path: '/blog' },
    { text: 'Terms & Conditions', path: '/terms-conditions' },
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Account', path: '/account' },
  ]

  return (
      <section className={`${width === 'full' ? "width-common py-10!" : "max-w-6xl mx-auto px-4 py-10"} layout-main flex flex-col lg:flex-row justify-between gap-10`}>

        <div>
          {children}
        </div>

        <div className="side-bar h-fit sticky top-26 lg:max-w-xs w-full bg-white shadow-md shadow-[#68676726] p-6">
          <h6 className="text-sm font-semibold">Useful Links</h6>
          <ul className="text-sm leading-8 mt-6">
            {usefulLinks.map((item, i) => {
              const isActive = pathname == item.path
              return (
                <li key={i} >
                  <Link
                    to={item.path}
                    className={`${isActive ? 'text-(--text-secondary) border-b border-dotted' : ''}
                                 hover:border-b hover:border-dotted hover:text-(--text-secondary)`}>
                    {item.text}
                  </Link>
                </li>
              )
            })}


          </ul>
        </div>

      </section>
  )
}

export default PagesSectionLayout