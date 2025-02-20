import {elementBanner} from '../../data/elementBanner.js'
import Banner from '../../components/Banner.jsx'
import {listItems} from '../../data/listItems.js'
import Items from '../../components/Items.jsx'

const APropos = () => {
    const activeNavigation = document.querySelector(".header-nav-item-active");
    activeNavigation.classList.remove("header-nav-item-active")

    const activeApropos = document.querySelector("#apropos");
    activeApropos.classList.add("header-nav-item-active")


    return (
        <main className='container'>
        <section className='titre'>
            {elementBanner.map((element) => (
                element.id===2? (
                    <Banner key={`${element.id}`} elementBanner={element}/>):null))}
        </section>
        <section className='apropos'>
            <ul className='apropos-item'>
                {listItems.map((item) => (
                <Items key={`${item.id}`} item={item.item} description={item.description}/>))}
            </ul>
        </section>
        </main>
    )
}

export default APropos