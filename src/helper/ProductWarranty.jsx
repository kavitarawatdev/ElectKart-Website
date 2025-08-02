import { product_warranty } from "../data/product-warrant-data";

export const ProductWarranty = () => {
    return (
        <div className="product-warranty flex w-full justify-between">
            {
                product_warranty?.map((ele, idx) => {
                    const { label, icon } = ele;
                    return (
                        <div className='product-warranty-data flex flex-col items-center' key={idx}>
                            <span className='icon-md'>{icon}</span>
                            <p className='para-sm'>{label}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};