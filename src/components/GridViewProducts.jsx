import { ProductCard } from "../cards/ProductCard";

export const GridViewProducts = ({ filterProducts }) => {
    return (
        <section className="grid-view-section w-full">
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
                {filterProducts.map((ele) => {
                    return <ProductCard key={ele._id} {...ele} />
                })}
            </ul>
        </section>
    );
};