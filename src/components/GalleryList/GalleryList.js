import React from 'react'
import './GalleryList.css'
import ThumbsUp from '@material-ui/icons/ThumbUp';

function GalleryList({galleryList}) {
    
//MUST DO BUTTONCLICK


    
    return (
        <div>
            <div>
                {galleryList.map((item)=>
                    <div className= 'column'>
                    <img className = 'image' src ={item.path}/>
                    <button><ThumbsUp/></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GalleryList
