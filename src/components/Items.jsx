import PropTypes from "prop-types"
import { useState } from "react"
import '../styles/items.css'

const Items = ({item, description}) => {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen? (
        <li>
            <div className="item-titre">
                <h2>{item}</h2>
                <button onClick={() => setIsOpen(false)}><img src="../src/assets/chevron.png" alt="chevron bas" className="item-titre_chevron-bas"/></button>
            </div>
            {description.map((element, index) => (
                <p className="item-text item-text_open" key={index}>{element}</p>
            ))}
        </li>
    )
    : (
        <li>
            <div className="item-titre">
                <h2>{item}</h2>
                <button onClick={() => setIsOpen(true)}><img src="../src/assets/chevron.png" alt="chevron haut" className="item-titre_chevron-haut"/></button>
            </div>
            {description.map((element, index) => (
                <p className="item-text item-text_close" key={index}>{element}</p>
            ))}
        </li>
    )
}

Items.propTypes = {
    item: PropTypes.string,
    description: PropTypes.array
}

export default Items