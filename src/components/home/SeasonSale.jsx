import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCardSmall from '../ui/ProductCardSmall';
import BgImg from '../../assets/season-sale-bg.webp'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'


function SeasonSale() {
    const [scroll, setScroll] = useState(0);
    const { category } = useProducts()

    const saleItems = category
        .flatMap((cat) => cat.items)
        .filter((item) => item.discount)
        .slice(0, 5);

    return (
        <section
            className="season-sale-main parallax-section relative"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="content-main width-common h-screen flex justify-center lg:justify-end items-center relative z-2">
                <div className="text-white bg-(--bg-light-2) min-w-0 max-w-2xl overflow-hidden">

                    {/* >----------------->Section-Heading<---------------< */}
                    <div className="heading-main text-center flex flex-col justify-center items-center gap-4 p-8">
                        <SectionTitle
                            title="End of Season Sale"
                            subtitle="Display products in different locations under different rules. Full design control at any screen width."
                        />
                        <Button path="/" text="Shop all" />
                    </div>

                    <div className="card-main p-8 min-w-0">
                        <div className="relative">
                            {/* >----------------->Prev-Btn<---------------< */}
                            <button
                                className="cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-20 h-8 w-8 flex items-center justify-center rounded-full bg-white text-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                                onClick={() => setScroll((prev) => Math.max(prev - 1, 0))}
                                disabled={scroll === 0}
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                            {/* >----------------->Next-Btn<---------------< */}
                            <button
                                className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-20 h-8 w-8 flex items-center justify-center rounded-full bg-white text-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                                onClick={() => setScroll((prev) => Math.min(prev + 1, saleItems.length - 1))}
                                disabled={scroll === saleItems.length - 1}
                                aria-label="Next"
                            >
                                ›
                            </button>

                            <div className="overflow-hidden">
                                <div
                                    className="flex flex-row gap-7 transition-transform duration-700"
                                    style={{ transform: `translateX(-${scroll * 300}px)` }}
                                >
                                    {/* >----------------->Cards<---------------< */}
                                    {saleItems.map((item) => {
                                        const discountedPrice =
                                            item.discount > 0
                                                ? (item.price - (item.price * item.discount) / 100).toFixed(2)
                                                : null;

                                        return (
                                            <div
                                                className="card bg-(--bg-primary) cursor-pointer border text-xs border-black/20 flex flex-row items-center justify-between p-2 gap-3 min-w-70 shrink-0"
                                                key={item.id}
                                            >
                                                <ProductCardSmall item={item} discountedPrice={discountedPrice} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SeasonSale