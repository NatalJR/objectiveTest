import { useContext } from 'react'
import { ButtonWrapper, ButtonsWrapper } from './styled'
import { CharactersContext } from 'contexts/CharactersContext'

const CharactersPagination = () => {
  const { activePage, totalPages, setActivePage } = useContext(
    CharactersContext,
  )
  const numberOfPages = Math.ceil(Math.min(totalPages, activePage + 5))
  return (
    <ButtonsWrapper>
      {[...Array(numberOfPages).keys()].map(pageNumber => {
        return (
          <ButtonWrapper
            key={`page${pageNumber}`}
            onClick={() => setActivePage(pageNumber + 1)}
            selected={activePage === pageNumber}
          >
            <p>{pageNumber + 1}</p>
          </ButtonWrapper>
        )
      })}
    </ButtonsWrapper>
  )
}

export default CharactersPagination
