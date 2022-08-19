import { HStack, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ChoicesList from '../Components/ChoicesList'
import Wheel from '../Components/Wheel/Wheel'
import Wheel2 from '../Components/Wheel/Wheel2'

const Home: NextPage = () => {
  const [choices, setChoices] = useState([])

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
          <img style={{borderRadius: "9999px"}} height={500} width={500} src="https://via.placeholder.com/500" />
        </HStack>
        <Wheel />
        <Wheel2 />
      </main>

      <footer>
        <p>{`<Footer />`}</p>
      </footer>
    </Stack>
  )
}

export default Home
