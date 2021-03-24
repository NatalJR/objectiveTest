import { Wrapper, Header } from 'pages/Characters/styled'
import SearchBar from 'components/CharactersComponents/SearchBar'

const Characters = () => {
  return (
    <Wrapper>
      <Header>Busca de Personagens</Header>
      <SearchBar />
      <div>List</div>
      <div>Pagination</div>
    </Wrapper>
  )
}

export default Characters
