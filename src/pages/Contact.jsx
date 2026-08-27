import { Link } from 'react-router'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Contact() {

    const contactInfo = [
        { heading: 'Store Address', para1: '123 Main St,', para2: 'Berlin Germany', icon: 'bi-geo-alt' },
        { heading: 'Sotre Hours', para1: 'Mon-Fri: 10:00 - 20:00,', para2: 'Weekend: 12:00 - 16:00', icon: 'bi-clock' },
        { heading: 'Call Us', para1: 'Tel: 1.800.555.999', para2: 'Fax: 1.800.555.999', icon: 'bi-telephone' },
        { heading: 'Custom Blocks', para1: 'Create unlimited blocks with custom styles', para2: ' and add them on any page.', icon: 'bi-whatsapp' },
    ]

    return (
        <div className='main'>
            <Navbar />
            <div className="contact-page-main bg-(--bg-primary)">

                <div className="map-main relative z-1 ">

                    <div className="page-top-layout flex flex-col justify-center items-center bg-[#e6e7ea]">
                        <ul className="flex flex-row gap-2 text-black/50 text-sm font-semibold pt-22 pb-5">
                            <li>
                                <Link to="/">
                                    <i className="bi bi-house me-1"></i>
                                    <span className="border-b border-dashed">Home</span>
                                </Link>
                            </li>
                            <li>/</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="map w-full h-75 md:h-113 overflow-hidden">
                        <iframe
                            className=' grayscale-100 opacity-90 contrast-105 transition-all duration-150 hover:contrast-100 hover:opacity-100 hover:grayscale-0'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.383679975721!2d-122.08385148469263!3d37.38605197982967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae4e08b6f%3A0x43a64c066e1b1e0a!2sMountain%20View%2C%20CA!5e0!3m2!1sen!2sus!4v1696450000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>

                </div>

                <div className="contact-main px-3 pt-10 pb-15 lg:pt-0">
                    <div className="max-w-4xl mx-auto relative lg:-top-12 z-2  grid grid-rows-1 grid-cols-1 lg:grid-cols-3">

                        <div className="contact-info bg-[#eeeff1] p-8">
                            {contactInfo.map((info, i) => (
                                <div className={` ${i !== contactInfo.length - 1 ? 'border-b border-black/10' : ''}  flex flex-row gap-5 items-center text-black/70 py-4`} key={i}>
                                    <i className={`bi ${info.icon} text-2xl`}></i>
                                    <div className="">
                                        <h6 className='text-black/90 font-semibold text-sm pb-0.5'>{info.heading}</h6>
                                        <p className='text-xs'>{info.para1}</p>
                                        <p className='text-xs'>{info.para2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-form lg:col-span-2 bg-[#e1e2e5]">
                            <div className="p-8">
                                <h1 className="title text-2xl font-semibold text-(--text-dark)">
                                    Contact Us
                                </h1>

                                <form className='flex flex-col gap-6'>

                                    <div className="flex flex-row gap-6 w-full items-center">
                                        <label htmlFor="firstName" className="text-sm text-black/60 font-semibold shrink-0 w-28">
                                            First Name<span className="text-red-600 text-xl">*</span>
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            className="bg-(--bg-primary) p-2 w-full"
                                        />
                                    </div>

                                    <div className="flex flex-row gap-6 w-full items-center">
                                        <label htmlFor="lastName" className="text-sm text-black/60 font-semibold shrink-0 w-28">
                                            Last Name<span className="text-red-600 text-xl">*</span>
                                        </label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            required
                                            className="bg-(--bg-primary) p-2 w-full"
                                        />
                                    </div>

                                    <div className="flex flex-row gap-6 w-full items-center">
                                        <label htmlFor="email" className="text-sm text-black/60 font-semibold shrink-0 w-28">
                                            Email<span className="text-red-600 text-xl">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Your Email"
                                            required
                                            className="bg-(--bg-primary) p-2 w-full"
                                        />
                                    </div>

                                    <div className="flex flex-row gap-6 w-full items-start">
                                        <label htmlFor="message" className="text-sm text-black/60 font-semibold shrink-0 w-28 pt-2">
                                            Message<span className="text-red-600 text-xl">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder='Your Message'
                                            required
                                            className="bg-(--bg-primary) p-2 w-full min-h-32"
                                        ></textarea>
                                    </div>

                                    <div className="flex flex-row gap-3 items-start">
                                        <input
                                            id="privacyPolicy"
                                            name="privacyPolicy"
                                            type="checkbox"
                                            required
                                            className="mt-1 shrink-0"
                                        />
                                        <label htmlFor="privacyPolicy" className="text-sm text-black/60">
                                            I have read and agree to the <a href="/privacy-policy" className="underline text-(--text-secondary)">privacy policy</a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-(--text-dark) text-white font-semibold px-8 py-2.5 cursor-pointer rounded-full w-full hover:bg-(--bg-secondary) transition-all"
                                    >
                                        Submit
                                    </button>
                                </form>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact