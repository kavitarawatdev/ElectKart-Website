import { ProductCard } from "./ProductCard";

export const GridViewProducts = ({filterProducts}) => {
    return (
        <section>
            <ul className="grid grid-cols-3 gap-10">
                {
                filterProducts.map((ele)=>{
                    return <ProductCard key={ele._id} {...ele}/>
                })
                }
            </ul>
            
        </section>
    );
};