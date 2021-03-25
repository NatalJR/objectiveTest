import { Box, Row, Col, HeaderRow, Table } from './styled'

const CharactersList = ({ characters = [] }) => {
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
