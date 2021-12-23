import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"

const hotAccessories = ({music, musicCover , smartDevice, smartDeviceCover}) => {
    return (
        <div className='hotAccessories'>
            <div>
                <img src={musicCover || smartDeviceCover} alt="cover"  />
            </div>

            {/* 2nd div  */}

            <div>
                {music && music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name}  price={item.price}  image={item.image}  index={index} />
                ))}

                 {smartDevice && smartDevice.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name}  price={item.price}  image={item.image}  index={index} />
                ))}
            </div>
            
        </div>
    )
}

export default hotAccessories
