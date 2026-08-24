import Button from "../components/layout/Button";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PagesSectionLayout from "../components/layout/PagesSectionLayout";


function About() {



  const milestonesCards = [
    { number: '30,000', span: '+', heading: 'Satisfied Customers' },
    { number: '3,000', span: '+', heading: '5 Star Average Reviews' },
    { number: '200', span: 'K', heading: 'Orders Shipped' },
    { number: '10', span: 'Y', heading: 'Years on the Market' }
  ]

  const testimonialCards = [
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis laborum dolor distinctio magnam cum eaque qui at nisi aspernatur",
      name: 'lloydstoltz'
    },
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis laborum dolor distinctio magnam cum eaque qui at nisi aspernatur",
      name: 'docdiscobi'
    },
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis laborum dolor distinctio magnam cum eaque qui at nisi aspernatur",
      name: 'graigkarl'
    },
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis laborum dolor distinctio magnam cum eaque qui at nisi aspernatur",
      name: 'lloydstoltz'
    },
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis laborum dolor distinctio magnam cum eaque qui at nisi aspernatur",
      name: 'docdiscobi'
    },
    {
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis laborum dolor distinctio magnam cum eaque qui at nisi aspernatur",
      name: 'graigkarl'
    },
  ]

  return (
    <section className='about-page bg-(--bg-primary)'>

      <PagesSectionLayout>
        <div className="about-content w-full text-md text-black/70 flex flex-col gap-6 items-start justify-start">

          <p className="first-letter:float-start first-letter:text-4xl md:first-letter:text-5xl first-letter:uppercase first-letter:font-semibold first-letter:text-black/85 first-letter:pe-2 first-letter:pr-2">
            sit Lorem ipsum dolor  amet consectetur adipisicing elit. Magni cum minus, fugit placeat ea voluptate harum accusantium. Soluta at aliquam, provident maiores minus, inventore quidem nisi neque veritatis eveniet dolorum a totam laborum Labore voluptas beatae, non, architecto laudantium quisquam provident unde iusto veniam natus laborum quas at, repudiandae ducimus
          </p>

          <div className="bg-[#eeeff1] p-6 border-s-5 border-(--bg-secondary) rounded-s-lg italic">
            <i className="bi bi-quote float-start md:text-3xl text-3xl me-2"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, quis repellat adipisci amet quae voluptatibus atque, nostrum, dignissimos error sint est nisi dolore libero ullam minus! Eum saepe odit, iste eos enim sint nam vel suscipit fugit similique impedit?
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error architecto provident voluptates vero nostrum! Dolorem soluta ullam iste qui? Explicabo omnis quaerat nostrum illo accusantium eveniet aut culpa, nulla odit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error aut quam nulla ut hic. Explicabo autem atque assumenda.
          </p>

          <div className="bg-[#eeeff1] p-6 border-s-5 border-(--bg-secondary) rounded-s-lg italic">
            <i className="bi bi-quote float-start md:text-3xl text-3xl me-2"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, quis repellat adipisci amet quae voluptatibus atque, nostrum, dignissimos error sint est nisi dolore libero ullam minus! Eum saepe odit, iste eos enim sint nam vel suscipit fugit similique impedit?
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error architecto provident voluptates vero nostrum! Dolorem soluta ullam iste qui? Explicabo omnis quaerat nostrum illo accusantium eveniet aut culpa, nulla odit.
          </p>

          <Button text="Buy Carrtivo" path="?" isFilled="filled" />
        </div>
      </PagesSectionLayout>

      <div className="about-cards bg-[#e6e7ea]">
        <div className="content width-common">

          <div className="milestones py-12 grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex flex-col gap-4 justify-center items-start">
              <div className="heading">
                <h6 className="text-xl font-semibold text-(--text-dark) mb-2">Carrtivo by the Numbers</h6>
                <p className="text-sm text-black/70">Our milestones through the years</p>
              </div>
              <Button text="Buy Carrtivo" path="?" isFilled="filled" />
            </div>

            <div className="cards-main md:col-span-2 grid gird-rows-1 grid-cols-2 md:flex flex-row gap-5 flex-wrap">
              {milestonesCards.map((card, i) => (
                <div key={i} className="card min-w-50 shrink-0 bg-(--bg-primary) border border-black/20 flex justify-center items-center flex-col p-8 gap-1">
                  <h1 className="font-extrabold text-4xl">{card.number} <span className="text-black/40">{card.span}</span></h1>
                  <p className="text-black/60 text-sm">{card.heading}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="flex flex-row justify-center relative py-4">
            <div className="h-2.5 w-2.5 rotate-45 border border-black/70"></div>
            <div className="h-2.5 w-2.5 rotate-45 border border-black/70"></div>
            <div className="h-2.5 w-2.5 rotate-45 border border-black/70"></div>
            <div className="h-2.5 w-2.5 rotate-45 border border-black/70"></div>
            <div className="h-2.5 w-2.5 rotate-45 border border-black/70"></div>
            <div className="h-2.5 w-2.5 rotate-45 border border-black/70"></div>
          </div>

          <div className="testimonials-cards relative py-14">

            <Swiper
              modules={[Navigation, Pagination]}
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
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mt-10 pb-4!"
            >

              {testimonialCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="max-w-2xl mx-auto p-8 bg-white h-full min-h-65 flex flex-col">
                    <div className="flex justify-start gap-1 text-5xl text-gray-700 mb-4">
                      <i className="bi bi-quote transform rotate-180"></i>
                    </div>
                    <p className="italic text-md text-black/70 line-clamp-3">
                      {card.review}
                    </p>
                    <h6 className="mt-auto pt-8 text-xs tracking-widest uppercase text-gray-500">
                      - {card.name}
                    </h6>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>

            <button
              className="testimonial-prev cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <button
              className="testimonial-next cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right"></i>
            </button>

            {/* >----------------->Dot pagination<---------------< */}
            <div className="testimonial-pagination flex justify-center gap-2 mt-8"></div>

          </div>

        </div>
      </div>

    </section >
  )
}

export default About