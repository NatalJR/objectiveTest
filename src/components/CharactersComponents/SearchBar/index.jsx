import {
  Label,
  Wrapper,
  SearchInputWrapper,
} from 'components/CharactersComponents/SearchBar/styled'

import SearchIcon from 'components/Icons/Search'
import { useCharacters } from 'contexts/CharactersContext'
import debounced from 'utils/debounced'

const SearchBar = () => {
  const { dispatch } = useCharacters()
  const handleOnChange = e => {
    dispatch({ type: 'searchCharacter', value: e.target.value })
  }
  const debouncedHandleOnChange = debounced(handleOnChange, 500)
  return (
    <Wrapper>
      <Label>Nome do personagem</Label>
      <SearchInputWrapper>
        <input
          placeholder="Search"
          name="searchBar"
          type="text"
          onChange={debouncedHandleOnChange}
        />
        <SearchIcon />
      </SearchInputWrapper>
    </Wrapper>
  )
}

export default SearchBar
