import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function HeroCarousel() {

    const carouselItems = [
        { videoUrl: null, imgUrl: '/hero-bg-1.webp', subHeading: 'New Arrivals', Heading: 'New Collection', btn1: 'Shop Now', btn1Link: '/products', btn2: 'Learn more', btn2Link: '/about' },
        { videoUrl: null, imgUrl: '/hero-bg-2.webp', subHeading: 'Optional Label', Heading: 'Essential Knit Kit', btn1: 'Shop Now', btn1Link: '/products', btn2: 'Learn more', btn2Link: '/about' },
        { videoUrl: '/hero-bg-video.mp4', imgUrl: null, subHeading: 'Journal Layout', Heading: 'Snug & Fasionable', btn1: 'Shop Now', btn1Link: '/products', btn2: 'Learn more', btn2Link: '/about' }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = prev === carouselItems.length - 1 ? 0 : prev + 1
                return next
            })
        }, 8500)

        return () => { clearInterval(interval) }
    }, [carouselItems.length])

    const nextBtn = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const prevBtn = () => {
        setCurrentIndex(currentIndex - 1)
    }

    return (
        <>
            {/* >----------------->Carousel<---------------< */}
            <div className="carousel-main flex flex-nowrap transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((item, i) => (
                    <div
                        className="hero-carousel relative h-screen w-full shrink-0 text-center text-(--text-light)"
                        key={i}
                    >
                        {item.videoUrl === null ?
                            <img
                                src={item.imgUrl}
                                alt={item.Heading}
                                className="h-full w-full object-cover"
                            /> :
                            <video
                                src={item.videoUrl}
                                autoPlay
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        }

                        <div className="absolute w-full h-full inset-0 bg-black/40"></div>

                        <div className="carousel-content width-common flex flex-col justify-center items-center gap-5 lg:gap-8 absolute z-2 inset-0">
                            <h6 className='text-(--text-light) text-sm bg-(--bg-secondary) px-2 py-1 rounded-full'>{item.subHeading}</h6>
                            <h1 className='text-5xl lg:text-8xl font-bold'>{item.Heading}</h1>

                            {/* >----------------->Carousel-Btn<---------------< */}
                            <div className="btn-main flex flex-col justify-center items-center md:flex-row gap-3">
                                <Link
                                    to={item.btn1Link}
                                    className='bg-(--bg-primary) text-(--text-dark) transition-all duration-150 font-semibold hover:bg-(--bg-secondary) hover:text-(--text-primary) px-4 py-2 rounded-full'
                                >
                                    {item.btn1}
                                </Link>
                                <Link
                                    to={item.btn2Link}
                                    className='underline hover:text-(--text-secondary)'
                                >
                                    {item.btn2}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* >----------------->Pagination<---------------< */}
            <div className="pagination absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-1 flex justify-center items-center">

                <div className="prev-btn me-4">
                    <button
                        disabled={currentIndex === 0}
                        className='text-black h-10 w-10 rounded-full bg-white disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer'
                        onClick={prevBtn}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                </div>

                {carouselItems.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${i === currentIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                    />
                ))}

                <div className="next-btn ms-4">
                    <button
                        disabled={currentIndex === carouselItems.length - 1}
                        className='text-black h-10 w-10 rounded-full bg-white disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer'
                        onClick={nextBtn}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>

            </div>
        </>
    )
}

function HeroSection() {
    return (
        <div className="hero-main relative w-full h-screen overflow-hidden">
            <HeroCarousel />
        </div>
    )
}

export default HeroSection