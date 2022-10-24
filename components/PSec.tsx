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
} from "@chakra-ui/react";
import profileP from "./images/jacks.jpg";

export const PSec = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  console.log(profileP);
  return (
    <Flex
      flexDirection={isNotSmallerScreen ? "row" : "column"}
      justifyItems="center"
      alignItems={"center"}
      justifyContent="space-evenly"
      mt={isNotSmallerScreen ? "20" : ""}
    >
      <Box>
      <Circle
                  ml={0}
                  mt={50}
                  mb={isNotSmallerScreen?50:2}
                  w={380}
                  bg="#A0AEC0"
                  Shadow="dark-lg"
                  h={380}
                >
        <Image
          src={profileP.src}
          alt="profile pic"
          borderRadius="100%"
          boxSize="340"
          objectFit="cover"
        />
        </Circle>
      </Box>
      <Center height={isNotSmallerScreen ? "400" : "20"} width={isNotSmallerScreen?'':'90%'}>
        <Divider
          orientation={isNotSmallerScreen ? "vertical" : "horizontal"}
          borderColor="gray" 
        />
      </Center>

      <Box w={isNotSmallerScreen ? 600 : "90%"}>
        <Heading fontSize={isNotSmallerScreen ? 47 : 30} color="#CBD5E0">
          Hi , I'm <br />
          <Text fontSize={50} color="blue.200">
            Jackson
          </Text>
          <Text
            mb="4"
            fontSize={isNotSmallerScreen ? 50 : 35}
            color="blue.200"
            justifyContent={isNotSmallerScreen ? "" : "center"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight={350}
          >
            MERN Stack Developer
          </Text>
        </Heading>
        <Text>
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
