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

    return (

        <div className='format'>
                <div onClick={handleHide}>{isHidden ? (
                    <div className ='items'>
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
                    <button onClick={() => pictureLikes(picture.id)}><ThumbUpAltIcon /></button>
                </div>
            
        </div>
    )
}

export default GalleryItem;

