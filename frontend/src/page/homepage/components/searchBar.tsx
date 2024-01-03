import React from 'react'
import { SearchBarWrapper } from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

type PropType = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = (props: PropType) => {
  return (
    <SearchBarWrapper>
        <input value={props.search} onChange={e => props.setSearch(e.target.value)}/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
    </SearchBarWrapper>
  )
}

export default SearchBar