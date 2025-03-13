import PropTypes from "prop-types"
import { useState } from "react"
import '../styles/Collapse.css'

const Collapse = ({item, description}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return isOpen? (
        Array.isArray(description)? (
            <li>
                <div className="item-titre">
                    <h2>{item}</h2>
                    <button onClick={() => setIsOpen(false)} className="item-titre_chevron item-titre_chevron-bas"><img src="../src/assets/chevron.png" alt="chevron bas"/></button>
                </div>
                <p className="item-text item-text_open">
                    {description.map((element, index) => (
                        <span key={index}>{element}</span>
                    ))}
                </p>
            </li>
        ) : (
            <li>
                <div className="item-titre">
                    <h2>{item}</h2>
                    <button onClick={() => setIsOpen(false)} className="item-titre_chevron item-titre_chevron-bas"><img src="../src/assets/chevron.png" alt="chevron bas"/></button>
                </div>
                <p className="item-text item-text_open">
                    {description}
                </p>
            </li>
        )
    ) : (
        <li>
            <div className="item-titre">
                <h2>{item}</h2>
                <button onClick={() => setIsOpen(true)} className="item-titre_chevron item-titre_chevron-haut"><img src="../src/assets/chevron.png" alt="chevron haut"/></button>
            </div>
            <p className="item-text item-text_close">
                
            </p>
        </li>
    )
}

Collapse.propTypes = {
    item: PropTypes.string,
    description: PropTypes.any
}

export default Collapse