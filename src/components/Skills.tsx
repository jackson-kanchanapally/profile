import {Box, List,
    ListItem,useMediaQuery,
    UnorderedList,Heading,Text
  ,useColorMode} from '@chakra-ui/react';
    
export const Skills=()=>{
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
return(
  <Box  bg={isDark?"rgb(32,33,36)":"gray.200"} pl={isNotSmallerScreen?150:10} pb='12'>
<Box  pt='14'>
        <Text fontSize={isNotSmallerScreen?43:32} color={isDark?"#CBD5E0":"gray.700"}  pb='5'>Programming Languages</Text>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>
              Java
            </ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>JavaScript</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>TypeScript</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>C++</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>C</ListItem>
          </UnorderedList>
          
          </Box>
          <Box pt='10'>
        <Text fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' >Frontend</Text>
          <UnorderedList>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>
              HTML
            </ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>CSS</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>JavaScript</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>React Js</ListItem>
          </UnorderedList>
          
          </Box>
          <Box  pt='10'>
        <Text fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' fontWeight={400}>Backend</Text>
          <UnorderedList>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>Node Js</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>Express Js</ListItem>
          </UnorderedList>
          </Box>
          <Box pt='10'>
        <Text fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' fontWeight={400}>API</Text>
          <UnorderedList>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>REST API</ListItem>
          </UnorderedList>
          </Box>
          <Box  pt='10'>
        <Heading fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' fontWeight={400}>Database</Heading>
          <UnorderedList>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>MySQL</ListItem>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>MongoDB</ListItem>
          </UnorderedList>
          </Box>
          </Box>
)
}