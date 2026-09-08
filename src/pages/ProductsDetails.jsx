import { useState } from "react";
import { Link } from "react-router";
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../context/CartContext";
import { useProductDetails } from "../context/ProductDetailsContext";
import SectionTitle from "../components/ui/SectionTitle";
import ProductCardSmall from '../components/ui/ProductCardSmall';
import ProductCard from '../components/ui/ProductCard';


function ProductDetails() {
    const { addToCart } = useCart()
    const { selectedProduct } = useProductDetails()

    const { category } = useProducts()

    const [selectedImage, setSelectedImage] = useState(selectedProduct.image1);
    const [isZooming, setIsZooming] = useState(false);
    const [position, setPosition] = useState({
        x: 50,
        y: 50,
    });

    const handleMouseMove = (e) => {
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setPosition({
            x,
            y,
        });
    };

    const [index, setIndex] = useState(null)
    const [suggestedCards, setSuggestedCards] = useState('discount')

    const featuredCards = category
        .flatMap((cat) => cat.items)
        .filter((item) => item[suggestedCards]);

    const Accordion = [
        {
            heading: 'Shipping & Returns',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'Addional Product Info',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
    ]

    const toggleAccordion = (i) => {
        setIndex(index === i ? null : i)
    }

    const socialLinks = [
        { link: '/', icon: 'bi-facebook' },
        { link: '/', icon: 'bi-instagram' },
        { link: '/', icon: 'bi-twitter-x' },
        { link: '/', icon: 'bi-youtube' },
        { link: '/', icon: 'bi-tiktok' },
    ]

    return (
        <section className="product-details-main bg-(--bg-primary)">
            <div className="content py-10! width-common">

                <div className="details grid gird-rows-1 grid-cols-1 lg:grid-cols-2">

                    <div className="images-main">

                        <div className="min-h-screen  flex items-center justify-center pe-10">
                            <div className="flex gap-6 flex-col-reverse">

                                <div className="grid gird-rows-1 grid-cols-2 gap-4">

                                    <button
                                        onClick={() => setSelectedImage(selectedProduct.image1)}
                                        className={`w-full h-full rounded-sm overflow-hidden`}
                                    >
                                        <img
                                            src={selectedProduct.image1}
                                            alt={`${selectedProduct.title}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </button>

                                    <button
                                        onClick={() => setSelectedImage(selectedProduct.image2)}
                                        className={`w-full h-full rounded-sm overflow-hidden`}
                                    >
                                        <img
                                            src={selectedProduct.image2}
                                            alt={`${selectedProduct.title}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </button>

                                </div>

                                <div
                                    className="relative w-full h-full overflow-hidden rounded-sm cursor-zoom-in"
                                    onMouseEnter={() => setIsZooming(true)}
                                    onMouseLeave={() => setIsZooming(false)}
                                    onMouseMove={handleMouseMove}
                                >

                                    <img
                                        src={selectedImage}
                                        alt={selectedProduct.title}
                                        className="w-full h-full object-contain"
                                    />

                                    {isZooming && (
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                backgroundImage: `url(${selectedImage})`,
                                                backgroundSize: "180%",
                                                backgroundPosition: `${position.x}% ${position.y}% `,
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        />
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="details-main flex flex-col gap-8 sticky top-10">

                        {/* >----------------->Title<---------------< */}
                        <h1 className="heading text-2xl font-bold text-black/80">{selectedProduct.title}</h1>
                        <div className="reviews text-xs text-(--text-secondary) flex flex-row gap-1">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                            <i className="bi bi-star"></i>
                        </div>

                        {/* >----------------->Pricing-Details<---------------< */}
                        <div className="details flex flex-col lg:flex-row">
                            <div className="pricing">
                                <span className="text-sm text-gray-500 font-semibold">from</span>
                                <h6 className="text-lg font-bold">${selectedProduct.price}</h6>
                                <span className="text-xs text-gray-500 font-semibold">Price in reward points: 49</span>
                            </div>
                            <ul className="brand">
                                <li className="text-sm text-black/60 list-disc">
                                    Stock: <span className="text-xs text-black/90 font-semibold">
                                        {selectedProduct.inStock ? 'In Stock' : 'Out Of Stock'}</span>
                                </li>
                                <li className="text-sm text-black/60 list-disc">
                                    Brand: <span className="text-xs text-black/90 font-semibold"> {selectedProduct.brand}</span>
                                </li>
                            </ul>
                        </div>

                        {/* >----------------->Buttons<---------------< */}
                        <div className="btn-main py-4 gap-4 flex flex-col text-sm">
                            <div>
                                <button
                                    type="button"
                                    onClick={() => addToCart(selectedProduct)}
                                    className='view-cart relative w-full py-2 border border-black text-black/70 bg-white hover:bg-transparent hover:text-black rounded-full cursor-pointer'>
                                    Add To Cart
                                </button>

                            </div>

                            <Link to='/cart'>
                                <button type="button" className='order relative w-full py-2 border border-black hover:border-(--bg-secondary) bg-black/88 text-white hover:bg-(--bg-secondary) rounded-full cursor-pointer'>
                                    Place Order
                                </button>
                            </Link>

                        </div>

                        {/* >----------------->Accordion<---------------< */}
                        <div className="accordion-main divide-y divide-black/10 space-y-3">
                            {Accordion.map((item, i) => (
                                <div key={i} className="accordion-item">
                                    <button
                                        className="text-md w-full text-left font-medium py-4 flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleAccordion(i)}
                                    >
                                        {item.heading}
                                        <i
                                            className={`bi bi-chevron-right transform transition-transform duration-300 ${index === i ? 'rotate-90' : ''}`}
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

                        {/* >----------------->Suggested-Cards<---------------< */}
                        <div className="suggested-cards-main min-w-0 ">

                            <div className="overflow-hidden py-8 relative">

                                <div className="btns-main flex flex-row gap-6 pb-5 text-sm">
                                    <button
                                        onClick={() => setSuggestedCards('discount')}
                                        className={`cursor-pointer ${suggestedCards === 'discount' ? 'font-semibold text-black/80 underline' : 'text-gray-400'
                                            }`}
                                    >
                                        Discounted
                                    </button>
                                    <button
                                        onClick={() => setSuggestedCards('featured')}
                                        className={`cursor-pointer ${suggestedCards === 'featured' ? 'font-semibold text-black/80 underline' : 'text-gray-400'
                                            }`}
                                    >
                                        Featured
                                    </button>
                                </div>

                                <div className="cards flex flex-row gap-7 overflow-x-auto scrollbar-none relative">
                                    {/* >----------------->Cards<---------------< */}
                                    {featuredCards.map((item, i) => {
                                        const discountedPrice =
                                            item.discount > 0
                                                ? (item.price - (item.price * item.discount) / 100).toFixed(2)
                                                : null;

                                        return (
                                            <div
                                                className="card bg-(--bg-primary) cursor-pointer border text-xs border-black/20 flex flex-row items-center justify-between p-2 gap-3 min-w-70 shrink-0"
                                                key={i}
                                            >
                                                <ProductCardSmall item={item} discountedPrice={discountedPrice} number={i + 1} />
                                            </div>
                                        );
                                    })}

                                </div>

                            </div>
                        </div>

                        {/* >----------------->Social-Links<---------------< */}
                        <div className="social-links border-t border-black/15 p-4 flex flex-row gap-4 text-md text-black/60">
                            {socialLinks.map((link, i) => (
                                <Link to={link.link} className="hover:text-(--text-secondary)" key={i}>
                                    <i className={`bi ${link.icon}`}></i>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="product-discription pt-12 pb-8">
                    <h2 className="text-xl md:text-2xl font-semibold underline pb-6">Discription</h2>
                    <p className="max-w-5xl text-black/70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis minus aperiam voluptatem dicta ipsa laudantium reprehenderit consequuntur similique magnam quam unde quo, quis et assumenda delectus cum, aliquid excepturi? Laudantium, libero reiciendis. Sapiente eum perferendis libero, atque nulla distinctio.
                    </p>
                </div>

            </div>

            <div className="related-products bg-(--bg-light) py-12">
                <div className="content width-common">
                    <SectionTitle title="Related Products" />

                    <div className="card-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                        {category
                            .flatMap((cat) => cat.items)
                            .filter((item) => item.featured)
                            .slice(5, 10)
                            .map((product, i) => {
                                const discountedPrice =
                                    product.discount > 0
                                        ? (
                                            product.price -
                                            (product.price * product.discount) / 100
                                        ).toFixed(2)
                                        : null;
                                return (
                                    <ProductCard product={product} discountedPrice={discountedPrice} key={product.id} />
                                );
                            })
                        }
                    </div>


                </div>

            </div>
        </section>


    );
}

export default ProductDetails;