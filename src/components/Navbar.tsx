import React from 'react'
import {
  Flex,
  Box,
  Heading,
  useMediaQuery,
  IconButton,
  ButtonGroup,
  useDisclosure,
  useColorMode,
  Button
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      height={isNotSmallerScreen ? "10vh" : "10vh"}
      bg={isDark?"black":"white"}
      alignItems={"center"}
      justifyContent="space-between"
    >
      <Box>
        <Heading
          color={isDark?"#F7FAFC":"gray.800"}
          fontSize={"30"}
          pl={isNotSmallerScreen ? "10" : "5"}
        >
          Portfolio
        </Heading>
      </Box>
      <ButtonGroup pr="10" >
        <IconButton
          aria-label="theme"
          size={isNotSmallerScreen ? "sm" : "md"}
          ml="1vw"
          bg="rgb(32,33,36)"
          color={"gray.100"}
          icon={isDark?<FaMoon />:<FaSun/>}
          onClick={toggleColorMode}
          isRound
        />
        <a
          href="https://www.linkedin.com/in/jackson-kanchanapally-aa8309238/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="linked in"
            size={isNotSmallerScreen ? "sm" : "md"}
            ml="1vw"
            bg="rgb(32,33,36)"
            color="gray.100"
            icon={<FaLinkedin />}
            isRound
          />
        </a>
        <a
          href="https://github.com/jackson-kanchanapally"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="github"
            size={isNotSmallerScreen ? "sm" : "md"}
            bg="rgb(32,33,36)"
            color="gray.100"
            ml="1vw"
            icon={<FaGithub />}
            isRound
            mr="4vw"
          />
        </a>
      </ButtonGroup>
    </Flex>
  );
};
