import Header from 'components/SharedComponents/Header'
import Main from 'components/SharedComponents/Main'
import Characters from 'pages/Characters'
import 'styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        {/* Maybe add routing with provider */}
        <Characters />
      </Main>
    </div>
  )
}

export default App
