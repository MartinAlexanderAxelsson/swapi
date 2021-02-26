import React, { useState, useEffect, useRef } from "react"
import CharacterListItem from "../components/CharacterListItem"
import "./CharacterListPage.scss"
import Logo from "../images/SW_Logo.png"
import GitLogo from "../images/GitHub_Logo.png"
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai"

export default function CharacterListPage() {
  const [characterList, setCharacterList] = useState(null)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const searchInput = useRef("")
  const clearIcon = { visibility: "hidden" }
  const [disableAtEnd, SetDisableAtEnd] = useState(false)

  function getCharacterList() {
    const url = `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacterList(data.results)
        if (data.next === null) {
          SetDisableAtEnd(true)
        } else {
          SetDisableAtEnd(false)
        }
      })
  }

  if (searchTerm) {
    clearIcon.visibility = "visible"
  }

  function handleSearch() {
    setSearchTerm(searchInput.current.value)
    setPage(1)
  }

  function handleClearSearch() {
    setSearchTerm("")
    searchInput.current.value = ""
    setPage(1)
  }

  useEffect(() => {
    getCharacterList()
  }, [page, searchTerm])

  return (
    <div className="main-container">
      <div className="main-container__wrapper">
        <img className="main-container__wrapper__img" src={Logo}></img>

        <div className="main-container__search-wrapper">
          <AiOutlineSearch class="main-container__search-wrapper__icon" />
          <input
            ref={searchInput}
            className="main-container__search-wrapper__input"
            placeholder="Search"
            type="text"
            onChange={handleSearch}
          ></input>
          <AiFillCloseCircle
            style={clearIcon}
            onClick={handleClearSearch}
            class="main-container__search-wrapper__clear-icon"
          />
        </div>

        {characterList && characterList.length === 0 ? (
          <div className="err-message">
            <p>Sorry, no StarWars character has that name:)</p>
            <p>Please try again, may the force be with you!</p>
          </div>
        ) : (
          <div className="character-list-item__container">
            {characterList &&
              characterList.map((character) => {
                return <CharacterListItem character={character} />
              })}
          </div>
        )}

        <div>
          <button
            className="main-container__wrapper__prev-btn"
            disabled={page < 2}
            onClick={(e) => setPage(page - 1)}
          >
            Prev
          </button>
          <button
            disabled={disableAtEnd}
            className="main-container__wrapper__next-btn"
            onClick={(e) => setPage(page + 1)}
          >
            Next
          </button>
        </div>
        <a href="https://github.com/MartinAlexanderAxelsson/swapi">
          <img className="main-container__wrapper__gitlogo" src={GitLogo}></img>
        </a>
      </div>
    </div>
  )
}
