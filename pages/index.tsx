import { ChakraProvider,Flex} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { PSec } from '../components/PSec'


const Home: NextPage = () => {
  return (
    
    <ChakraProvider>
      <Navbar/>
       <PSec/>
    </ChakraProvider>
  )
}

export default Home
