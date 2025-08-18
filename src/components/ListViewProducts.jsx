import { NavLink } from "react-router-dom";
import { FormatPrice } from "../helper/FormatPrice";

export const ListViewProducts = ({ filterProducts }) => {
    return (
        <section className="list-view-section w-full">
            <ul className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {
                    filterProducts?.map((ele) => {
                        const { _id, name, img, price, category, description } = ele
                        return (
                            <li className='grid grid-cols-1 sm:grid-cols-[0.4fr_1fr] md:grid-cols-[0.35fr_1fr] lg:grid-cols-[0.3fr_1fr] 
                                          items-start sm:items-center justify-items-start sm:justify-items-center 
                                          border-y-1 border-gray-200 
                                          p-4 sm:p-5 md:p-6 
                                          gap-4 sm:gap-6 md:gap-8 lg:gap-10
                                          hover:shadow-md hover:bg-gray-50 transition-all duration-200' 
                                key={_id}>
                                
                                {/* Product Image */}
                                <figure className='relative w-full sm:w-auto'>
                                    <img 
                                        src={img} 
                                        alt={name}
                                        className='w-full sm:w-auto h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 
                                                  object-contain rounded-lg shadow-sm bg-gray-50' 
                                    />
                                    <figcaption className='common-caption para-sm sm:para-md'>
                                        {category}
                                    </figcaption>
                                </figure>

                                {/* Product Details */}
                                <div className='product-details flex flex-col gap-3 sm:gap-4 w-full'>
                                    
                                    {/* Product Name */}
                                    <h5 className='heading-4 text-gray-800 hover:text-blue-600 transition-colors duration-200'>
                                        {name}
                                    </h5>
                                    
                                    {/* Price */}
                                    <p className='para-lg font-semibold text-blue-600'>
                                        <FormatPrice price={price} />
                                    </p>
                                    
                                    {/* Description */}
                                    <p className='para-md sm:para-lg text-gray-600 text-justify 
                                              w-full sm:w-[90%] md:w-[85%] lg:w-[80%] 
                                              leading-relaxed line-clamp-3 sm:line-clamp-none'>
                                        {description.length > 110 
                                            ? description.slice(0, 110) + "..." 
                                            : description}
                                    </p>

                                    {/* Action Button */}
                                    <div className="mt-2 sm:mt-3">
                                        <NavLink 
                                            to={`/indProduct/${_id}`} 
                                            className='common-border highlight-para para-md sm:para-lg 
                                                      px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
                                                      w-fit rounded-md
                                                      hover:bg-blue-500 hover:text-white hover:border-blue-500
                                                      transition-all duration-200 
                                                      transform hover:scale-105 hover:shadow-md
                                                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                        >
                                            Read More
                                        </NavLink>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};