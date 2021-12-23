import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"

const hotAccessories = ({music, musicCover}) => {
    return (
        <div className='hotAccessories'>
            <div>
                <img src={musicCover} alt="cover"  />
            </div>

            {/* 2nd div  */}

            <div>
                {music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name}  price={item.price}  image={item.image}  index={index} />
                ))}
            </div>
            
        </div>
    )
}

export default hotAccessories
