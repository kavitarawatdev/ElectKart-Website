export const ProductInfo = ({stock, company, category, itemId}) => {
    return (
        <>
            <div className="product-info-grid grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 
            bg-blue-50 p-3 sm:p-4 md:p-5 rounded-lg border border-blue-200">
                            
                {/* Stock Status */}
                <div className="stock-info">
                    <span className="para-md text-gray-600">Available: </span>
                    <strong className={`para-md font-semibold ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock > 0 ? "In Stock" : "Not Available"}
                    </strong>
                    {stock > 0 && (
                        <div className="stock-count para-sm text-gray-500 mt-1">
                            {stock} units available
                        </div>
                    )}
                </div>

                {/* Brand */}
                <div className="brand-info">
                    <span className="para-md text-gray-600">Brand: </span>
                    <strong className="para-md font-semibold text-gray-800 capitalize">
                        {company}
                    </strong>
                </div>

                {/* Category */}
                <div className="category-info">
                    <span className="para-md text-gray-600">Category: </span>
                    <strong className="para-md font-semibold text-gray-800 capitalize">
                        {category}
                    </strong>
                </div>

                {/* Product ID */}
                <div className="product-id">
                    <span className="para-md text-gray-600">ID: </span>
                    <strong className="para-sm font-mono text-gray-700">
                        {itemId}
                    </strong>
                </div>
            </div>
        </>
    );
};