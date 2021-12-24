import React from 'react'
import VideosCard from "./VideosCard.js"
import "../styles/videos.css"

const videos = ({videos}) => {
    return (
        <div className='videos'>
            {videos.map((item,index)=> (
                <VideosCard key={item.image} index={index} name={item.name}  image={item.image} />

            ))}
            
        </div>
    )
}

export default videos
