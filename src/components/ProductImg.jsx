import { useState } from "react";

export const ProductImg = ({images, name}) => {
    const [imgIdx, setIdx]=useState(0);
    const handleImgClick=(idx)=>{
        setIdx(()=>idx)
    }
    console.log(images);
    return (
        <div className='img-section grid grid-cols-[0.3fr_1fr] gap-3 items-center'>
            <div className='flex-centered flex-col gap-8'>
                {
                    images?.map((image, idx)=>{
                        return(
                            <figure key={idx} onClick={()=>handleImgClick(idx)} className='h-[100px] p-3 border-1 border-green-400 cursor-pointer'>
                                <img src={image} alt={name} className='h-[100%] ' />
                            </figure>
                        )
                    })
                }
            </div>

            <div className='border-2 border-green-400 h-150 flex-centered'>
                <figure className='flex-centered p-3'>
                     <img src={images[imgIdx]} alt={name} className='w-auto' />
                </figure>
               
            </div>
        </div>
    );
};