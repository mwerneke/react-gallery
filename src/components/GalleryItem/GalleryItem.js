import {useState} from 'react'
import './GalleryItem.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function GalleryItem({
    picture
}) {
    
    let [count, setCount] = useState(0);
    const onButtonClick = () =>{
        setCount(count+1);
        console.log('On Button Click',count);
    
    }

    return (
       <>
       
       <div className='items'>
           <img src ={picture.path}/>
        </div>
            <div className= 'count'>
                <h4>Likes:{count}</h4> 
            </div>
            <div className='buttons'>
                <button onClick={onButtonClick}><ThumbUpAltIcon/></button>
           </div>
        </>
    )
}

export default GalleryItem;

