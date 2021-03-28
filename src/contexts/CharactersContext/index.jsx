import { createContext, useContext, useReducer } from 'react'
//Maybe import immutable for state?

const CharactersContext = createContext()

function charactersReducer(state, action) {
  switch (action.type) {
    case 'setActivePage': {
      return { ...state, activePage: action.value }
    }
    case 'setCharactersPage': {
      return {
        ...state,
        charactersPage: action.value.results,
        totalPages: action.value.totalPages,
      }
    }
    case 'goToFirstPage': {
      return { ...state, activePage: 1 }
    }
    case 'goToLastPage': {
      return { ...state, activePage: state.totalPages }
    }
    case 'goToPreviousPage': {
      return { ...state, activePage: state.activePage - 1 }
    }
    case 'goToNextPage': {
      return { ...state, activePage: state.activePage + 1 }
    }
    case 'searchCharacter': {
      return { ...state, search: action.value, activePage: 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CharactersProvider({ children }) {
  const [state, dispatch] = useReducer(charactersReducer, {
    activePage: 1,
    totalPages: 1,
    search: '',
    charactersPage: [],
  })
  const value = { state, dispatch }
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  )
}

function useCharacters() {
  const context = useContext(CharactersContext)
  if (context === undefined) {
    throw new Error('useCharacters must be used within a CharactersProvider')
  }
  return context
}

export { CharactersProvider, useCharacters }
