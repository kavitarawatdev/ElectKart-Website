import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks/customHook";
import { ImgSwiper } from "../components/ImgSwiper";
import { PageNavigation } from "../helper/PageNavigation";
import { ProductImg } from "../components/ProductImg";
import { FormatPrice } from "../helper/FormatPrice";
import { ProductWarranty } from "../helper/ProductWarranty";
import { FormatRating } from "../helper/FormatRatings";
import { AddToCart } from "../components/AddToCart";
const URL ="https://eleckart-api.onrender.com/api/products";
export const IndProduct = () => {

    const {id}=useParams();
    console.log(id);
    const {isIndLoading, getIndItem, indProduct}=useAppContext()
    console.log(indProduct);

    const {_id:itemId, name, company, price, description, category, stock, rating, reviews, images} = indProduct;
    console.log(indProduct);
    useEffect(()=>{
        getIndItem(`${URL}/${id}`);
    },[id])

    if(isIndLoading){
        return <h1>LOADING...........</h1>
    }
    return (
        <section className='section single-item'>

            <PageNavigation title={name}/>

            <div className="container grid grid-cols-2 gap-10">

                {images && Array.isArray(images) && <ProductImg images={images} name={name} />}

                <div className="product-details para-lg flex flex-col gap-4">
                    <h2 className="common-heading">{name}</h2>
                        <FormatRating rating={rating} reviews={reviews}/>
                    <p className="product-og-price">
                        MRP: <strong><del><FormatPrice price={price + 25000}/></del> </strong>
                    </p>
                    <p className='product-deal-price'>
                        Deal of the day: <strong><FormatPrice price={price}/></strong>a
                    </p>

                    <p>{description}</p>

                    <ProductWarranty/>

                    <p className="stock-data">
                      Available: <strong>{stock>0?"In Stock":"Not Available"}</strong>
                    </p>

                    <p>
                        ID: <strong>{itemId}</strong>
                    </p>

                    <p>
                        Brand: <strong>{company}</strong>
                    </p>
                    <p>
                        Category: <strong>{category}</strong>
                    </p>
                    <hr className='border-1'/>
                    {
                        stock > 0 && <AddToCart indProduct={indProduct} />
                    }
                    
                </div>
            </div>           
        </section>
    );
};