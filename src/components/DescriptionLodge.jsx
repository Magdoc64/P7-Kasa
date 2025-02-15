import PropTypes from "prop-types"
import Items from "./Items";


const DescriptionLodge = ({title, host, rating, location, tags, description, equipements}) => {
    const hostName = host.name;
    const imageSrc = host.picture;
    
    const TagsLodge = () => {
        return tags.map(tag => {
            return(
                <li className="lodge-lieu-detail-tags-item" key={`${tag}`}>{tag}</li>
            )
        });
    }
    
    const scaleValue = rating;
    const range = [1,2,3,4,5];

    const RatingLodge = () => {

        return range.map(rangeElement => {
            if (scaleValue >= rangeElement) {
                return (
                <span key={rangeElement.toString()}><img src="../src/assets/star-color.png" alt="etoile pleine"/></span>
                )
            }
        })
    }

    const StarEmpty = () => {
        return range.map(rangeElement => {
            const index = range.indexOf(rangeElement);
            const emptyValue = 5 - rating;

            if (emptyValue >= rangeElement){
                return(
                    <span key={`${index}-${rangeElement.toString()}`}><img src="../src/assets/star-grey.png" alt="etoile vide"/></span>
                )
            }
        })
    }

    const descriptionDetail = [description];

    const ItemDescription = () => {
        return (
            <Items
                key={"description"}
                item="Description"
                description={descriptionDetail}
            />
        )
    }

    const ItemEquipement = () => {
        return (
            <Items
                key={"equipement"}
                item="Equipements"
                description={equipements}
            />
        )
    }

    return (
        <section className="lodge">
            <div className="lodge-lieu">
                <div className="lodge-lieu-detail">
                    <h1 className="lodge-lieu-detail-title">{title}</h1>
                    <p className="lodge-lieu-detail-lieu">{location}</p>
                    <ul className="lodge-lieu-detail-tags"><TagsLodge/></ul>
                </div>
                <div className="lodge-lieu-hote">
                    <div className="lodge-lieu-hote-id">
                        <p className="lodge-lieu-hote-id-name">{hostName}</p>
                        <img src={imageSrc} alt={hostName} className="lodge-lieu-hote-id-photo"/>
                    </div>
                    <div className="lodge-lieu-hote-note">
                        <RatingLodge/>
                        <StarEmpty/>
                    </div>
                </div>
            </div>
            <ul className="lodge-description">
                <ItemDescription/>
                <ItemEquipement/>
            </ul>
        </section>
    )
}

DescriptionLodge.propTypes = {
    title: PropTypes.string,
    tags: PropTypes.array,
    host: PropTypes.object,
    location: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    equipements: PropTypes.array,
}

export default DescriptionLodge