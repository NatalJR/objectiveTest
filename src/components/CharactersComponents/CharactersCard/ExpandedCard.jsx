import { useEffect, useState } from 'react'
import {
  ExpandedCardCol as Col,
  ExpandedCardThumbnail as Thumbnail,
  InnerRow,
  Text,
  ThumbWrapper,
  TextWrapper,
  CloseWrapper,
} from './styled'
import { getComicsByCharacterId } from 'adapters/CharactersAdapter'
import { useCharacters } from 'contexts/CharactersContext'

const ExpandedCard = ({ character }) => {
  const { state, dispatch } = useCharacters()
  const [loading, setLoading] = useState(false)
  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`

  useEffect(() => {
    async function getComics() {
      setLoading(true)
      const response = await getComicsByCharacterId(character.id)
      setLoading(false)
      const comics = response.results
      dispatch({ type: 'setComics', value: comics })
    }
    if (character.id) getComics()
  }, [character.id, dispatch])

  function handleCloseClick() {
    dispatch({ type: 'selectCharacter', value: character.id })
  }

  return (
    <>
      <Col required expanded>
        <InnerRow justifyBetween>
          <ThumbWrapper size="150">
            <Thumbnail size="150" src={url} alt={character.name} />
          </ThumbWrapper>
          <InnerRow>
            <Col required expanded>
              <Text title={character.name} characterName>
                {character.name}
              </Text>
              {character.description.trim() && (
                <p style={{ textAlign: 'justify' }}>{character.description}</p>
              )}
            </Col>
          </InnerRow>
          <CloseWrapper>
            <Text onClick={handleCloseClick}>X</Text>
          </CloseWrapper>
        </InnerRow>
      </Col>
      <Col required expanded>
        <Text characterName>Quadrinhos</Text>
        {loading
          ? 'Carregando quadrinhos...'
          : state.comics?.map(comic => {
              // eslint-disable-next-line
            const comicUrl = comic.thumbnail.path+"."+comic.thumbnail.extension
              return (
                <InnerRow expanded key={comic.resourceURI}>
                  <ThumbWrapper size="200">
                    <Thumbnail size="200" src={comicUrl} alt={comic.name} />
                  </ThumbWrapper>
                  <TextWrapper>
                    <p title={comic.title}>{comic.title}</p>
                  </TextWrapper>
                </InnerRow>
              )
            })}
      </Col>
    </>
  )
}
export default ExpandedCard
