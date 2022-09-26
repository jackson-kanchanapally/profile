import {Box, List,
    ListItem,
    UnorderedList,Heading} from '@chakra-ui/react'
    import dd from "../data/details.json";
export default function Skills(){
    return (
      <>
        <Box  pl={150}>
        <Heading fontSize={43} color="#CBD5E0" pb='5'>Programming Languages</Heading>
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
          <Box  pl={150}>
        <Heading fontSize={43} color="#CBD5E0" pb='5'>Frontend</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>
              HTML
            </ListItem>
            <ListItem color='#CBD5E0' ml='5'>CSS</ListItem>
            <ListItem color='#CBD5E0' ml='5'>JavaScript</ListItem>
            <ListItem color='#CBD5E0' ml='5'>React Js</ListItem>
          </UnorderedList>
          
          </Box>
          <Box  pl={150}>
        <Heading fontSize={43} color="#CBD5E0" pb='5'>Backend</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>Node Js</ListItem>
            <ListItem color='#CBD5E0' ml='5'>Express Js</ListItem>
          </UnorderedList>
          </Box>
          <Box  pl={150}>
        <Heading fontSize={43} color="#CBD5E0" pb='5'>API</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>REST API</ListItem>
          </UnorderedList>
          </Box>
          <Box  pl={150}>
        <Heading fontSize={43} color="#CBD5E0" pb='5'>Database</Heading>
          <UnorderedList>
            <ListItem color='#CBD5E0' ml='5'>MySQL</ListItem>
            <ListItem color='#CBD5E0' ml='5'>MongoDB</ListItem>
          </UnorderedList>
          </Box>
         </>
    )
}