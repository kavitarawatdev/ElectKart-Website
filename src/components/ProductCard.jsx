import { NavLink } from "react-router-dom";
import { FormatPrice } from "../helper/FormatPrice";

export const ProductCard = ({...ele}) => {
    const {_id, name, img, price, category}=ele
    return (
        <li className='border-1 border-green-400 bg-white' key={_id}>
            <NavLink to={`/indProduct/${_id}`} className="flex flex-col justify-between items-center p-3 h-[100%] ">
                <figure className='relative'>
                  <img src={img} alt={name} className="h-55"/>
                  <figcaption className='caption para-lg bg-green-400'>{category}</figcaption>
                </figure>

                <div className='flex justify-between gap-8 items-center para-lg px-2 w-[100%]'>
                    <h6 className='heading-6'>{name}</h6>
                    <p className='para-lg font-medium'>
                        <FormatPrice price={price} />
                    </p>
                </div>
           </NavLink>    
        </li>
    );
};