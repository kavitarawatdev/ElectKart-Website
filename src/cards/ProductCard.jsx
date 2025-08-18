import { NavLink } from "react-router-dom";
import { FormatPrice } from "../helper/FormatPrice";

export const ProductCard = ({...ele}) => {
    const {_id, name, img, price, category} = ele
    
    return (
        <li className='common-border w-full bg-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105'
         key={_id}>
            <NavLink 
                to={`/indProduct/${_id}`} 
                className="flex flex-col justify-between items-center h-full p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 2xl:p-6"
            >
                {/* Image Section */}
                <figure className='relative w-full mb-3 sm:mb-4 md:mb-5 lg:mb-4 xl:mb-5'>
                    <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] xl:aspect-square 
                                    overflow-hidden rounded-md sm:rounded-lg bg-gray-50 flex-centered">
                        <img 
                            src={img} 
                            alt={name} 
                            className="common-effect object-cover object-center"
                        />
                    </div>
                    
                    {/* Category Badge */}
                    <figcaption className='common-caption para-sm sm:para-md absolute top-2 right-2 sm:top-3 sm:right-3'>
                        {category}
                    </figcaption>
                </figure>

                {/* Content Section */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center 
                               w-full gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4'>
                    
                    {/* Product Name */}
                    <h6 className='para-lg text-left line-clamp-2 sm:line-clamp-1 md:line-clamp-2 lg:line-clamp-1 xl:line-clamp-2 
                                   flex-1 min-w-0 pr-2 sm:pr-0'>
                        {name}
                    </h6>
                    
                    {/* Price */}
                    <div className='flex-shrink-0'>
                        <p className='para-lg font-bold text-blue-600 whitespace-nowrap'>
                            <FormatPrice price={price} />
                        </p>
                    </div>
                </div>

                {/* Mobile-only Additional Info */}
                <div className='w-full mt-2 sm:hidden'>
                    <div className='flex justify-center'>
                        <span className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
                            Tap to view details
                        </span>
                    </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className='common-overlay absolute inset-0 rounded-lg sm:rounded-xl pointer-events-none'></div>
            </NavLink>    
        </li>
    );
};