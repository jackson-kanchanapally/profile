import { ChakraProvider} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { PSec } from '../components/PSec'
import { Skills } from '../components/Skills'


const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Navbar/>
       <PSec/>
       <Skills/>
    </ChakraProvider>
  )
}

export default Home
