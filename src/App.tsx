import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import {Navbar} from './components/Navbar'
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { PSec } from "./components/PSec"
import { Skills } from "./components/Skills"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <PSec/>
    <Skills/>
  </ChakraProvider>
)