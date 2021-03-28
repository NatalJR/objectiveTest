import { Box, Col, HeaderRow, Table, Text } from './styled'
import CharactersCard from 'components/CharactersComponents/CharactersCard'
import { useCharacters } from 'contexts/CharactersContext'

const CharactersList = () => {
  const { state } = useCharacters()
  return (
    <>
      <HeaderRow header>
        <Col required>
          <Text header>Personagem</Text>
        </Col>
        <Col>
          <Text header>Séries</Text>
        </Col>
        <Col>
          <Text header>Eventos</Text>
        </Col>
      </HeaderRow>
      <Table>
        <Box>
          {state.activePage >= 0
            ? state.charactersPage?.map(character => {
                return (
                  <CharactersCard key={character.id} character={character} />
                )
              })
            : 'carregando'}
        </Box>
      </Table>
    </>
  )
}

export default CharactersList
