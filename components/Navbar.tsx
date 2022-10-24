import {
  Flex,
  Box,
  Heading,
  useMediaQuery,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Navbar = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex height="55" bg="black" alignItems={"center"} justifyContent='space-between'>
      <Box>
        <Heading fontSize={"30"} pl={isNotSmallerScreen ? "10" : "5"}>
          Portfolio
        </Heading>
      </Box>
      <ButtonGroup pr='10'>
        <a
          href="https://www.linkedin.com/in/jackson-kanchanapally-aa8309238/"
          target="_blank"
        >
          <IconButton
            aria-label="linked in"
            size="sm"
            ml="1vw"
            bg="rgb(32,33,36)"
            color="gray.100"
            icon={<FaLinkedin />}
            isRound
          />
        </a>
        <a href="https://github.com/jackson-kanchanapally" target="_blank">
          <IconButton
            aria-label="github"
            size="sm"
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
