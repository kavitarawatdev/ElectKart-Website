import { FilterSection } from "../components/FilterSection";
import { ProductsList } from "../components/ProductsList";
import { ProductSort } from "../components/ProductSort";
import { Loading } from "../helper/Loading";
import { NoProductsFound } from "../helper/NoProductsFound";
import { useFilterContext, useAppContext } from "../hooks/customHook";

export const Products = () => {
    const{filterProducts}=useFilterContext();
    const {isLoading}=useAppContext()

    return isLoading ? <Loading/> : (
        <section className='section'>
            <div className="container">
                {/* Mobile: Stack vertically, Desktop: Side by side */}
                <div className="grid xs:grid-cols-[0.3fr_1fr] xs:gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* Filter Section - Full width on mobile, sidebar on desktop */}
                    <section className=' lg:border-r-2 border-gray-200 px-4 py-2 sm:px-5 md:px-6 lg:pr-8'>
                        <FilterSection/>
                    </section>

                    {/* Products Section */}
                    <section className='px-4 sm:px-5 md:px-6 lg:pl-0'>
                        {/* Product Sort - Responsive height */}
                        <div className=" h-fit xs:h-12 sm:h-14 md:h-16 mb-4 sm:mb-5 md:mb-6">
                            <ProductSort/>
                        </div>
                        
                        {/* Products List or No Products */}
                        <div className="min-h-[400px]">
                            {filterProducts.length > 0 ? <ProductsList/> : <NoProductsFound/>}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};
