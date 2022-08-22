export const parseData = (choicesArray: string[]) => {
  const newArray = choicesArray.map(item => ({
    x: item, 
    y: 1
  }))
  
  return newArray
}