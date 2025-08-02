import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { LiaStar } from "react-icons/lia";
export const FormatRating = ({rating, reviews}) => {
    const ratings=Array.from({length:5},(ele,i)=>{
        let num=i+0.5;
        return (
        <span className='para-lg text-yellow-500' key={i}>
           {
               rating>= i+1?(<LiaStarSolid/>):
               rating>=num ?(<LiaStarHalfAltSolid/>):(<LiaStar/>)
           }
        </span>
        );
    })

    return(
        <div className='flex items-center'>
            {ratings}
            <p className='para-lg px-3'>({reviews} customer reviews)</p>
        </div>
    )
};