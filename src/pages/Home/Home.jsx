import '../../styles/App.css'
import { useEffect, useState } from 'react'
import {elementBanner} from '../../data/elementBanner'
import Card from '../../components/Card.jsx'
import Banner from '../../components/Banner.jsx'

const Home = () => {

  const DisplayBanner = () => {
    return elementBanner.map((element) => {
      const valueId = element.id

      if (valueId === 1) {
        return (
          <Banner 
            key={`${element.id}`}
            image={element.image}
            title={element.title}
            description={element.description}
          />
        )
      }
    })
  }
      
  const [lodges,setLodges] = useState([])
  
  useEffect(() => {
    fetch("src/data/location.json")
      .then (response => response.json())
      .then (lodges => setLodges(lodges))
      .catch(error=>console.log(error))
  }, [])
  
  const LodgeList = () => {
              
    return lodges.map((lodge) => {
      return (
        <Card
          key={`${lodge.title}-${lodge.id}`}
          id={lodge.id}
          picture={lodge.cover}
          title={lodge.title}
        />
      )
    })
  }

  return (
    <main>
      <section className='titre'>
        <DisplayBanner/>
      </section>
      <section className='location'>
        <LodgeList />
      </section>
    </main>
  )
}

export default Home
