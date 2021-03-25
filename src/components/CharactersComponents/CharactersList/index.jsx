import { useContext } from 'react'
import {
  Box,
  Row,
  Col,
  HeaderRow,
  Table,
  Thumbnail,
  InnerRow,
  Text,
} from './styled'
import { CharactersContext } from 'contexts/CharactersContext'

const CharactersList = () => {
  const { charactersPages, activePage } = useContext(CharactersContext)
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
          {activePage >= 0
            ? charactersPages?.map(character => {
                // for some reason using template strings (``) here breaks eslint
                const url =
                  character.thumbnail.path + '.' + character.thumbnail.extension
                return (
                  <Row key={character.id}>
                    <Col required>
                      <InnerRow>
                        <Thumbnail src={url} alt={character.name} />
                        <Text characterName>{character.name}</Text>
                      </InnerRow>
                    </Col>
                    <Col>
                      {character.series.items?.slice(0, 3).map(serie => (
                        <Text key={character.id + serie.name}>
                          {serie.name}
                        </Text>
                      ))}
                    </Col>
                    <Col>
                      {character.events.items?.slice(0, 3).map(event => (
                        <Text key={character.id + event.name}>
                          {event.name}
                        </Text>
                      ))}
                    </Col>
                  </Row>
                )
              })
            : 'carregando'}
        </Box>
      </Table>
    </>
  )
}

export default CharactersList
