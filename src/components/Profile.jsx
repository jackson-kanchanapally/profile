import {
  Heading,
  Flex,
  Box,
  HStack,
  Image,
  Text,
  Circle,
  Divider,
  Stack,
  List,
  ListItem,
  UnorderedList,
  Center,
  useMediaQuery
} from "@chakra-ui/react";
import dd from "../data/details.json";
import Skills from "./Skills";
export default function Profile() {
  const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
  return (
    <>
      <Stack bg="rgb(32,33,36)" w="100%">
        {dd.map((re) => {
          // const {id,image}=re
          return (
            <>
              <Flex
                // minWidth="max-content"
                gap={isNotSmallerScreen?'150':'0'}
                // spacing={100}
                ml={isNotSmallerScreen?'150':'0'}
                pb={40}
                pt={70}
                direction={isNotSmallerScreen?'row':'column'}
                alignItems='center'
              >
                <Box>
                <Circle
                  ml={0}
                  mt={50}
                  mb={50}
                  w={380}
                  bg="#A0AEC0"
                  Shadow="dark-lg"
                  h={380}
                >
                  <Image
                    borderRadius="100%"
                    boxSize="340"
                    objectFit="cover"
                    src={re.image}
                    alt="Jackson"
                  />
                </Circle>
                </Box>
                <Center height="400">
                  <Divider orientation={isNotSmallerScreen?"vertical":"horizontal"} borderColor="white" />
                </Center>
                <Box w={600}>
                  <Heading fontSize={47} color="#CBD5E0">
                    Hi , I'm <br />
                    <Text fontSize={50} color="blue.200">
                      {re.name}
                    </Text>
                  </Heading>
                  <Text
                    mt={4}
                    fontSize={36}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    {re.title}
                    <Text fontSize={17} color="#CBD5E0">
                      {re.des}
                    </Text>
                  </Text>
                </Box>
              </Flex>

              <Skills />
            </>
          );
        })}
        <Divider pt="10" />
      </Stack>
    </>
  );
}