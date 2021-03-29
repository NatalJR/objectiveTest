import { useCharacters } from 'contexts/CharactersContext'
import { Card, Col, Thumbnail, InnerRow, Text } from './styled'
import ExpandedCard from './ExpandedCard'

const renderNonExpandedCard = character => {
  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`
  const series = character.series.items?.slice(0, 3)
  const events = character.events.items?.slice(0, 3)
  return (
    <>
      <Col required expanded>
        <InnerRow>
          <Thumbnail src={url} alt={character.name} />
          <Text title={character.name} characterName>
            {character.name}
          </Text>
        </InnerRow>
      </Col>
      <Col>
        {series?.map(serie => (
          <Text title={serie.name} key={serie.resourceURI}>
            {serie.name}
          </Text>
        ))}
      </Col>
      <Col>
        {events?.map(event => (
          <Text title={event.name} key={event.resourceURI}>
            {event.name}
          </Text>
        ))}
      </Col>
    </>
  )
}

const CharactersCard = ({ character }) => {
  const { state, dispatch } = useCharacters()
  const expanded = state.selectedCharacter === character.id

  const handleExpansion = () => {
    dispatch({ type: 'selectCharacter', value: character.id })
  }

  return (
    <Card expanded={expanded} onClick={() => !expanded && handleExpansion()}>
      {expanded ? (
        <ExpandedCard character={character} />
      ) : (
        renderNonExpandedCard(character)
      )}
    </Card>
  )
}

export default CharactersCard
