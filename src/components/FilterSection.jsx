import { FormatPrice } from "../helper/FormatPrice";
import { useFilterContext } from "../hooks/customHook";

export const FilterSection = () => {
    const { filter: { text, category, company, color, price, minPrice, maxPrice }, allProducts, handleFilterUpdate, handleClearFilters } = useFilterContext()

    // to get the unique data
    const getUniqueData = (feature) => {
        if (feature === "colors") {
            const allColors = allProducts.flatMap((product) => product.colors);
            return ["all",...new Set(allColors)];
        }

        const values = allProducts.map((product) => product[feature]);
        return ["all", ...new Set(values)];
    };

    const uniqueCategory = getUniqueData("category");
    const uniqueCompany = getUniqueData("company");
    const uniqueColor = getUniqueData("colors");

    return (
        <div className='filters-container flex flex-col gap-10 w-[90%] py-4'>
            {/* form */}
            <div>
                <form className="form"
                    onClick={(e) => e.preventDefault()}>
                    <input
                        type="text" className='common-input-field para-sm'
                        placeholder="Search for computer" aria-label="user-search"
                        name="text" value={text} onChange={handleFilterUpdate}
                    />
                </form>
            </div>

            {/* category selection */}
            <div className="category-selection flex flex-col gap-5">
                <h5 className='heading-5 font-bold'>Category</h5>
                <ul className='flex flex-wrap gap-3'>
                    {uniqueCategory.map(ele => {
                        return (
                            <li className="para-sm btn capitalize" key={ele}>
                                <label htmlFor={ele} className='flex'>
                                    <input type="checkbox" name="category" id={ele} className='w-8'
                                        value={ele} checked={category.includes(ele)}
                                        onChange={handleFilterUpdate} />
                                    {ele}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* price range */}
            <div className="price-range-selection flex flex-col gap-5">
                <h5 className='heading-5 font-bold'>Price Range</h5>
                <div className="price-range flex gap-5 items-center">
                    <span><FormatPrice price={minPrice}/></span> 
                        - 
                    <span><FormatPrice price={price}/></span>
                </div>
                <input type="range" min={minPrice} max={maxPrice} 
                    step={500} name="price" value={price} 
                    onChange={handleFilterUpdate} 
                />
            </div>

            {/* comapny selection */}
            <div className="comany-selection flex flex-col gap-5">
                <h5 className="heading-5 font-bold">Company</h5>
                <ul className="flex flex-wrap gap-5">
                    {uniqueCompany.map((ele) => {
                        return (
                            <li className="para-sm btn capitalize" key={ele}>
                                <label htmlFor={ele} className='flex'>
                                    <input type="checkbox" name="company" id={ele} className="w-8"
                                    value={ele} checked={company.includes(ele)}
                                    onChange={handleFilterUpdate}
                                />
                                    {ele}
                                </label>                     
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/*color section */}
            <div className="color-selection flex flex-col gap-5">
                <h5 className="heading-5 font-bold">Color</h5>
                <div className="flex  flex-wrap gap-5">
                    {uniqueColor.map((ele, i) => {
                        return (
                            <button type="button" value={ele} key={i}
                                className={`btn flex-centered rounded-full border-green-400 para-sm h-8 w-8 p-2 ${color === ele ? "border-3 scale-120" : "border-1"}`}
                                onClick={handleFilterUpdate} 
                                style={{ backgroundColor: ele }}
                                name="color"  >
                                    {ele=== "all" ? "All" :ele==color ?<span className='text-green-400'>✓</span>:""}                    
                            </button>

                        )
                    })
                    }
                </div>

            </div>

            {/* clear all filters */}
            <div className="clear-filters">
                <button className='common-btn btn' onClick={handleClearFilters}>
                    Clear Filters
                </button>
            </div>
        </div>
    );
};