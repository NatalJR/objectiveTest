import { useContext } from 'react'
import { Box, Row, Col, HeaderRow, Table } from './styled'
import { CharactersContext } from 'contexts/CharactersContext'

const CharactersList = () => {
  const { characters } = useContext(CharactersContext)
  return (
    <>
      <HeaderRow header>
        <Col required>Personagem</Col>
        <Col>Séries</Col>
        <Col>Eventos</Col>
      </HeaderRow>
      <Table>
        <Box>
          {characters.map((a, b) => (
            <Row key={b}>
              <Col required>Personagem</Col>
              <Col>Series</Col>
              <Col>Eventos</Col>
            </Row>
          ))}
        </Box>
      </Table>
    </>
  )
}

export default CharactersList
