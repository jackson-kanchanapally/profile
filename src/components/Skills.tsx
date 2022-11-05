import {Box, List,
    ListItem,useMediaQuery,
    UnorderedList,Heading,Text} from '@chakra-ui/react';
    
export const Skills=()=>{
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
return(
  <Box  bg="rgb(32,33,36)" pl={isNotSmallerScreen?150:10} pb='12'>
<Box  pt='14'>
        <Text fontSize={isNotSmallerScreen?43:32} color="#CBD5E0"   bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip='text' pb='5' fontWeight={350}>Programming Languages</Text>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>
              Java
            </ListItem>
            <ListItem color='#CBD5E0' ml='5'>JavaScript</ListItem>
            <ListItem color='#CBD5E0' ml='5'>TypeScript</ListItem>
            <ListItem color='#CBD5E0' ml='5'>C++</ListItem>
            <ListItem color='#CBD5E0' ml='5'>C</ListItem>
          </UnorderedList>
          
          </Box>
          <Box pt='10'>
        <Heading fontSize={isNotSmallerScreen?43:32} color="#CBD5E0" pb='5'  bgGradient='linear(to-l, blue.700, red.300)' bgClip='text' fontWeight={400}>Frontend</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>
              HTML
            </ListItem>
            <ListItem color='#CBD5E0' ml='5'>CSS</ListItem>
            <ListItem color='#CBD5E0' ml='5'>JavaScript</ListItem>
            <ListItem color='#CBD5E0' ml='5'>React Js</ListItem>
          </UnorderedList>
          
          </Box>
          <Box  pt='10'>
        <Heading fontSize={isNotSmallerScreen?43:32} color="#CBD5E0" pb='5' fontWeight={400}>Backend</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>Node Js</ListItem>
            <ListItem color='#CBD5E0' ml='5'>Express Js</ListItem>
          </UnorderedList>
          </Box>
          <Box pt='10'>
        <Heading fontSize={isNotSmallerScreen?43:32} color="#CBD5E0" pb='5' fontWeight={400}>API</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>REST API</ListItem>
          </UnorderedList>
          </Box>
          <Box  pt='10'>
        <Heading fontSize={isNotSmallerScreen?43:32} color="#CBD5E0" pb='5' fontWeight={400}>Database</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>MySQL</ListItem>
            <ListItem color='#CBD5E0' ml='5'>MongoDB</ListItem>
          </UnorderedList>
          </Box>
          </Box>
)
}