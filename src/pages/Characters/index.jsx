import CharactersListLayout from 'components/CharactersComponents/CharactersLayout'
import { CharactersProvider } from 'contexts/CharactersContext'
const Characters = () => {
  return (
    <CharactersProvider>
      <CharactersListLayout />
    </CharactersProvider>
  )
}

export default Characters
