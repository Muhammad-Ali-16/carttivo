import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SectionTitle from '../ui/SectionTitle'

function Testimonials() {
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

    return (
        <section className="testimonials-main max-w-7xl mx-auto px-2 relative overflow-hidden py-10 lg:py-18">

            {/* >----------------->Section-Heading<---------------< */}
            <div className="heading-main text-center">
                <SectionTitle title="Testimonials" />
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                speed={500}
                navigation={{
                    prevEl: '.testimonial-prev',
                    nextEl: '.testimonial-next',
                }}
                pagination={{
                    clickable: true,
                    el: '.testimonial-pagination',
                }}
                className="mt-10 pb-4!"
            >
                {testimonialCards.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="max-w-2xl mx-auto text-center px-4">
                            <div className="flex justify-center gap-1 text-5xl text-gray-700 mb-4">
                                <i className="bi bi-quote"></i>
                            </div>
                            <p className="italic text-lg md:text-xl text-gray-700 leading-relaxed">
                                {card.review}
                            </p>
                            <h6 className="mt-8 text-xs tracking-widest uppercase text-gray-500">
                                - {card.name}
                            </h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* >----------------->Nav buttons<---------------< */}
            <button
                className="testimonial-prev cursor-pointer absolute left-2 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                aria-label="Previous testimonial"
            >
                <i className="bi bi-chevron-left"></i>
            </button>

            <button
                className="testimonial-next cursor-pointer absolute right-2 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                aria-label="Next testimonial"
            >
                <i className="bi bi-chevron-right"></i>
            </button>

            {/* >----------------->Dot pagination<---------------< */}
            <div className="testimonial-pagination flex justify-center gap-2 mt-8"></div>

        </section>
    )
}

export default Testimonials