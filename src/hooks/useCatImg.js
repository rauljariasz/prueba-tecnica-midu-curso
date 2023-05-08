import { useState, useEffect } from 'react'
import { getImage } from '../constants'

export const useCatImg = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    console.log(fact);
   if (!fact) {
    return
   } else {
    const firstWord = fact.split(' ')[0]
    setImageUrl(getImage(firstWord))
   }
  }, [fact])

  return { imageUrl }
}