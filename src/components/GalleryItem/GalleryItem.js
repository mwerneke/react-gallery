import {useState} from 'react'
function GalleryItem({
    picture
}) {
    
    let [count, setCount] = useState(0);
    const onButtonClick = () =>{
        setCount(count+1);
        console.log('On Button Click',count);
    
    }

    return (
       <div className='items'>
           <img src ={picture.path}/>{picture.description}{picture.likes}
            <h4>Likes:{count}</h4> 
           <button onClick={onButtonClick}>Like</button>
           </div>
    )
}

export default GalleryItem;

//<h4>Likes:{count}</h4>