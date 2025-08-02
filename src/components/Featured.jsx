import { useAppContext } from "../hooks/customHook";
import { ProductCard } from "./ProductCard";

export const Featured = () => {
    const { isLoading, featuredProducts } = useAppContext()

    if (isLoading) {
        return <h1>LOADING...........</h1>
    }

    return (
        <section className="section common-section text-center">
            <div className="container flex flex-col items-center gap-5">
                <h2 className='common-heading'>Our Featured Collection</h2>
                <p className='common-para'>Discover our handpicked selection of the best tech gadgets, smartphones, and accessories loved by customers.</p>

                <ul className='grid grid-cols-3 gap-10 p-5'>
                    {
                        featuredProducts.map((ele, idx) => {
                            return (
                                <ProductCard key={idx} {...ele} />
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    );
};


