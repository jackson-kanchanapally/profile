import {Flex,Box,Icon,HStack} from '@chakra-ui/react'
import {FaLinkedin, FaGithub,FaTwitter} from "react-icons/fa";
export default function Footer (){
    return (
        <Flex pt='10' bgColor='rgb(30,31,34)' justifyContent='center' alignItems='center' pb='40'>
            <HStack spacing='24px'>
              
            <Icon color='#CBD5E0' w={45} h={45}  as={FaTwitter}/>
            <a href='https://github.com/jackson-kanchanapally' target='_blank'>
            <Icon color='#CBD5E0' w={45} h={45} as={FaGithub}/>
            </a>
            <Icon color='#CBD5E0' w={45} h={45} as={FaLinkedin}/>
            </HStack>
        </Flex>
    )
}