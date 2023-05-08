import './App.css'
import { useFacts } from './hooks/useFacts'
import { useCatImg } from './hooks/useCatImg'

function App() {
  const { fact, newFact } = useFacts()
  const { imageUrl } = useCatImg({ fact })

  const handleClick = () => {
    newFact()
  }

  return (
    <main>
      <h1>Cat App</h1>
      {fact && <p>{fact}</p>} 
      <div>
        <img src={imageUrl} alt="Imagen random de un gato con la palabra" width={300} />
      </div>
      <button onClick={handleClick}>Generate new Fact</button>
    </main>
  )
}


export default App
