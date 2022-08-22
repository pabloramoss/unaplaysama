import { HStack, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ChoicesList from '../Components/ChoicesList'
import Wheel from '../Components/Wheel/Wheel'

const sampleData = [
  { x: "CHUNGO", y: 1 },
  { x: "De frente", y: 1 },
  { x: "Autocuracion", y: 1 },
  { x: "oportunidad", y: 1 },
  { x: "Vamos a vivir para siempre", y: 1 },
  { x: "sobrealgo", y: 1 },
  { x: "Resilencia", y: 1 },
  { x: "Adrenalina", y: 1 },
  { x: "Baila conmigo", y: 1 },
  { x: "Postratamiento", y: 1 },
  { x: "Temple del hombre", y: 1 },
  { x: "Otra perk", y: 1 },
  { x: "Instinto de saqueador", y: 1 },
  { x: "Otra perk", y: 1 },
  { x: "Otra perk", y: 1 },
  { x: "Otra perk", y: 1 },
  { x: "Otra perk", y: 1 },
  { x: "Otra perk", y: 1 },
  { x: "Otra perk", y: 1 },
]

const Home: NextPage = () => {
  const [choices, setChoices] = useState(sampleData)
  const [text, setText] = useState("")

  return (
    <Stack bg="gray.900" color="gray.300" align="center" justify="center" height="100vh">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {`<Navbar />`}
      <main>
        <HStack gap={100}>
          <ChoicesList setChoices={setChoices} />
          <Wheel choices={choices} />
        </HStack>
      </main>

      <footer>
        <p>{`<Footer />`}</p>
      </footer>
    </Stack>
  )
}

export default Home
