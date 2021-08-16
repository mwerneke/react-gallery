import React from 'react'
import {useState} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, pictureLikes}) {
    

    


    return (

        <div>
            <div>
                {galleryList.map((picture) =>
                    <ul>
                        <GalleryItem
                            key={picture.id}
                            picture={picture}
                            pictureLikes={pictureLikes}
                        />
                    </ul>
                )}
            </div>
        </div>

    )
}

export default GalleryList
