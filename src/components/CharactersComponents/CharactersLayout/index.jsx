import { useEffect, useState, useCallback } from 'react'
import {
  Wrapper,
  Header,
  HeaderWrapper,
  BodyWrapper,
  PaginationWrapper,
} from './styled'
import SearchBar from 'components/CharactersComponents/SearchBar'
import List from 'components/CharactersComponents/CharactersList'
import Pagination from 'components/CharactersComponents/CharactersPagination'
import { CharactersContext } from 'contexts/CharactersContext'
import { getCharacters } from 'adapters/CharactersAdapter'

const CharactersLayout = () => {
  const [charactersPages, setCharactersPages] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const getCharactersAsync = useCallback(async () => {
    const limit = 10
    const data = await getCharacters({ page: activePage, limit })
    if (data) {
      setCharactersPages(data.results)
      setTotalPages(data.total / limit)
    }
  }, [activePage])

  useEffect(() => {
    if (activePage >= 0) {
      getCharactersAsync()
    }
  }, [activePage, getCharactersAsync])

  return (
    <CharactersContext.Provider
      value={{
        charactersPages,
        totalPages,
        activePage: activePage - 1,
        setActivePage,
        setCharactersPages,
        getCharactersAsync,
      }}
    >
      <Wrapper>
        <HeaderWrapper>
          <Header>Busca de personagens</Header>
          <SearchBar />
        </HeaderWrapper>
        <BodyWrapper>
          <List />
        </BodyWrapper>
      </Wrapper>
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </CharactersContext.Provider>
  )
}

export default CharactersLayout
