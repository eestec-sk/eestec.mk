import { Box, Flex, Heading, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import Header from "../components/shared/header";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>| Gallery</title>
        <link rel="icon" href="/eestec.ico" />
      </Head>

      <Header />
      <Flex
        width="100vw"
        height="100vh"
        bgColor="primary"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Heading variant="title">Gallery coming soon!</Heading>
          <Box padding='6' boxShadow='lg' width={"70rem"}>
            <SkeletonCircle size='10' marginBottom={"1rem"}/>
            <Skeleton height="1rem" marginBottom={"1rem"} borderRadius={"1rem"}></Skeleton>
            <Skeleton height="1rem" marginBottom={"1rem"} borderRadius={"1rem"}></Skeleton>
            <Skeleton height="1rem" marginBottom={"1rem"} borderRadius={"1rem"}></Skeleton>
            <Skeleton height="1rem" marginBottom={"1rem"} borderRadius={"1rem"}></Skeleton>
            <Skeleton height="1rem" marginBottom={"1rem"} borderRadius={"1rem"}></Skeleton>
          </Box>
          <Text
            _hover={{ textDecoration: "underline" }}
            variant="white"
            cursor="pointer"
          >
            <a href="/">Go back</a>
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Gallery;
