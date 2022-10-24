import {
  VStack,
  Flex,
  Box,
  Heading,
  Spacer,
  IconButton,
  ButtonGroup,
  HStack
} from "@chakra-ui/react";

import { FaMoon, FaSun, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <VStack w="100vw" h={20} bg="rgba(0, 0, 0, 0.92)" >
      <HStack w="100vw" pt='5'  alignItems="center" gap="2">
        
          <Heading  pl={46} fontSize={35} ml="1vw" color="#CBD5E0">
           PortFolio
          </Heading>
        
        <Spacer />
        <ButtonGroup>
          <IconButton
            size="sm"
            bg='rgb(32,33,36)'
            color='gray.100'
            ml="1vw"
            icon={<FaMoon/>}
           isRound
           
          />
          <a
            href="https://www.linkedin.com/in/jackson-kanchanapally-aa8309238/"
            target="_blank"
          >
            <IconButton
             size='sm'
              ml="1vw"
              bg='rgb(32,33,36)'
              color='gray.100'
              icon={<FaLinkedin/>}
              isRound='true'
              
            />
          </a>
          <a href="https://github.com/jackson-kanchanapally" target="_blank">
            <IconButton
              size="sm"
              bg='rgb(32,33,36)'
              color='gray.100'
              ml="1vw"
              icon={<FaGithub/>}
              isRound
              mr="4vw"
            />
          </a>
        </ButtonGroup>
      </HStack>
    </VStack>
  );
}