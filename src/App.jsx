import { useState,  useEffect } from 'react'
import './App.css'
import { getImage, RANDOM_FACT } from './constants'

function App() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState(null)
  

  useEffect(() => {
    fetch(RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      setFact(data.fact)
    })
  }, [])

  useEffect(() => {
   if (!fact) {
    return
   } else {
    const firstWord = fact.split(' ')[0]
    setImageUrl(getImage(firstWord))
   }
  }, [fact])

  return (
    <main>
      <h1>Cat App</h1>
      <p>{fact}</p>
      <img src={imageUrl} alt="Imagen random de un gato con la palabra" width={300} />
    </main>
  )
}


export default App
