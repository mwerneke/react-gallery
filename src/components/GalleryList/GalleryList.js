import React from 'react'
import './GalleryList.css'


function GalleryList({galleryList}) {
    
//MUST DO BUTTONCLICK


    
    return (
        <div>
            <div>
                {galleryList.map((item)=>
                    <div className= 'column'>
                    <img className = 'image' src ={item.path}/>
                    <button>Love it</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GalleryList
