import React from 'react'
import './GalleryList.css'


function GalleryList({galleryList}) {
    
    
    return (
        <div>
            <div>
                {galleryList.map((item)=>
                    <div className= 'column'>
                    <img className = 'image' src ={item.path}/>,
                    {item.description}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GalleryList
