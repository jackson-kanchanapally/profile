import {Box, List,
    ListItem,useMediaQuery,
    UnorderedList,Heading,Text
  ,useColorMode} from '@chakra-ui/react';
import { LIm } from './L-Im';
    
export const Skills=()=>{
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
return(
  <Box  bg={isDark?"rgb(32,33,36)":"gray.200"} pl={isNotSmallerScreen?150:10} pb='12'>
<Box  pt='14'>
        <Text fontSize={isNotSmallerScreen?43:32} color={isDark?"#CBD5E0":"gray.700"}  pb='5'>Programming Languages</Text>
         <LIm cat={'pl'}/>
          
          </Box>
          <Box pt='10'>
        <Text fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' >Frontend</Text>
        <LIm cat={'fn'}/>
          
          </Box>
          <Box  pt='10'>
        <Text fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' fontWeight={400}>Backend</Text>
        <LIm cat={'bn'}/>
          </Box>
          {/* <Box pt='10'>
        <Text fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' fontWeight={400}>API</Text>
          <UnorderedList>
            <ListItem  color={isDark?"#CBD5E0":"gray.700"} ml='5'>REST API</ListItem>
          </UnorderedList>
          </Box> */}
          <Box  pt='10'>
        <Heading fontSize={isNotSmallerScreen?43:32}  color={isDark?"#CBD5E0":"gray.700"} pb='5' fontWeight={400}>Database</Heading>
        <LIm cat={'db'}/>
          </Box>
          </Box>
)
}