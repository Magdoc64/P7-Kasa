import PropTypes from "prop-types"
import '../styles/banner.css'
    
const Banner = ({elementBanner}) => {
    return(
        <div className="titre-banner">
            <img src = {elementBanner.image} alt = {elementBanner.description} className='titre-banner-photo'/>
            {elementBanner.title && <h1 className='titre-banner-text'>{elementBanner.title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    elementBanner: PropTypes.array,
}

export default Banner