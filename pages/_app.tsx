import { ChakraProvider } from '@chakra-ui/react'
import {AppProps} from "next/app";
import "../styles/wheel.css"

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp