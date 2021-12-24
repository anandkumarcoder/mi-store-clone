import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReview.css"

const ProductReviews = ({productReviews}) => {
    return (
        <div className='productReviews'>
            {productReviews.map((item,index)=> (

              <ProductReviewCard price={item.price} review={item.review} name={item.name} image={item.image} index={index}key={item.image}  />  

            ))}
        </div>
    )
}

export default ProductReviews
