import { product_warranty } from "../data/product-warrant-data";

export const ProductWarranty = () => {
    return (
        <div className="product-warranty-section">
            {/* Warranty Features Grid */}
            <div className="product-warranty grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-between 
                           gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full 
                           bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg border border-gray-200">
                {
                    product_warranty?.map((ele, idx) => {
                        const { label, icon } = ele;
                        return (
                            <div className='product-warranty-data flex flex-col items-center justify-center text-center
                                           p-2 sm:p-3 hover:bg-white hover:shadow-sm rounded-md transition-all duration-200
                                           min-h-[80px] sm:min-h-[90px] md:min-h-[100px]' 
                                 key={idx}>
                                
                                {/* Icon */}
                                <span className='icon-sm sm:icon-md text-blue-600 mb-1 sm:mb-2'>
                                    {icon}
                                </span>
                                
                                {/* Label */}
                                <p className='para-xs sm:para-sm text-gray-700 font-medium leading-tight'>
                                    {label}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            {/* Optional: Warranty Heading */}
            <div className="warranty-heading mb-2 sm:mb-3">
                <h6 className="heading-6 text-gray-800">Product Guarantees</h6>
            </div>
        </div>
    );
};