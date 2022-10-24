import {Flex,Box,Image,useMediaQuery,Divider,Heading,Text,Center} from '@chakra-ui/react'
export const PSec=()=>{
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
   return (
    <Flex flexDirection={isNotSmallerScreen?'row':'column'} justifyItems='center' alignItems={'center'}>
        <Box>
            <Image src="https://avatars.githubusercontent.com/u/76800060?v=4" alt="profile pic" boxSize="300px" borderRadius="full" ml="10vw" mt="10vh"/>
        </Box>
        <Center height={isNotSmallerScreen?"400":"20"}>
                  <Divider orientation={isNotSmallerScreen?"vertical":"horizontal"} borderColor="white" />
                </Center>

        <Box w={isNotSmallerScreen?600:'90%'}>
        <Heading fontSize={isNotSmallerScreen?47:30} color="#CBD5E0">
                    Hi , I'm <br />
                    <Text fontSize={isNotSmallerScreen?50:35} color="blue.200" justifyContent={isNotSmallerScreen?'':'center'}>
                      MERN Stack Developer
                    </Text>
                    </Heading>
                    <Text>
                    Passionate MERN Stack engineer with hands-on experience in developing scalable websites / applications using a wide range of front-end and back-end skills like HTML, CSS, JavaScript, React js, Node js, Express js, MongoDB etc. Developed 10+ websites from scratch. Looking to further enhance HTML5, CSS3, JS skills as the future full stack developer.
                    </Text>
                 
                
        </Box>
    </Flex>
   ) 
}