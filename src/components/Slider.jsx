import PropTypes from "prop-types"

const Slider = ({lodge}) => {
    
    let currentSlide = 0;
    let currentPicture = lodge.pictures[0];
    let imageSrc = currentPicture;
    
    const allPictures = lodge.pictures.length;

    let pictureIndex = lodge.pictures.indexOf(lodge.pictures[currentSlide])+1;
    let currentCounter = pictureIndex+"/"+allPictures;

    const HandleSlide = () => {
        currentPicture = lodge.pictures[currentSlide];
        imageSrc = currentPicture;
        let imageCurrent = document.querySelector(".slider-container-image");

        return(
            imageCurrent.src = imageSrc,
            imageCurrent.alt = lodge.title
        )
    }

    const HandleCounter = () => {
        pictureIndex = lodge.pictures.indexOf(lodge.pictures[currentSlide])+1;
        currentCounter = pictureIndex+"/"+allPictures;

        let pictureCounter = document.querySelector(".slider-container-counter");
        
        return (
            pictureCounter.innerHTML = currentCounter
        )
    }

    const previousSlide = () => {
        currentSlide > 0 ?  currentSlide-- : currentSlide = allPictures-1;

        HandleSlide();
        HandleCounter();
    }

    const nextSlide = () => {
        currentSlide < allPictures-1 ? currentSlide ++ : currentSlide = 0;

        HandleSlide();
        HandleCounter();
    }

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
                <img src={imageSrc} alt={lodge.title} className="slider-container-image"/>
                <div className="slider-container-counter">{currentCounter}</div>
            </div>
        </section>
    ):(
        <section className='slider'>
            <div className="slider-container">
                <img src={imageSrc} alt={lodge.title} className="slider-container-image"/>
            </div>
        </section>
    )
}


Slider.propTypes = {
    lodge: PropTypes.array
}

export default Slider