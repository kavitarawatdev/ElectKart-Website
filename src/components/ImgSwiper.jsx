import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks/customHook";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
const URL ="https://api.pujakaitem.com/api/products";
export const ImgSwiper = () => {
    
    const {id}=useParams();

    const {isIndLoading, getIndItem, indProduct}=useAppContext()

    const {id:itemId,  image} = indProduct
    console.log(indProduct);
    useEffect(()=>{
        getIndItem(`${URL}?id=${id}`);
    },[id])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className='img-slider'>
                <div className="container">

                    <Swiper
                        
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {image.map((ele) => {
                        const {id, width, height, url,filename, size, type}=ele
                            return (
                                <SwiperSlide key={id}>
                                    <img src={url} alt={filename}/>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >

               {image.map((ele) => {
                        const {id, width, height, url,filename, size, type}=ele
                            return (
                                <SwiperSlide key={id}>
                                    <img src={url} alt={filename}/>
                                </SwiperSlide>
                            )
                        })}

            </Swiper>
        </>
    );
}
