import React from 'react'
import './GalleryList.css'
import ThumbsUp from '@material-ui/icons/ThumbUp';
import {useState} from 'react'

function GalleryList({galleryList}) {
    
//MUST DO BUTTONCLICK
    let [count, setCount] = useState(0);
    const onButtonClick = () =>{
        setCount(count+1);
        console.log('On Button Click',count);
    
    }

    
    return (
       
       <div>
            <div>
                {galleryList.map((item, i)=>
                    <ul className= 'column'>
                    <img src ={item.path}/>
                    <div>
                    <button onClick={onButtonClick}><ThumbsUp/></button>
                    </div>
                    <h4>Likes:{count}</h4>
                    </ul>
                    
                    
                    
                )}
            </div>
        </div>
        
    )
}

export default GalleryList
