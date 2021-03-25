import {
  Wrapper,
  Header,
  Pagination,
  HeaderWrapper,
  BodyWrapper,
} from './styled'
import SearchBar from 'components/CharactersComponents/SearchBar'
import CharactersList from 'components/CharactersComponents/CharactersList'

const Characters = () => {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Header>Busca de Personagens</Header>
          <SearchBar />
        </HeaderWrapper>
        <BodyWrapper>
          <CharactersList characters={[{}, {}, {}, {}, {}, {}, {}, {}, {}]} />
        </BodyWrapper>
      </Wrapper>
      <Pagination>Pagination</Pagination>
    </>
  )
}

export default Characters
