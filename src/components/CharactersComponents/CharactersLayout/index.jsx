import { useEffect, useCallback } from 'react'
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
import { useCharacters } from 'contexts/CharactersContext'
import { getCharacters } from 'adapters/CharactersAdapter'

const CharactersLayout = () => {
  const { state, dispatch } = useCharacters()
  const getCharactersAsync = useCallback(async () => {
    const limit = 10
    const data = await getCharacters({
      page: state.activePage,
      search: state.search,
      limit,
    })
    if (data) {
      dispatch({
        type: 'setCharactersPage',
        value: {
          results: data.results,
          totalPages: Math.ceil(data.total / limit),
        },
      })
    }
  }, [state.activePage, state.search, dispatch])

  useEffect(() => {
    if (state.activePage >= 0) {
      getCharactersAsync()
    }
  }, [state.activePage, getCharactersAsync])

  return (
    <>
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
    </>
  )
}

export default CharactersLayout
