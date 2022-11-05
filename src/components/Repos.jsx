import { useEffect, useState } from "react";
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Box,
  Text,
  Flex,
  useMediaQuery,
  Divider,
  Stack,
  Skeleton,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
export const Repos = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/jackson-kanchanapally/repos`)
      .then((res) => {
        setData(res.data);
      });
  }, []);
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Flex
        bg="rgb(32,33,36) "
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent="center"
        pt="20"
        p="auto"
      >
        {data.map((d) => (
          
          !d.archived &&
          <div>
            <LinkBox
              as="article"
              maxW="sm"
              p="5"
              borderWidth="1px"
              rounded="md"
              bg="black"
              boxShadow="dark-lg"
              padding={isNotSmallerScreen ? "6" : "5"}
             
              height={isNotSmallerScreen ? "200" : "150"}
              mr={isNotSmallerScreen ? "20" : ""}
              mb={isNotSmallerScreen ? "10" : "3"}
              width={isNotSmallerScreen?"90vw":'95vw'}
              borderRadius={isNotSmallerScreen ? "20" : "10"}
              _hover={{ boxShadow:"2xl"}}
            >
              <Box as="time" dateTime={d.created_at} fontSize='sm'>
                {d.created_at.slice(0, 10)}
              </Box>
              <Heading size="md" my="2">
                <LinkOverlay href={d.html_url} target="blank">
                  {d.name}
                </LinkOverlay>
              </Heading>
              <Divider borderColor="gray" pt="2" mb="2" />
              <Text mb="3" height={isNotSmallerScreen ? "6" : "0.5"}>
                {isNotSmallerScreen &&
                  d.description !== null &&
                  `${d.description.slice(0, 40)}.....`}
              </Text>
              <Flex justifyContent='space-between' pb='10'>
              <Link href={d.homepage} isExternal>
                Click here
              </Link>
              <Box bgGradient='linear(to-r, gray.400, yellow.300, pink.700)' bgClip='text'>
                {d.language}
              </Box>
              </Flex>
            </LinkBox>
          </div>
              
        ))}
      </Flex>
    </>
  );
};
