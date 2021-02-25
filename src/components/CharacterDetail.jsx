import React from "react"

import "./CharacterDetail.scss"

export default function CharacterDetail({ character, isOpen }) {
  return (
    <div className="character-detail">
      <p className="character-detail__name">{character.name}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>height: {character.height} cm</p>
      <p>Weight: {character.mass} kg</p>
      <button className="character-detail__btn" onClick={isOpen}>
        Close
      </button>
    </div>
  )
}
