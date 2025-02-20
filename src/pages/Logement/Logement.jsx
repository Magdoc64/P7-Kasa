import {useParams} from 'react-router-dom'
import DescriptionLodge from '../../components/DescriptionLodge.jsx'
import Slider from '../../components/Slider.jsx'
import lodges from '../../data/location.json'
import ErrorPage from '../Error/Error.jsx'

const Logement = () => {
    const {idCard} = useParams();

    const currentLodge = lodges.filter(lodge => lodge.id === idCard);
  
    const testLodge = lodges.find(lodge => lodge.id === idCard);

    return !testLodge ? (
        <main>
            <ErrorPage/>
        </main>
    ):(
        <main>
            {currentLodge.map(lodge => (
                <Slider key={`${lodge.title}-${lodge.id}`} lodge={lodge}/>))}
        
            {currentLodge.map(lodge => (
                <DescriptionLodge key={`${lodge.title}-${lodge.id}`} lodge={lodge}/>))}
        </main>
    )
}
export default Logement