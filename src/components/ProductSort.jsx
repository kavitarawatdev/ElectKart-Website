import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../hooks/customHook";

export const ProductSort = () => {
    const { setListView, filterProducts, setGridView, gridView, sortingFunc } = useFilterContext();

    return (
        <section className='sorting-section h-full'>
            {/* Mobile: Stack vertically, Desktop: Horizontal layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between xs:gap-3 sm:gap-4 h-full">
                
                {/* Top row on mobile: View buttons and product count */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                    {/* View Toggle Buttons */}
                    <div className='list-view-btns-container flex items-center gap-3 sm:gap-4'>
                        <button 
                            type="button"
                            className={`flex-centered btn border-2 rounded p-1.5 sm:p-2 transition-all duration-200 hover:scale-105 
                                ${gridView ? "highlight-para border-blue-500 bg-blue-50" : "text-gray-600 border-gray-300 hover:border-gray-400"}`}
                            onClick={setGridView}
                            aria-label="Grid View"
                            title="Grid View"
                        >
                            <BsFillGridFill className="text-base sm:text-lg md:text-xl" />
                        </button>

                        <button 
                            type="button"
                            className={`flex-centered btn border-2 rounded p-1.5 sm:p-2 transition-all duration-200 hover:scale-105 
                                ${!gridView ? "highlight-para border-blue-500 bg-blue-50" : "text-gray-600 border-gray-300 hover:border-gray-400"}`}
                            onClick={setListView}
                            aria-label="List View"
                            title="List View"
                        >
                            <FaList className="text-base sm:text-lg md:text-xl" />
                        </button>
                    </div>

                    {/* Product Count - Hidden on smallest screens, shown on sm+ */}
                    <div className='total-products-available para-md sm:para-lg font-medium text-gray-700 hidden xs:block sm:hidden lg:block'>
                        <span className="hidden sm:inline">Products Available: </span>
                        <span className="font-bold text-blue-600">{filterProducts.length}</span>
                    </div>
                </div>

                {/* Bottom row on mobile: Sort dropdown and mobile product count */}
                <div className="flex items-center justify-between w-full sm:w-auto xs:gap-3">
                    {/* Mobile Product Count - Only visible on xs screens */}
                    <div className='total-products-available para-sm font-medium text-gray-700 block xs:hidden'>
                        <span className="font-bold text-blue-600">{filterProducts.length}</span>
                        <span className="ml-1">items</span>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="sorting-products-dropdown flex xs:flex-col sm:flex-row gap-1 sm:gap-2 items-center">
                        <label htmlFor="sorting" className="para-sm sm:para-md font-medium text-gray-700 whitespace-nowrap">
                            Sort By:
                        </label>
                        <select 
                            name="sorting" 
                            id="sorting" 
                            className="btn select px-2 py-1 sm:px-3 sm:py-1.5 para-sm sm:para-md  
                                hover:border-gray-400 transition-all duration-200 cursor-pointer
                                min-w-[140px] sm:min-w-[160px]"
                            defaultValue={"default"}
                            onChange={(e) => sortingFunc(e)}
                        >
                            <option value="default" disabled className='option'>
                                Select option
                            </option>
                            <option value="price-A-Z" className='option'>
                                Name: A to Z
                            </option>
                            <option value="price-Z-A" className='option'>
                                Name: Z to A
                            </option>
                            <option value="price-lowest" className='option'>
                                Price: Low to High
                            </option>
                            <option value="price-highest" className='option'>
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

// export const ProductSort = () => {
//      const{setListView, filterProducts, setGridView, gridView, sortingFunc}=useFilterContext();

//     return (
//         <section className='sorting-section flex items-center justify-between'>
            
//             <div className='list-view-btns-container flex-centered icon-sm gap-10'>
//                 <span className={`flex-centered btn border-2 p-1 ${gridView ? "highlight-para" : "text-gray-600"}`}
//                 onClick={setGridView}>
//                     <BsFillGridFill />
//                 </span>

//                 <span className={`flex-centered btn border-2 p-1 ${!gridView ? "highlight-para" : "text-gray-600"}`}
//                 onClick={setListView}>
//                     <FaList />
//                 </span>
//             </div>

//             <div className='total-products-available para-lg'>
//                 {filterProducts.length} Products Available
//             </div>

//             <div className="sorting-products-dropdown para-lg flex gap-1 items-center">
//                 <label htmlFor="sorting">Sort By: </label>
//                 <select name="sorting" id="sorting" className="btn border-b-1" 
//                 defaultValue={"default"}
//                 onChange={(e)=>sortingFunc(e)}>

//                     <option value="default" disabled 
//                     className='option btn'>
//                         Select an option
//                     </option>
//                     <option value="price-A-Z"
//                     className='option btn'
//                     >
//                         Price-- A to Z
//                     </option>
//                     <option value="price-Z-A"
//                     className='option btn'
//                     >
//                         Price-- Z to A
//                     </option>
//                     <option value="price-lowest"
//                     className='option btn'
//                     >
//                         Price-- Low to High
//                     </option>
//                     <option value="price-highest"
//                     className='option'
//                     >
//                         Price-- High to Low
//                     </option>
//                 </select>
//             </div>
//         </section>
//     );
// };