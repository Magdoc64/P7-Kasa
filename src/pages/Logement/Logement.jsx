import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import DescriptionLodge from '../../components/DescriptionLodge.jsx'
import Slider from '../../components/Slider.jsx'

const Logement = () => {
   
    const [lodges,setLodges] = useState([]);
    
    const {idCard} = useParams();

    useEffect(() => {
        fetch("../src/data/location.json")
          .then (response => response.json())
          .then (lodges => setLodges(lodges))
          .catch(error=>console.log(error))
      }, [])

    const currentLodge = lodges.filter(lodge => lodge.id === idCard);
    
    const DetailLodge = () => {

        return currentLodge.map(lodge => {

                return (
                    <DescriptionLodge
                        key={`${lodge.title}-${lodge.id}`}
                        title={lodge.title}
                        host={lodge.host}
                        rating={lodge.rating}
                        location={lodge.location}
                        tags={lodge.tags}
                        description={lodge.description}
                        equipements={lodge.equipments}
                    />
                )
        })
    }

    const SliderLodge = () => {
        return currentLodge.map(lodge => {

            return(
                <Slider
                    key={`${lodge.title}-${lodge.id}`}
                    title={lodge.title}
                    pictures={lodge.pictures}
                />
            )
        })
    }
    
    return (
        
    <main>
        
        <SliderLodge/>
        
        <DetailLodge/>
        
    </main>
    )
}
export default Logement