import {useParams} from 'react-router-dom'
import Gallery from '../../components/Gallery.jsx'
import lodges from '../../data/location.json'
import ErrorPage from '../Error/Error.jsx'
import Collapse from '../../components/Collapse.jsx'

const Logement = () => {
    const {idCard} = useParams();

    const currentLodge = lodges.filter(lodge => lodge.id === idCard);
    const host = currentLodge[0].host;
    const hostName = host.name;
    const imageSrc = host.picture;
    const descriptionDetail = [currentLodge[0].description];

    const scaleValue = currentLodge[0].rating;
    const range = [1,2,3,4,5];
    const emptyValue = 5 - currentLodge[0].rating;

    const testLodge = lodges.find(lodge => lodge.id === idCard);

    return !testLodge ? (
        <main>
            <ErrorPage/>
        </main>
    ):(
        <main>
            {currentLodge.map(lodge => (
                <Gallery key={`${lodge.title}-${lodge.id}`} lodge={lodge}/>))}
        
            <section className="lodge">
                <div className="lodge-lieu">
                    <div className="lodge-lieu-detail">
                        <h1 className="lodge-lieu-detail-title">{currentLodge[0].title}</h1>
                        <p className="lodge-lieu-detail-lieu">{currentLodge[0].location}</p>
                        <ul className="lodge-lieu-detail-tags">
                            {currentLodge[0].tags.map(tag => (
                                <li className="lodge-lieu-detail-tags-item" key={`${tag}`}>{tag}</li>
                            ))}
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
                    {<Collapse key={"description"} item="Description" description={descriptionDetail}/>}
                    {<Collapse key={"equipement"} item="Equipements" description={currentLodge[0].equipments}/>}
                </ul>
            </section>
        </main>
    )
}
export default Logement