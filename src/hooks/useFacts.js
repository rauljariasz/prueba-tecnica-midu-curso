import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useFacts = () => {
  const [fact, setFact] = useState()
  
  const newFact = () => {
    getRandomFact().then(res => setFact(res))
  }

  useEffect(() => {
    newFact()
  }, [])

  return { fact, newFact }
}