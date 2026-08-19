import React from 'react'
import SectionTitle from '../layout/SectionTitle'

function Testimonials() {
    return (
        <section className="blog-main width-common h-screen flex justify-center relative z-2">
            <div className="content-main text-white min-w-0 max-w-2xl overflow-hidden py-10 lg:py-20">

                {/* >----------------->Section-Heading<---------------< */}
                <div className="heading-main text-center">
                    <SectionTitle
                        title="Testimonials"
                    />
                </div>



            </div>
        </section>)
}

export default Testimonials