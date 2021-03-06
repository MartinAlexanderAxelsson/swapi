import React, { useState, useEffect } from "react"
import "./Popup.scss"
import CharacterDetail from "./CharacterDetail"

export default function Popup({ isOpen, character }) {
  return (
    <div className="popup-container">
      <CharacterDetail character={character} isOpen={isOpen} />
    </div>
  )
}
