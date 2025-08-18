import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks/customHook";
import { PageNavigation } from "../helper/PageNavigation";
import { ProductImg } from "../components/ProductImg";
import { FormatPrice } from "../helper/FormatPrice";
import { ProductWarranty } from "../helper/ProductWarranty";
import { FormatRating } from "../helper/FormatRatings";
import { AddToCart } from "../components/AddToCart";
import { Loading } from "../helper/Loading";
import { ProductInfo } from "../helper/ProductInfo";
const URL ="https://eleckart-api.onrender.com/api/products";


export const IndProduct = () => {

    const { id } = useParams();
    console.log(id);
    const { isIndLoading, getIndItem, indProduct } = useAppContext()
    console.log(indProduct);

    const { _id: itemId, name, company, price, description, category, stock, rating, reviews, images } = indProduct;
    
    useEffect(() => {
        getIndItem(`${URL}/${id}`);
    }, [id])

    if (isIndLoading) {
        return <Loading message={'Loading Product Details'} />
    }

    return (
        <section className='section single-item'>

            <PageNavigation title={name} />

            <div className="container">
                {/* Mobile: Stack vertically, Desktop: Side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 xl:gap-12">

                    {/* Product Images Section */}
                    <div className="product-images-section">
                        {images && Array.isArray(images) && <ProductImg images={images} name={name} />}
                    </div>

                    {/* Product Details Section */}
                    <div className="product-details para-md sm:para-lg flex flex-col gap-3 sm:gap-4 md:gap-5 xl:gap-6">
                        
                        {/* Product Name */}
                        <h2 className="common-heading text-left mb-2 sm:mb-3">
                            {name}
                        </h2>

                        {/* Rating */}
                        <div className="product-rating mb-2 sm:mb-3">
                            <FormatRating rating={rating} reviews={reviews} />
                        </div>

                        {/* Pricing Section */}
                        <div className="pricing-section bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg border border-gray-200">
                            <p className="product-og-price para-md text-gray-500 mb-1 sm:mb-2">
                                MRP: <strong><del><FormatPrice price={price + 25000} /></del></strong>
                            </p>
                            <p className='product-deal-price para-lg sm:para-xl font-bold text-green-600 mb-2'>
                                Deal of the day: <strong><FormatPrice price={price} /></strong>
                            </p>
                            <div className="savings-info para-sm text-green-700 bg-green-100 px-2 py-1 rounded inline-block">
                                You Save: <strong><FormatPrice price={25000} /></strong>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="product-description">
                            <h4 className="heading-6 font-semibold text-gray-800 mb-2 sm:mb-3">Description</h4>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                {description}
                            </p>
                        </div>

                        {/* Warranty Info */}
                        <div className="warranty-section">
                            <ProductWarranty />
                        </div>

                        {/* Product Info Grid */}
                        <ProductInfo stock={stock} category={category} itemId={itemId} company={company} />

                        {/* Divider */}
                        <hr className='border-1 border-gray-300 my-2 sm:my-3 md:my-4'/>

                        {/* Add to Cart Section */}
                        <div className="add-to-cart-section pt-2 sm:pt-3">
                            {stock > 0 && <AddToCart indProduct={indProduct} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};