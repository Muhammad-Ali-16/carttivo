import { useRef, useState } from 'react'
import { Link } from 'react-router'
import SectionTitle from '../ui/SectionTitle'

import GalleryImg1 from '../../assets/gallery-item-1.webp'
import GalleryImg2 from '../../assets/gallery-item-2.webp'
import GalleryImg3 from '../../assets/gallery-item-3.webp'
import GalleryImg4 from '../../assets/gallery-item-4.webp'
import GalleryImg5 from '../../assets/gallery-item-5.webp'
import GalleryImg6 from '../../assets/gallery-item-6.webp'
import GalleryImg7 from '../../assets/gallery-item-7.webp'
import GalleryImg8 from '../../assets/gallery-item-8.webp'
import GalleryImg9 from '../../assets/gallery-item-9.webp'
import GalleryImg10 from '../../assets/gallery-item-10.webp'
import GalleryImg11 from '../../assets/gallery-item-11.webp'
import GalleryImg12 from '../../assets/gallery-item-12.webp'
import GalleryImg13 from '../../assets/gallery-item-13.webp'
import GalleryImg14 from '../../assets/gallery-item-14.webp'
import GalleryImg15 from '../../assets/gallery-item-15.webp'
import GalleryImg16 from '../../assets/gallery-item-16.webp'

function SocialMedia() {
    const scrollRef = useRef(null)
    const [activeProject, setActiveProject] = useState(null);

    const HandleCardDetails = (project) => {
        setActiveProject(project);
    };

    const galleryImages = [
        { img: GalleryImg1, name: "Gallery Image 1", },
        { img: GalleryImg2, name: "Gallery Image 2", },
        { img: GalleryImg3, name: "Gallery Image 3", },
        { img: GalleryImg4, name: "Gallery Image 4", },
        { img: GalleryImg5, name: "Gallery Image 5", },
        { img: GalleryImg6, name: "Gallery Image 6", },
        { img: GalleryImg7, name: "Gallery Image 7", },
        { img: GalleryImg8, name: "Gallery Image 8", },
        { img: GalleryImg9, name: "Gallery Image 9", },
        { img: GalleryImg10, name: "Gallery Image10", },
        { img: GalleryImg11, name: "Gallery Image11", },
        { img: GalleryImg12, name: "Gallery Image12", },
        { img: GalleryImg13, name: "Gallery Image13", },
        { img: GalleryImg14, name: "Gallery Image14", },
        { img: GalleryImg15, name: "Gallery Image15", },
        { img: GalleryImg16, name: "Gallery Image16", },
    ]

    const scroll = (direction) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -180 : 180,
            behavior: 'smooth',
        })
    }

    return (
        <section className='social-media-main bg-(--bg-dark) text-(--text-light) py-12 overflow-x-hidden'>
            <div className="content-main width-common flex flex-col justify-center items-center gap-8 overflow-hidden">

                {/* >----------------->Section-Heading<---------------< */}
                <SectionTitle
                    theme="dark"
                    title="Inspiration"
                    subtitle="Join our community of fashionistas. Follow us and be up to date on new drops and discounts."
                />

                <Link
                    to="/"
                    className="bg-transparent hover:bg-white/4 border border-white/80 px-6 py-3 rounded-full text-sm text-white/80 inline-flex items-center gap-2"
                >
                    <i className="bi bi-instagram"></i> Follow Us
                </Link>

                <div className="content-main relative width-common max-w-full overflow-hidden px-1 sm:px-0">
                    {/* >----------------->Btn-Left<---------------< */}
                    <button
                        className="cursor-pointer absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 h-7 w-7 sm:h-8 sm:w-8 text-xs flex items-center justify-center rounded-full text-white border border-white/70 shadow-md bg-black/20 shrink-0"
                        onClick={() => scroll('left')}
                        aria-label="Previous"
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>

                    {/* >----------------->Btn-Right<---------------< */}
                    <button
                        className="cursor-pointer absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 h-7 w-7 sm:h-8 sm:w-8 text-xs flex items-center justify-center rounded-full text-white border border-white/70 shadow-md bg-black/20 shrink-0"
                        onClick={() => scroll('right')}
                        aria-label="Next"
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    {/* >----------------->Cards<---------------< */}
                    <div
                        ref={scrollRef}
                        className="cards-main overflow-x-auto scroll-smooth snap-x snap-mandatory flex flex-row gap-2 scrollbar-hide pt-25 pb-8"
                    >
                        {galleryImages.map((item, i) => (
                            <div
                                className={`card group snap-start cursor-pointer relative flex flex-row items-center p-2 gap-3 shrink-0 transform transition-transform duration-300 ${i % 2 === 0 ? '-translate-y-14' : 'translate-y-0'
                                    }`}
                                key={i}
                                onClick={() => { HandleCardDetails(item) }}
                            >
                                <Link to="/" className=' relative block'>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        loading="lazy"
                                        className="max-h-85 w-auto object-contain"
                                    />
                                    <div className="absolute group-hover:bg-black/50 bg-black/35 inset-0"> </div>

                                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl transition-all duration-100 group-hover:scale-110 scale-0"> <i className="bi bi-plus-circle"></i></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {activeProject && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex z-50 p-5">

                        <div className="ml-auto text-white text-2xl z-10">
                            <button onClick={() => setActiveProject(false)}>
                                <i className="bi bi-x-lg cursor-pointer"></i>
                            </button>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center p-5">
                            <img
                                src={activeProject.img}
                                alt={activeProject.name}
                                className="max-w-62 lg:max-w-sm max-h-[90vh] w-auto h-auto object-contain"
                            />
                        </div>

                    </div>
                )}

            </div>
        </section>
    )
}

export default SocialMedia 