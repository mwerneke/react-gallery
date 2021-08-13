import React from 'react'
import './GalleryList.css'
import {useState} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {
    

    

    
    return (
       
       <div>
            <div>
                {galleryList.map((picture)=>
                    <ul className= 'column'>
                    <GalleryItem 
                        key={picture.id}
                        picture={picture}
                        />
                    </ul>
                    
                    
                    
                )}
            </div>
        </div>
        
    )
}

export default GalleryList
