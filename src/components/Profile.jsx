import {
  Heading,
  Flex,
  Box,
  HStack,
  Image,
  Text,
  Circle,
  Divider,
  Stack,
  List,
  ListItem,
  UnorderedList,
  Center
} from "@chakra-ui/react";
import dd from "../data/details.json";
export default function Profile() {
  return (
    <>
      <Stack bg="rgb(32,33,36)" w="100%">
        {dd.map((re) => {
          // const {id,image}=re

          return (
            <>
              <HStack minWidth="max-content" spacing={110} ml={150} pb={80} pt={25}>
                <Circle
                  ml={0}
                  mt={50}
                  mb={50}
                  w={390}
                  bg="#A0AEC0"
                  Shadow="dark-lg"
                  h={390}
                >
                  <Image
                    borderRadius="100%"
                    boxSize="350"
                    objectFit="cover"
                    src={re.image}
                    alt="Jackson"
                  />
                </Circle>
                <Center height='400'>
  <Divider orientation='vertical' borderColor='white' />
</Center>
                <Box w={600}>
                  <Heading fontSize={50} color="#CBD5E0">
                  Hi , I'm <br/> {re.name}
                  </Heading>
                  <Text mt={4} fontSize={36} color="#CBD5E0">
                    {re.title}
                  <Text fontSize={17} color="#CBD5E0">
                    {re.des}
                  </Text>
                  </Text>
                </Box>
              </HStack>
             
              <Box  pl={150}>
              <Heading fontSize={43} color="#CBD5E0">Programming Languages</Heading>
                <UnorderedList>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                </UnorderedList>
                </Box>
              <Box  pl={150}>
              <Heading fontSize={43} color="#CBD5E0">Programming Languages</Heading>
                <UnorderedList>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                </UnorderedList>
                </Box>
              <Box  pl={150}>
              <Heading fontSize={43} color="#CBD5E0">Programming Languages</Heading>
                <UnorderedList>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                  <ListItem color='#CBD5E0'>{re.pl}</ListItem>
                </UnorderedList>
                </Box>
            </>
          );
        })}
        <Divider pt='10'/>
      </Stack>
        
    </>
  );
}
