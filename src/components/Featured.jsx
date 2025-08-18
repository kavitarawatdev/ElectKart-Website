import { Loading } from "../helper/Loading";
import { useAppContext } from "../hooks/customHook";
import { ProductCard } from "../cards/ProductCard";

export const Featured = () => {
    const { isLoading, featuredProducts } = useAppContext()

    if (isLoading) {
        return <Loading message={'Loading Featured Products...'}/>
    }

    return (
        <section className="section common-section text-center">
            <div className="container flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
                
                {/* Header Section */}
                <div className="w-full flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                    <h2 className='common-heading'>Our Featured Collection</h2>
                    <p className='common-para mx-auto'>
                        Discover our handpicked selection of the best tech gadgets, smartphones, and accessories loved by customers.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="w-full">
                    <ul className='grid grid-cols-2 2xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 
                                   gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 
                                   p-0 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6'>
                        {
                            featuredProducts.map((ele, idx) => {
                                return (
                                        <ProductCard {...ele} key={idx} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

