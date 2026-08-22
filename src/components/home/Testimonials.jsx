import { useState } from 'react'
import SectionTitle from '../layout/SectionTitle'

function Testimonials() {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState('right') 

    const testimonialCards = [
        {
            review: `This framework is absolutely super, the level of customization is incredible, the support takes a while to reply to your tickets but I guess they are very busy due to allot of people that buy this product, but I can live with that.`,
            name: 'lloydstoltz'
        },
        {
            review: `It's wonderful! Its look is stunning already with default settings, every single aspect of the theme with a nice touch of detail everywhere you look.`,
            name: 'docdiscobi'
        },
        {
            review: `Great purpose and has been constantly updated and improved, I started using it in 2014. My go to theme for every project since.`,
            name: 'graigkarl'
        },
    ]

    const total = testimonialCards.length
    const prevIndex = (current - 1 + total) % total
    const nextIndex = (current + 1) % total

    const goPrev = () => {
        setDirection('left')
        setCurrent((i) => (i - 1 + total) % total)
    }
    const goNext = () => {
        setDirection('right')
        setCurrent((i) => (i + 1) % total)
    }
    const goTo = (i) => {
        setDirection(i > current ? 'right' : 'left')
        setCurrent(i)
    }

    return (
        <section className="testimonial-main py-20 lg:py-28">
            <div className="content width-common relative overflow-hidden">

                {/* >----------------->Section-Heading<---------------< */}
                <div className="heading-main text-center">
                    <SectionTitle title="Testimonials" />
                </div>

                {/* >----------------->Slider<---------------< */}
                <div className="relative flex items-center justify-center min-h-55">

                    <div className="hidden lg:block absolute left-0 w-1/4 text-sm italic text-gray-400/30 select-none pointer-events-none line-clamp-2">
                        {testimonialCards[prevIndex].review}
                    </div>

                    <button
                        className="cursor-pointer absolute left-2 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                        onClick={goPrev}
                        aria-label="Previous testimonial"
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>

                    <div
                        key={current}
                        className="max-w-2xl text-center px-4"
                        style={{
                            animation: `${direction === 'right' ? 'slideInRight' : 'slideInLeft'} 0.4s ease`,
                        }}
                    >
                        <div className="flex justify-center gap-1 text-5xl text-gray-700 mb-4">
                            <i className="bi bi-quote"></i>
                        </div>
                        <p className="italic text-lg md:text-xl text-gray-700 leading-relaxed">
                            {testimonialCards[current].review}
                        </p>
                        <h6 className="mt-8 text-xs tracking-widest uppercase text-gray-500">
                            - {testimonialCards[current].name}
                        </h6>
                    </div>

                    <button
                        className="cursor-pointer absolute right-2 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                        onClick={goNext}
                        aria-label="Next testimonial"
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    <div className="hidden lg:block absolute right-0 w-1/4 text-sm italic text-gray-400/30 select-none pointer-events-none line-clamp-2 text-right">
                        {testimonialCards[nextIndex].review}
                    </div>
                </div>

                {/* >----------------->Dot pagination<---------------< */}
                <div className="flex justify-center gap-2 mt-14">
                    {testimonialCards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`h-2 w-2 rounded-full transition-all cursor-pointer ${i === current ? 'bg-gray-800 w-3' : 'bg-gray-300'
                                }`}
                        ></button>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials