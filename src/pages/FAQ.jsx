import { useState } from 'react'
import PagesSectionLayout from '../components/layout/PagesSectionLayout'

function FAQ() {

    const [index, setIndex] = useState(null)

    const Accordion = [
        {
            heading: 'How do I edit this module?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'Do I need an account to place an order?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'What payment methods do you accept?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'What shipping methods do you provide?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
         {
            heading: 'How long will it take to receive my order?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'What is your return policy?   ',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        }
    ]

    const toggleAccordion = (i) => {
        setIndex(index === i ? null : i)
    }

    return (
        <section className='faq-page bg-(--bg-primary)'>
            <div className="content-main">

                <PagesSectionLayout width="full">

                    <div className="accordion-main divide-y divide-black/10 space-y-3">
                        {Accordion.map((item, i) => (
                            <div key={i} className="accordion-item">
                                <button
                                    className="text-md w-full text-left font-medium py-4 flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleAccordion(i)}
                                >
                                    {item.heading}
                                    <i
                                        className={`bi bi-chevron-double-right transform transition-transform duration-300 ${index === i ? 'rotate-90' : ''}`}
                                    ></i>
                                </button>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${index === i ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-sm text-black/70 pb-4">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </PagesSectionLayout>

            </div>
        </section>
    )
}

export default FAQ