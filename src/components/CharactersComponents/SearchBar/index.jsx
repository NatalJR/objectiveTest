import {
  Label,
  Wrapper,
  SearchInputWrapper,
} from 'components/CharactersComponents/SearchBar/styled'

import SearchIcon from 'components/Icons/Search'

const SearchBar = () => {
  return (
    <Wrapper>
      <Label>Nome do Personagem</Label>
      <SearchInputWrapper>
        <input placeholder="Search" name="searchBar" type="text" />
        <SearchIcon />
      </SearchInputWrapper>
    </Wrapper>
  )
}

export default SearchBar
