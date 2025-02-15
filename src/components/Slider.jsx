import PropTypes from "prop-types"

const Slider = ({title, pictures}) => {
    
    let currentSlide = 0;
    let currentPicture = pictures[0];
    let imageSrc = currentPicture;
    
    const allPictures = pictures.length;

    let pictureIndex = pictures.indexOf(pictures[currentSlide])+1;
    let currentCounter = pictureIndex+"/"+allPictures;

    const HandleSlide = () => {
        currentPicture = pictures[currentSlide];
        imageSrc = currentPicture;
        let imageCurrent = document.querySelector(".slider-container-image");

        return(
            imageCurrent.src = imageSrc,
            imageCurrent.alt = {title}
        )
    }

    const HandleCounter = () => {
        pictureIndex = pictures.indexOf(pictures[currentSlide])+1;
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

    if (allPictures>1){
    return (
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
                <img src={imageSrc} alt={title} className="slider-container-image"/>
                <div className="slider-container-counter">{currentCounter}</div>
            </div>
        </section>
    )
    }else{
        return(
        <section className='slider'>
            <div className="slider-container">
                <img src={imageSrc} alt={title} className="slider-container-image"/>
            </div>
        </section>
        )
    }
}

Slider.propTypes = {
    title: PropTypes.string,
    pictures: PropTypes.array,
}

export default Slider