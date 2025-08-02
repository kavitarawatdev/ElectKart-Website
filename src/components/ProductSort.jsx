import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../hooks/customHook";
export const ProductSort = () => {
     const{setListView, filterProducts, setGridView, gridView, sortingFunc}=useFilterContext();

    return (
        <section className='sorting-section flex items-center justify-between'>
            
            <div className='list-view-btns-container flex-centered icon-sm gap-10'>
                <span className={`flex-centered btn border-2 p-1 ${gridView ? "text-green-500" : "text-gray-600"}`}
                onClick={setGridView}>
                    <BsFillGridFill />
                </span>

                <span className={`flex-centered btn border-2 p-1 ${!gridView ? "text-green-500" : "text-gray-600"}`}
                onClick={setListView}>
                    <FaList />
                </span>
            </div>

            <div className='total-products-available para-lg'>
                {filterProducts.length} Products Available
            </div>

            <div className="sorting-products-dropdown para-lg flex gap-1 items-center">
                <label htmlFor="sorting">Sort By: </label>
                <select name="sorting" id="sorting" className="btn border-b-1" 
                defaultValue={"default"}
                onChange={(e)=>sortingFunc(e)}>

                    <option value="default" disabled 
                    className='option btn'>
                        Select an option
                    </option>
                    <option value="price-A-Z"
                    className='option btn'
                    >
                        Price-- A to Z
                    </option>
                    <option value="price-Z-A"
                    className='option btn'
                    >
                        Price-- Z to A
                    </option>
                    <option value="price-lowest"
                    className='option btn'
                    >
                        Price-- Low to High
                    </option>
                    <option value="price-highest"
                    className='option'
                    >
                        Price-- High to Low
                    </option>
                </select>
            </div>
        </section>
    );
};