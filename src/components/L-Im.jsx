import {Image,Flex,Circle,Box,useColorMode,useMediaQuery}  from '@chakra-ui/react'
import Img from './img.js'
export const LIm=({cat})=>{
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return(
        
        <>
           <Flex flexDirection={'row'} bg={isDark?"rgb(32,33,36)":"gray.200"} flexWrap='wrap'>
       {
        Img.map((p)=>
            p.cat==cat &&
           (

            <Circle
            borderRadius='100%'
            bg={isDark?"gray.700":'gray.100'}
            Shadow="dark-lg"
            h={isNotSmallerScreen?'15vh':'10vh'}
            w={isNotSmallerScreen?'15vh':'10vh'}
            justifyItems='center'
            justifyContent={'center'}
            boxShadow="dark-lg"
            m={isNotSmallerScreen?'5':'2'}
            _hover={{ boxShadow:"2xl"}}
            p='1'
          > 
           <Image src={p.image} width='97%'  borderRadius='full'/>
          </Circle>
           )
        )
       }
            </Flex>
        </>

    )
}