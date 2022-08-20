import React, { useState } from 'react';
import {Textarea, Text, Button, Stack} from "@chakra-ui/react"
import { parseData } from '../../utils/parseData';

interface ChoicesListProps {
  setChoices: any;
}

const ChoicesList: React.FC<ChoicesListProps> = ({setChoices})=> {
  const [text, setText] = useState("")

  const onChangeText = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    console.log(event.target.value)
  }
  
  const addChoices = () => {
    const choices = text.split("\n")
    const data = parseData(choices)
    setChoices(data)
  }

  return(
    <Stack maxW={400}>
      <Text>Pega las opciones en la caja de texto debajo, una opcion por linea y luego haz click en "Agregar opciones"</Text>
      <Textarea onChange={onChangeText} placeholder='Agrega una opcion por linea' height="300px" width="100%" overflowY="auto" />
      <Button onClick={addChoices} colorScheme='light' bg="gray.500" _hover={{bg: "gray.600"}}>Agregar opciones</Button>
      {`<ChoicesList />`}
    </Stack>
  )
}
export default ChoicesList