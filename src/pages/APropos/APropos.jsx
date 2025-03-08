import {elementBanner} from '../../data/elementBanner.js'
import Banner from '../../components/Banner.jsx'
import {listItems} from '../../data/listItems.js'
import Collapse from '../../components/Collapse.jsx'

const APropos = () => {
    return (
        <main className='container'>
            <section className='titre'>
                {elementBanner.map((element) => (element.id===2? (
                    <Banner key={`${element.id}`} elementBanner={element}/>
                ):null))}
            </section>
            <section className='apropos'>
                <ul className='apropos-item'>
                    {listItems.map((item) => (
                    <Collapse key={`${item.id}`} item={item.item} description={item.description}/>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default APropos