import { NavLink } from "react-router-dom";
import { FormatPrice } from "../helper/FormatPrice";

export const ListViewProducts = ({ filterProducts }) => {
    
    return (
        <section>
            <ul className="grid grid-cols-1 gap-10">
                {
                    filterProducts?.map((ele) => {
                        const { _id, name, img, price, category, description } = ele
                        return (
                            <li className='grid grid-cols-[0.7fr_1fr] border-y-1 p-5 gap-10' key={_id}>
                                <figure className='relative'>
                                    <img src={img} alt={name} />
                                    <figcaption className='caption para'>{category}</figcaption>
                                </figure>
                                <div className='product-details flex flex-col gap-3'>
                                    <h5 className='heading-4'>{name}</h5>
                                    <p className='para-lg'>
                                        <FormatPrice price={price} />
                                    </p>
                                    <p className='para-lg w-[80%] text-justify'>{description.slice(0, 110) + "..."}</p>

                                    <NavLink to={`/indProduct/${_id}`} className='para-lg border-2 p-3 w-fit'>
                                        Read More
                                    </NavLink>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    );
};