import { FormatPrice } from "../helper/FormatPrice";
import { useFilterContext } from "../hooks/customHook";

export const FilterSection = () => {    
    const { filter: { text, category, company, color, price, minPrice, maxPrice },
     allProducts, handleFilterUpdate, handleClearFilters } = useFilterContext()
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default page reload
        handleFilterUpdate(e);
    }
    // to get the unique data
    const getUniqueData = (feature) => {
        if (feature === "colors") {
            const allColors = allProducts.flatMap((product) => product.colors);
            return ["all",...new Set(allColors)];
        }

        const values = allProducts.map((product) => product[feature]);
        return ["all", ...new Set(values)];
    };

    const handleUserInput=(e)=>{
        handleFilterUpdate(e)
    }

    const uniqueCategory = getUniqueData("category");
    const uniqueCompany = getUniqueData("company");
    const uniqueColor = getUniqueData("colors");

    return (
        <div className='filters-container flex flex-col gap-6 sm:gap-8 md:gap-10 w-full sm:w-[95%] lg:w-[90%] py-3 sm:py-4'>
            
            {/* Search Form */}
            <div className="search-section">
                <form className="form w-full"
                    onSubmit={(e) => handleFormSubmit(e)}>
                    <input
                        type="text" 
                        className='common-input-field para-md w-full rounded'
                        placeholder="Search for computer" 
                        aria-label="user-search"
                        name="text" 
                        value={text} 
                        onChange={handleUserInput}
                    />
                </form>
            </div>

            {/* Category Selection */}
            <div className="category-selection flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h5 className='heading-5 font-bold text-gray-800'>Category</h5>
                <ul className='flex flex-wrap gap-2 sm:gap-3'>
                    {uniqueCategory.map(ele => {
                        return (
                            <li className="para-sm btn capitalize hover:bg-gray-50 transition-colors" key={ele}>
                                <label htmlFor={ele} className='flex items-center gap-2 cursor-pointer select-none'>
                                    <input 
                                        type="checkbox" 
                                        name="category" 
                                        id={ele} 
                                        className='w-4 h-4 sm:w-5 sm:h-5 accent-blue-500'
                                        value={ele} 
                                        checked={category.includes(ele)}
                                        onChange={handleFilterUpdate} 
                                    />
                                    <span className="text-xs sm:text-sm md:text-base">{ele}</span>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Price Range */}
            <div className="price-range-selection flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h5 className='heading-5 font-bold text-gray-800'>Price Range</h5>
                <div className="price-range flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
                    <div className="price-display flex items-center gap-2 para-md font-medium">
                        <span className="text-gray-600"><FormatPrice price={minPrice}/></span> 
                        <span className="text-gray-400">-</span>
                        <span className="text-blue-600 font-semibold"><FormatPrice price={price}/></span>
                    </div>
                </div>
                <input 
                    type="range" 
                    min={minPrice} 
                    max={maxPrice} 
                    step={500} 
                    name="price" 
                    value={price} 
                    onChange={handleFilterUpdate}
                    className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer slider accent-blue-500"
                />
            </div>

            {/* Company Selection */}
            <div className="company-selection flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h5 className="heading-5 font-bold text-gray-800">Company</h5>
                <ul className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                    {uniqueCompany.map((ele) => {
                        return (
                            <li className="para-sm btn capitalize hover:bg-gray-50 transition-colors" key={ele}>
                                <label htmlFor={`company-${ele}`} className='flex items-center gap-2 cursor-pointer select-none'>
                                    <input 
                                        type="checkbox" 
                                        name="company" 
                                        id={`company-${ele}`} 
                                        className="w-4 h-4 sm:w-5 sm:h-5 accent-blue-500"
                                        value={ele} 
                                        checked={company.includes(ele)}
                                        onChange={handleFilterUpdate}
                                    />
                                    <span className="text-xs sm:text-sm md:text-base">{ele}</span>
                                </label>                     
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Color Selection */}
            <div className="color-selection flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h5 className="heading-5 font-bold text-gray-800">Color</h5>
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5">
                    {uniqueColor.map((ele, i) => {
                        return (
                            <button 
                                type="button" 
                                value={ele} 
                                key={i}
                                className={`btn flex-centered rounded-full border-gray-300 para-sm 
                                    h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 
                                    hover:scale-110 transition-all duration-200 
                                    ${color === ele ? "border-2 sm:border-3 scale-110 shadow-md" : "border-1 sm:border-2"}`}
                                onClick={handleFilterUpdate} 
                                style={{ backgroundColor: ele }}
                                name="color"
                                title={ele === "all" ? "All Colors" : ele}
                            >
                                {ele === "all" ? (
                                    <span className="text-xs sm:text-sm font-bold text-gray-700">All</span>
                                ) : ele === color ? (
                                    <span className='text-white font-bold text-xs sm:text-sm'>✓</span>
                                ) : ""}                    
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Clear Filters Button */}
            <div className="clear-filters pt-2 sm:pt-3">
                <button 
                    className='common-btn btn w-full sm:w-auto bg-red-500 hover:bg-red-600' 
                    onClick={handleClearFilters}
                >
                    Clear All Filters
                </button>
            </div>
        </div>
    );
};