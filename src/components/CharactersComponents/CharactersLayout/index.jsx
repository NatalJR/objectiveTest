import { useEffect, useState } from 'react'
import {
  Wrapper,
  Header,
  Pagination,
  HeaderWrapper,
  BodyWrapper,
} from './styled'
import SearchBar from 'components/CharactersComponents/SearchBar'
import CharactersList from 'components/CharactersComponents/CharactersList'
import { CharactersContext } from 'contexts/CharactersContext'
import { getCharacters } from 'adapters/CharactersAdapter'

const CharactersLayout = () => {
  const [characters, setCharacters] = useState([{}, {}, {}, {}])

  useEffect(() => {
    const charactersList = getCharacters()
    if (charactersList) {
      console.log(charactersList)
    }
  }, [])

  return (
    <CharactersContext.Provider value={{ characters }}>
      <Wrapper>
        <HeaderWrapper>
          <Header>Busca de Personagens</Header>
          <SearchBar />
        </HeaderWrapper>
        <BodyWrapper>
          <CharactersList />
        </BodyWrapper>
      </Wrapper>
      <Pagination>Pagination</Pagination>
    </CharactersContext.Provider>
  )
}

export default CharactersLayout
