import { useState } from 'react'
import './GalleryItem.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function GalleryItem({
    picture, pictureLikes
}) {

    const [isHidden, setIsHidden] = useState(true);

    const handleHide = () => {
        console.log('In handle hide', picture.description); //check if right name

        setIsHidden(!isHidden);
    }

    //let [count, setCount] = useState(0);
    //const onButtonClick = () => {
    //    setCount(count + 1);
    //    console.log('On Button Click', count);
//
    //}



    return (

        <div className='format'>
            <div className='items'>
                <div onClick={handleHide}>{isHidden ? (
                    <div>
                        <img src={picture.path} />
                    </div>
                ) : (
                    <div>
                        <div className='Description'>
                            <h5>{picture.description}</h5>
                        </div>
                    </div>
                )}
                </div>

                <div className='count'>
                    <h4>Likes:{picture.likes}</h4>
                </div>
                <div className='buttons'>
                    <button onClick={()=> pictureLikes(picture.id)}><ThumbUpAltIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;

