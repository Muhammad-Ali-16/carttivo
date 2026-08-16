import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function HeroCarousel() {

    const carouselItems = [
        { videoUrl: null, imgUrl: '/hero-bg-1.webp', subHeading: 'New Arrivals', Heading: 'New Collection', btn1: 'Shop Now', btn2: 'Learn more' },
        { videoUrl: null, imgUrl: '/hero-bg-2.webp', subHeading: 'Optional Label', Heading: 'Essential Knit Kit', btn1: 'Shop Now', btn2: 'Learn more' },
        { videoUrl: '/hero-bg-video.mp4', imgUrl: null, subHeading: 'Journal Layout', Heading: 'Snug & Fasionable', btn1: 'Shop Now', btn2: 'Learn more' }
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


    return (
        <div className="carousel-main flex flex-nowrap transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {carouselItems.map((item, i) => (
                <div
                    className="hero-carousel relative h-screen w-full shrink-0 text-center text-[var(--text-light)]"
                    key={i}
                >
                    {item.videoUrl === null ?
                        <img
                            src={item.imgUrl}
                            alt={item.Heading}
                            className="h-screen w-screen object-cover"
                        /> :
                        <video
                            src={item.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-screen w-screen object-cover"
                        />
                    }

                    <div className="absolute w-full h-full inset-0 bg-black/40"></div>

                    <div className="carousel-content width-common flex flex-col justify-center items-center gap-5 lg:gap-8 absolute z-2 inset-0">
                        <h6 className='text-[var(--text-light)] text-sm bg-[var(--bg-secondary)] px-2 py-1 rounded-full'>{item.subHeading}</h6>
                        <h1 className='text-5xl lg:text-8xl font-bold'>{item.Heading}</h1>
                        <div className="btn-main flex flex-col md:flex-row gap-3">
                            <button
                                className='bg-[var(--bg-primary)] text-[var(--text-dark)] transition-all duration-150 font-semibold hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] px-4 py-2 rounded-full'
                            >
                                <Link>{item.btn1}</Link>
                            </button>
                            <button className='underline hover:text-[var(--text-secondary)]'>
                                <Link>{item.btn2}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
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
