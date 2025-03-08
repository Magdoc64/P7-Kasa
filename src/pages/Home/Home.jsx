import '../../styles/App.css'
import {elementBanner} from '../../data/elementBanner'
import Card from '../../components/Card.jsx'
import Banner from '../../components/Banner.jsx'
import lodges from '../../data/location.json'

const Home = () => {
  return (
    <main>
      <section className='titre'>
        {elementBanner.map((element) => element.id === 1 ? (<Banner key={`${element.id}`} elementBanner={element}/>
        ):null)}
      </section>
      <section className='location'>
        {lodges.map((lodge) => (<Card key={`${lodge.title}-${lodge.id}`} lodge={lodge}/>))}
      </section>
    </main>
  )
}

export default Home
