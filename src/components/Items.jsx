import PropTypes from "prop-types"
import { useState } from "react"
import '../styles/items.css'

const Items = ({item, description}) => {
    const [isOpen, setIsOpen] = useState(false)

    const DescriptionItems = () => {
        return description.map((element, index) => {
            return(
                <span key={index}>{element}</span>
            )
        })
    }

    return isOpen? (
        <li>
            <div className="item-titre">
                <h2>{item}</h2>
                <button onClick={() => setIsOpen(false)}><img src="../src/assets/chevron.png" alt="chevron bas" className="item-titre_chevron-bas"/></button>
            </div>
            <p className="item-text item-text_open"><DescriptionItems/></p>
        </li>
    )
    : (
        <li>
            <div className="item-titre">
                <h2>{item}</h2>
                <button onClick={() => setIsOpen(true)}><img src="../src/assets/chevron.png" alt="chevron haut" className="item-titre_chevron-haut"/></button>
            </div>
            <p className="item-text"><DescriptionItems/></p>
        </li>
    )
}

Items.propTypes = {
    item: PropTypes.string,
    description: PropTypes.array
}

export default Items