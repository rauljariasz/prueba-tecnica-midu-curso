import { RANDOM_FACT } from "../constants";

 export const getRandomFact = async () => {
  const response = await fetch(RANDOM_FACT)
  const data = await response.json()
  const {fact} = data
  return fact
}