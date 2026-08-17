import BannerImg1 from '../../assets/hero-banner-1.webp'
import BannerImg2 from '../../assets/hero-banner-2.webp'
import BannerImg3 from '../../assets/hero-banner-3.webp'
import { Link } from 'react-router'

function HeroBanner() {

    const cards = [
        {
            image: BannerImg1,
            title: 'Essential Knit Kit',
            price: '99.99',
            linkText: 'Shop collection',
            linkTo: '/products',
            variant: 'tall',
        },
        {
            image: BannerImg2,
            title: 'Elegance in Every Thread',
            price: '129.99',
            linkText: 'Shop now',
            linkTo: '/products',
            variant: 'normal',
        },
        {
            image: BannerImg3,
            title: 'Unparalleled Softness and Quality',
            price: '49.99',
            linkText: 'Shop Now',
            linkTo: '/products',
            variant: 'normal',
        },
        {
            image: null,
            title: '-50% OFF',
            price: null,
            linkText: 'Shop SALE',
            linkTo: '/sale',
            variant: 'plain'
        },
        {
            image: BannerImg1,
            title: 'Cozy Comforters for Cold Days',
            price: null,
            linkText: 'Learn More',
            linkTo: '/products',
            variant: 'normal',
        },
    ]
    return (

        <section className="hero-banner-main w-full py-10 md:py-20">
            <div className="banner-content width-common grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
                {cards.map((card, i) => {
                    const isTall = card.variant === 'tall'
                    const isPlain = card.variant === 'plain'

                    return (
                        <div
                            key={i}
                            className={`relative overflow-hidden group cursor-pointer
                                ${isTall ? 'md:row-span-2 h-[400px] md:h-full' : 'h-[300px] md:h-full'}
                                ${card.image ? '' : 'bg-[var(--bg-secondary)]'}`}
                        >
                            {card.image && (
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            )}

                            {card.image && (
                                <div className="absolute inset-0 bg-black/40" />
                            )}

                            <div
                                className={`relative z-3 h-full w-full p-6 flex flex-col text-white ${isPlain
                                    ? 'items-center justify-center text-center gap-3'
                                    : 'justify-between'
                                    }`}
                            >
                                {!isPlain && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                                        {card.price && (
                                            <p className="text-xs">
                                                From
                                                <span className="text-[14px] font-semibold ms-2">${card.price}</span>
                                            </p>
                                        )}
                                    </div>
                                )}

                                {isPlain && (
                                    <h3 className="text-5xl font-semibold tracking-wide"
                                        style={{
                                            WebkitTextStroke:
                                                "1px #fff",
                                            color: "transparent",
                                        }}>
                                        {card.title}</h3>
                                )}

                                <Link
                                    to={card.linkTo}
                                    className="text-sm underline underline-offset-4 w-fit hover:opacity-80 transition"
                                >
                                    {card.linkText} →
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HeroBanner

