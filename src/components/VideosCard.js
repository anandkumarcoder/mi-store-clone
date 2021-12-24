import React from 'react'

const VideosCard = ({name,image,index}) => {
    return (
        <div className='videoCard'>
            <img src={image} alt={`${index} image`} />
            <span>{name}</span>
            
        </div>
    )
}

export default VideosCard
