import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { LiaStar } from "react-icons/lia";

export const FormatRating = ({ rating, reviews }) => {
    const ratings = Array.from({ length: 5 }, (ele, i) => {
        let num = i + 0.5;
        return (
            <span className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-yellow-500 hover:text-yellow-400 transition-colors duration-200' key={i}>
                {
                    rating >= i + 1 ? (<LiaStarSolid />) :
                    rating >= num ? (<LiaStarHalfAltSolid />) : (<LiaStar />)
                }
            </span>
        );
    })

    return (
        <div className='rating-container flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3'>
            {/* Stars Section */}
            <div className="stars-display flex items-center gap-0.5 sm:gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
                {ratings}
                <span className="rating-value para-md sm:para-lg font-semibold text-gray-700 ml-2">
                    {rating}
                </span>
            </div>

            {/* Reviews Section */}
            <div className="reviews-info flex items-center">
                <p className='para-sm sm:para-md md:para-lg text-gray-600'>
                    <span className="hidden sm:inline">(</span>
                    <span className="font-medium text-blue-600">{reviews}</span>
                    <span className="ml-1">customer review{reviews !== 1 ? 's' : ''}</span>
                    <span className="hidden sm:inline">)</span>
                </p>
            </div>
        </div>
    );
};