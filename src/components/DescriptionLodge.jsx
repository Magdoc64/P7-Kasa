import PropTypes from "prop-types"
import Items from "./Items";


const DescriptionLodge = ({lodge}) => {
    const hostName = lodge.host.name;
    const imageSrc = lodge.host.picture;
    
    const scaleValue = lodge.rating;
    const range = [1,2,3,4,5];
    const emptyValue = 5 - lodge.rating;

    const descriptionDetail = [lodge.description];

    return (
        <section className="lodge">
            <div className="lodge-lieu">
                <div className="lodge-lieu-detail">
                    <h1 className="lodge-lieu-detail-title">{lodge.title}</h1>
                    <p className="lodge-lieu-detail-lieu">{lodge.location}</p>
                    <ul className="lodge-lieu-detail-tags">
                        {lodge.tags.map(tag => (
                            <li className="lodge-lieu-detail-tags-item" key={`${tag}`}>{tag}</li>)
                        )}
                    </ul>
                </div>
                <div className="lodge-lieu-hote">
                    <div className="lodge-lieu-hote-id">
                        <p className="lodge-lieu-hote-id-name">{hostName}</p>
                        <img src={imageSrc} alt={hostName} className="lodge-lieu-hote-id-photo"/>
                    </div>
                    <div className="lodge-lieu-hote-note">
                        {range.map(rangeElement => scaleValue >= rangeElement? (
                            <span key={rangeElement.toString()}><img src="../src/assets/star-color.png" alt="etoile pleine"/></span>
                        ):null)}
                        {range.map(rangeElement => emptyValue >= range.indexOf(rangeElement)? (
                            <span key={`${range.indexOf(rangeElement)}-${rangeElement.toString()}`}><img src="../src/assets/star-grey.png" alt="etoile vide"/></span>
                        ):null)}
                    </div>
                </div>
            </div>
            <ul className="lodge-description">
                {<Items key={"description"} item="Description" description={descriptionDetail}/>}
                {<Items key={"equipement"} item="Equipements" description={lodge.equipments}/>}
            </ul>
        </section>
    )
}

DescriptionLodge.propTypes = {
    lodge: PropTypes.array,
}

export default DescriptionLodge
