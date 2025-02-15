import {elementBanner} from '../../data/elementBanner.js'
import Banner from '../../components/Banner.jsx'
import {listItems} from '../../data/listItems.js'
import Items from '../../components/Items.jsx'

const APropos = () => {

    const DisplayBanner = () => {
        return elementBanner.map((element) => {
            const valueId = element.id

            if (valueId===2) { 
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
    
    const List = () => {
        return listItems.map((item) => {
            return (
                <Items
                    key={`${item.id}`}
                    item={item.item}
                    description={item.description}
                />
            )
        })
    }

    return (
        <main className='container'>
        <section className='titre'>
            <DisplayBanner/>
        </section>
        <section className='apropos'>
            <ul className='apropos-item'>
                <List/>
            </ul>
        </section>
        </main>
    )
}

export default APropos