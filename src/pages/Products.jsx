import { FilterSection } from "../components/FilterSection";
import { ProductsList } from "../components/ProductsList";
import { ProductSort } from "../components/ProductSort";

export const Products = () => {
    return (
        <section className='section'>
            <div className="container grid grid-cols-[0.3fr_1fr] gap-8">
                <section className='border-r-2 px-5 py-2'>
                    <FilterSection/>
                </section>

                <section className='grid grid-rows-[4rem_1fr] gap-5 px-5'>
                    <ProductSort/>
                    <ProductsList/>
                </section>
            </div>
        </section>
    );
};