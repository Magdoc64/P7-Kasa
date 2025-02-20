import '../../styles/App.css'
import {elementBanner} from '../../data/elementBanner'
import Card from '../../components/Card.jsx'
import Banner from '../../components/Banner.jsx'
import lodges from '../../data/location.json'

const Home = () => {
  /*const activeNavigation = document.querySelector(".header-nav-item-active");
  activeNavigation.classList.remove("header-nav-item-active")

  const activeAccueil = document.querySelector("#accueil");
  activeAccueil.classList.add("header-nav-item-active");*/
  

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
