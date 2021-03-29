import { useMemo, useState, useEffect } from 'react'
import {
  ButtonWrapper,
  ButtonsWrapper,
  Button,
  PageButtonWrapper,
} from './styled'
import { useCharacters } from 'contexts/CharactersContext'
import debounced from 'utils/debounced'

const CharactersPagination = () => {
  const { state, dispatch } = useCharacters()
  const [maxItems, setMaxItem] = useState(window.innerWidth < 700 ? 3 : 5)

  useEffect(() => {
    const debouncedResize = debounced(function handleResize() {
      setMaxItem(window.innerWidth < 700 ? 3 : 5)
    }, 250)
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
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
    if (toPage - fromPage < maxItems) {
      fromPage = Math.max(toPage - maxItems + 1, 1)
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
      >
        <p>{`>`}</p>
      </ButtonWrapper>
      <ButtonWrapper
        onClick={() => dispatch({ type: 'goToLastPage' })}
        shouldRender={state.activePage < state.totalPages - 1}
      >
        <p>{`>>`}</p>
      </ButtonWrapper>
    </ButtonsWrapper>
  )
}

export default CharactersPagination
