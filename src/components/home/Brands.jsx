import { useRef } from 'react'
import { Link } from 'react-router'

import bold from '../../assets/bold.webp'
import breally from '../../assets/breally.webp'
import djTech from '../../assets/dj-tech.webp'
import drop from '../../assets/drop.webp'
import floral from '../../assets/floral.webp'
import fortCane from '../../assets/fort-cane.webp'
import fyt from '../../assets/fyt.webp'
import iconic from '../../assets/iconic.webp'
import walk from '../../assets/walk.webp'
import rose from '../../assets/rose.webp'
import furryFamily from '../../assets/furry-family.webp'
import janeAustin from '../../assets/jane-austin.webp'
import moro from '../../assets/moro.webp'
import pfeiffer from '../../assets/pfeiffer.webp'
import ronJones from '../../assets/ron-jones.webp'
import sterling from '../../assets/sterling.webp'


function Brands() {
    const scrollRef = useRef(null)

    const BrandsImg = [
        { img: bold, name: 'Bold' },
        { img: breally, name: 'Breally' },
        { img: djTech, name: 'DJ Tech' },
        { img: drop, name: 'Drop' },
        { img: floral, name: 'Floral' },
        { img: fortCane, name: 'Fort Cane' },
        { img: fyt, name: 'FYT' },
        { img: iconic, name: 'Iconic' },
        { img: walk, name: 'Walk' },
        { img: rose, name: 'Rose' },
        { img: furryFamily, name: 'Furry Family' },
        { img: janeAustin, name: 'Jane Austin' },
        { img: pfeiffer, name: 'Pfeiffer' },
        { img: moro, name: 'Moro' },
        { img: ronJones, name: 'Ron Jones' },
        { img: sterling, name: 'Sterling' },
    ]

    const scroll = (direction) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -180 : 180,
            behavior: 'smooth',
        })
    }

    return (
        <div className="card-main px-2 min-w-0 bg-(--bg-dark-2)">
            <div className="relative width-common">
                {/* >----------------->Prev-Btn<---------------< */}
                <button
                    className="cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-20 h-8 w-8 text-xs flex items-center justify-center rounded-full text-white border border-white/70 shadow-md"
                    onClick={() => scroll('left')}
                    aria-label="Previous"
                >
                    <i class="bi bi-chevron-left"></i>
                </button>
                {/* >----------------->Next-Btn<---------------< */}
                <button
                    className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-20 h-8 w-8 text-xs flex items-center justify-center rounded-full  text-white border border-white/70 shadow-md"
                    onClick={() => scroll('right')}
                    aria-label="Next"
                >
                    <i class="bi bi-chevron-right"></i>
                </button>

                {/* >----------------->Scrollable row<---------------< */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex flex-row gap-7 scrollbar-hide"
                >
                    {BrandsImg.map((item, i) => (
                        <div
                            className="card snap-start cursor-pointer flex flex-row items-center p-2 gap-3 shrink-0 transition-all duration-150 grayscale-100 hover:scale-105 hover:grayscale-0"
                            key={i}
                        >
                            <Link to="/">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    loading='lazy'
                                    className="h-30 w-auto object-contain"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands