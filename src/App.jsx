import * as React from "react"
import {
  ChakraProvider,
  ColorModeScript
} from "@chakra-ui/react"
import {Navbar} from './components/Navbar'
import { PSec } from "./components/PSec"
import { Skills } from "./components/Skills"
import { Repos } from "./components/Repos"

export const App = () => (
  <ChakraProvider>
      <ColorModeScript initialColorMode='dark'>
    </ColorModeScript>
    <Navbar/>
    <PSec/>
    <Repos/>
    <Skills/>
 
  </ChakraProvider>
)
