import { Box, Text, Flex, Heading, HStack, Button, position } from "@chakra-ui/react";
import Image from "next/image";
const LandingPage = () => {
  const imageUrl = "/images/yearbook-photo.jpeg";
  const gradient = "rgba(229, 42, 48, 0) 41.09%, rgba(229, 42, 48, 1) 82.88%, rgba(229, 42, 48, 1) 100%";
  // const gradient = "rgba(229, 42, 48, 0) 30%, rgba(229, 42, 48, 1) 85%";

  return (
    <Flex
      bgImage={`url(${imageUrl})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Flex width={"100%"} backgroundImage={`linear-gradient(${gradient})`}>
        <Box margin={"auto"} height="90vh">
          <HStack display="flex" justifyContent="space-between" gap={"5rem"}>
            <Flex flexDir={"column"} alignItems={"baseline"} paddingTop={"30rem"}>
              <Heading variant="title" paddingLeft={"3rem"} fontSize={"3.6rem"}>
                Power your future, <br /> be an eestecer
              </Heading>
              <Image
              width={1038.89}
              height={0}
                src="/images/Line.svg"
                alt="eestec map"
              />
              <Text variant="whiteBig" paddingLeft={"3rem"}  fontSize={"1.65rem"}>
                Invoking Passion, Pursuing Development, Empowering Collaboration
              </Text>
            </Flex>

            <Flex flexDir={"column"} paddingTop={"13rem"}>
               <Image
                width={642.57}
                height={455.58}
                src="/images/mk-map.svg"
                alt="eestec map"
              />
              
              <Button
                onClick={() => alert("Hold your horses. Feature coming soon!")}
                alignSelf={"flex-end"}
                width={"max-content"}
                // mt="50px"
              >
                JOIN US
              </Button>
              
            </Flex>
          </HStack>
          
           <Flex 
            justifyContent={"center"} 
            color={"white"} 
            fontSize={"1.2rem"} 
            // _hover={{fontSize: "1.5rem"}}
            >
                      Scroll for more! 
            </Flex>

          <Flex justifyContent={"center"}>
              <Image
                width={38.23}
                height={70}
                src="/images/lightning.svg"
                alt="lightning"
                />
                </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
