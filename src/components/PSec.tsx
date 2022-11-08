import {
  Flex,
  Box,
  Image,
  useMediaQuery,
  Divider,
  Heading,
  Text,
  Center,
  Circle,
  useColorMode
} from "@chakra-ui/react";
import profileP from './images/jacks.jpg';

export const PSec = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex
    bg={isDark?"rgb(32,33,36)":'gray.200'}
      flexDirection={isNotSmallerScreen ? "row" : "column"}
      justifyItems="center"
      alignItems={"center"}
      justifyContent="space-evenly"
      pt={isNotSmallerScreen ? "15vh" : ""}
      pb={isNotSmallerScreen ? "13vh" : ""}
    >
      <Box mr={isNotSmallerScreen?'-10':''}>
      {/* <Circle
                  ml={0}
                  mt={50}
                  mb={isNotSmallerScreen?50:2}
                  w={380}
                  bg="#A0AEC0"
                  Shadow="dark-lg"
                  h={380}
                > */}
        <Image
          mt={50}
          src={profileP}
          alt="profile pic"
          borderRadius="100%"
          boxSize="360"
          objectFit="cover"
          margin={'4'}
          border="15px solid #A0AEC0"
        />
        {/* </Circle> */}
      </Box>
      <Center height={isNotSmallerScreen ? "400" : "20"} width={isNotSmallerScreen?'':'90%'}>
        <Divider
          orientation={isNotSmallerScreen ? "vertical" : "horizontal"}
          borderColor="gray" 
        />
      </Center>

      <Box ml={isNotSmallerScreen?'-12':''} w={isNotSmallerScreen ? 520 : "90%"}>
        <Heading fontSize={isNotSmallerScreen ? 47 : 30}  color={isDark?"#CBD5E0":"gray.700"} fontWeight={450}>
          Hi , I&apos;m <br />
          <Text mb="4" fontSize={50} color={isDark?"blue.200":"blue.600"}>
            Jackson
          </Text>
          <Text
            
            fontSize={isNotSmallerScreen ? 36 : 35}
            color='blue.200'
            justifyContent={isNotSmallerScreen ? "" : "center"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight={350}
          >
            MERN Stack Developer
          </Text>
        </Heading>
        <Text mt='1' fontSize={15} color={isDark?"#CBD5E0":'gray.800'}>
          Passionate MERN Stack engineer with hands-on experience in developing
          scalable websites / applications using a wide range of front-end and
          back-end skills like HTML, CSS, JavaScript, React js, Node js, Express
          js, MongoDB etc. Developed 10+ websites from scratch. Looking to
          further enhance HTML5, CSS3, JS skills as the future full stack
          developer.
        </Text>
      </Box>
    </Flex>
  );
};
