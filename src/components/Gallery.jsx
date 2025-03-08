import { useState } from "react";
import PropTypes from "prop-types"

const Gallery = ({lodge}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0); 
    const allPictures = lodge.pictures.length;
    let currentPicture = lodge.pictures[currentIndex];
    let currentCounter = currentIndex + 1 +"/"+ allPictures

    const previousSlide = () => {
        setCurrentIndex((index) =>
            index === 0 ? allPictures - 1 : index - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((index) =>
            index === allPictures - 1 ? 0 : index + 1
        );
    };

    return allPictures>1? (
        <section className='slider'>
            <div className="slider-control">
                <button onClick={previousSlide} className="slider-control-left">
                    <img src="../src/assets/chevron-left.png" alt="flèche gauche"/>
                </button>
                <button onClick={nextSlide} className="slider-control-right">
                    <img src="../src/assets/chevron-right.png" alt="flèche droite"/>
                </button>
            </div>
            <div className="slider-container">
                <img 
                    src={currentPicture} 
                    alt={lodge.title} 
                    className="slider-container-image"
                />
                <div className="slider-container-counter">{currentCounter}</div>
            </div>
        </section>
    ):(
        <section className='slider'>
            <div className="slider-container">
                <img src={currentPicture} 
                    alt={lodge.title} 
                    className="slider-container-image"
                />
            </div>
        </section>
    )
}


Gallery.propTypes = {
    lodge: PropTypes.array
}

export default Gallery