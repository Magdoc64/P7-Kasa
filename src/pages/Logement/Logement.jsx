import {useParams} from 'react-router-dom'
import Gallery from '../../components/Gallery.jsx'
import lodges from '../../data/location.json'
import ErrorPage from '../Error/Error.jsx'
import Collapse from '../../components/Collapse.jsx'

const Logement = () => {
    const {idCard} = useParams();
    
    const currentLodge = lodges.find(lodge => lodge.id === idCard);
    const currentHost = currentLodge.host;
 
    const range = [1,2,3,4,5];
   
    return !currentLodge ? (
        <ErrorPage/>
    ):(
        <main>
            <Gallery key={`${currentLodge.title}-${currentLodge.id}`} lodge={currentLodge}/>
        
            <section className="lodge">
                <div className="lodge-lieu">
                    <div className="lodge-lieu-detail">
                        <h1 className="lodge-lieu-detail-title">{currentLodge.title}</h1>
                        <p className="lodge-lieu-detail-lieu">{currentLodge.location}</p>
                        <ul className="lodge-lieu-detail-tags">
                            {currentLodge.tags.map(tag => (
                                <li className="lodge-lieu-detail-tags-item" key={`${tag}`}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="lodge-lieu-hote">
                        <div className="lodge-lieu-hote-id">
                            <p className="lodge-lieu-hote-id-name">{currentHost.name}</p>
                            <img src={currentHost.picture} alt={currentHost.name} className="lodge-lieu-hote-id-photo"/>
                        </div>
                        <div className="lodge-lieu-hote-note">
                            {range.map(rangeElement => currentLodge.rating >= rangeElement? (
                                <span key={rangeElement.toString()}><img src="../src/assets/star-color.png" alt="etoile pleine"/></span>
                            ):null)}
                            {range.map(rangeElement => (5 - currentLodge.rating) > range.indexOf(rangeElement)? (
                                <span key={`${range.indexOf(rangeElement)}-${rangeElement.toString()}`}><img src="../src/assets/star-grey.png" alt="etoile vide"/></span>
                            ):null)}
                        </div>
                    </div>
                </div>
                <ul className="lodge-description">
                    {<Collapse key={"description"} item="Description" description={currentLodge.description}/>}
                    {<Collapse key={"equipement"} item="Equipements" description={currentLodge.equipments}/>}
                </ul>
            </section>
        </main>
    )
}
export default Logement