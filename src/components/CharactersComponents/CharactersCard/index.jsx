import { Row, Col, Thumbnail, InnerRow, Text } from './styled'

const CharactersCard = ({ character }) => {
  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`
  return (
    <Row>
      <Col required>
        <InnerRow>
          <Thumbnail src={url} alt={character.name} />
          <Text title={character.name} characterName>
            {character.name}
          </Text>
        </InnerRow>
      </Col>
      <Col>
        {character.series.items?.slice(0, 3).map(serie => (
          <Text title={serie.name} key={serie.resourceURI}>
            {serie.name}
          </Text>
        ))}
      </Col>
      <Col>
        {character.events.items?.slice(0, 3).map(event => (
          <Text title={event.name} key={event.resourceURI}>
            {event.name}
          </Text>
        ))}
      </Col>
    </Row>
  )
}

export default CharactersCard
