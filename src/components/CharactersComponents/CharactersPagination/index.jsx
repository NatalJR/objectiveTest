import { useMemo, useState, useEffect } from 'react'
import {
  ButtonWrapper,
  ButtonsWrapper,
  Button,
  PageButtonWrapper,
} from './styled'
import { useCharacters } from 'contexts/CharactersContext'

const CharactersPagination = () => {
  const { state, dispatch } = useCharacters()
  const [maxItems, setMaxItem] = useState(window.innerWidth < 700 ? 3 : 5)

  useEffect(() => {
    function handleResize() {
      setMaxItem(window.innerWidth < 700 ? 3 : 5)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const pages = useMemo(() => {
    const numberOfPages = Math.min(
      state.totalPages,
      state.activePage + maxItems - 1,
    )
    const range = [...Array(numberOfPages).keys()].map(i => i + 1)

    let fromPage = Math.max(state.activePage - 1, 1)
    const toPage = Math.min(fromPage + maxItems - 1, numberOfPages)

    // ensures page selection behaviour (if possible, always have maxItems clickable pages)
    const possibleMinPage = fromPage + maxItems - 1
    const minPage = numberOfPages - maxItems + 1
    if (minPage > 0 && possibleMinPage >= numberOfPages) {
      fromPage = minPage
    }

    const pageRange = range.slice(fromPage - 1, toPage)
    return pageRange
  }, [state.activePage, state.totalPages, maxItems])

  return (
    <ButtonsWrapper>
      <ButtonWrapper
        onClick={() => dispatch({ type: 'goToFirstPage' })}
        shouldRender={state.activePage > 2}
      >
        <p>{`<<`}</p>
      </ButtonWrapper>
      <ButtonWrapper
        onClick={() => dispatch({ type: 'goToPreviousPage' })}
        shouldRender={state.activePage > 1}
      >
        <p>{`<`}</p>
      </ButtonWrapper>
      {pages.map(pageNumber => {
        return (
          <PageButtonWrapper
            key={`page${pageNumber}`}
            onClick={() =>
              dispatch({ type: 'setActivePage', value: pageNumber })
            }
          >
            <Button selected={state.activePage === pageNumber}>
              {pageNumber}
            </Button>
          </PageButtonWrapper>
        )
      })}
      <ButtonWrapper
        onClick={() => dispatch({ type: 'goToNextPage' })}
        shouldRender={state.activePage < state.totalPages}
      >{`>`}</ButtonWrapper>
      <ButtonWrapper
        onClick={() => dispatch({ type: 'goToLastPage' })}
        shouldRender={state.activePage < state.totalPages - 1}
      >{`>>`}</ButtonWrapper>
    </ButtonsWrapper>
  )
}

export default CharactersPagination
