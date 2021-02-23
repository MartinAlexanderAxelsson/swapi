import React, {useState} from 'react'
import './CharacterListItem.scss'
import Popup from './Popup'

export default function CharacterListItem({character}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
           <div className="characterlist__items" onClick={e => setIsOpen(!isOpen)}>{character.name}</div>
           {isOpen && <Popup character={character} isOpen={e => setIsOpen(!isOpen)}/>}
        </>
    )
}
