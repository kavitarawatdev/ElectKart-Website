import { useState } from "react";

export const ProductImg = ({ images, name }) => {
    const [imgIdx, setIdx] = useState(0);
    
    const handleImgClick = (idx) => {
        setIdx(() => idx)
    }
    
    console.log(images);
    
    return (
        <div className='img-section w-full'>
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-[0.25fr_1fr] md:grid-cols-[0.3fr_1fr] 
                           gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start sm:items-center">
                
                {/* Thumbnail Images */}
                <div className='thumbnails-container'>
                    {/* Mobile: Horizontal scroll, Desktop: Vertical stack */}
                    <div className="flex sm:flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 
                                   overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0
                                   scrollbar-hide">
                        {images?.map((image, idx) => {
                            return (
                                <figure 
                                    key={idx} 
                                    onClick={() => handleImgClick(idx)} 
                                    className={`common-border btn p-2 sm:p-3 flex-shrink-0
                                               w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                                               hover:shadow-md hover:scale-105 transition-all duration-200
                                               ${imgIdx === idx ? 'border-blue-500 border-2 shadow-md' : 'border-gray-300'}
                                               cursor-pointer rounded-lg overflow-hidden`}
                                    title={`View image ${idx + 1}`}
                                >
                                    <img 
                                        src={image} 
                                        alt={`${name} view ${idx + 1}`} 
                                        className='w-full h-full object-contain' 
                                    />
                                </figure>
                            )
                        })}
                    </div>
                </div>

                {/* Main Image Display */}
                <div className='main-image-container common-border w-full rounded-lg overflow-hidden bg-gray-50'>
                    <figure className='flex-centered p-3 sm:p-4 md:p-5 lg:p-6 w-full 
                                      h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] 2xl:h-[500px]'>
                        <img 
                            src={images[imgIdx]} 
                            alt={`${name} - Main view`} 
                            className='w-full h-full object-contain hover:scale-105 transition-transform duration-300' 
                        />
                    </figure>
                </div>
            </div>

            {/* Image Counter - Mobile only */}
            <div className="flex sm:hidden justify-center mt-3">
                <span className="para-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {imgIdx + 1} of {images?.length}
                </span>
            </div>

            {/* Navigation Arrows for Mobile */}
            <div className="flex sm:hidden justify-between items-center mt-4 px-4">
                <button
                    onClick={() => setIdx(imgIdx > 0 ? imgIdx - 1 : images.length - 1)}
                    className="flex-centered w-10 h-10 bg-white border-2 border-gray-300 rounded-full 
                             hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    aria-label="Previous image"
                >
                    <span className="text-gray-600 text-lg">‹</span>
                </button>
                
                <div className="flex gap-1">
                    {images?.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setIdx(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 
                                       ${idx === imgIdx ? 'bg-blue-500 w-4' : 'bg-gray-300'}`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
                
                <button
                    onClick={() => setIdx(imgIdx < images.length - 1 ? imgIdx + 1 : 0)}
                    className="flex-centered w-10 h-10 bg-white border-2 border-gray-300 rounded-full 
                             hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    aria-label="Next image"
                >
                    <span className="text-gray-600 text-lg">›</span>
                </button>
            </div>
        </div>
    );
};