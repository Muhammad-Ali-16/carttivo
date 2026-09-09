import {Link} from 'react-router'

function ErrorPage() {
  return (
    <section className="relative z-1 bg-[url('/error-bg.webp')] bg-cover bg-no-repeat bg-center h-[80vh]">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <span className='bg-[#ffebeb] text-[#d17175] text-sm px-4 py-1 rounded-full font-semibold'>Error</span>
        <h1 className="text-6xl md:text-8xl font-semibold py-4">404</h1>
        <p className="text-xl">Page Not Found</p>
        <button
          className={`bg-white/85 hover:bg-(--bg-secondary) text-(--text-dark) hover:text-(--text-light) px-6 py-3 rounded-full text-sm my-6`}>
          <Link to='/'>
            Go To Home Page <i className="bi bi-arrow-right"></i>
          </Link>
        </button>
      </div>
    </section>
  )
}

export default ErrorPage