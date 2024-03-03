import { Box, Flex, Heading, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import Header from "../components/shared/header";

import { NextSeo } from 'next-seo';

const Blog = () => {

  const SEO = {
    title: "Blog",
    description: "EESTEC MK Blog",
    openGraph: {
      url: "https://eestec.mk/blog",
      type: "blog/website",
      locale: "mk_MK",
      site_name: "EESTEC MK Blog",
    }
  }

  return (
    <>
      <NextSeo {...SEO} />

      <Header />
      <Flex
        width="100vw"
        height="100vh"
        bgColor="primary"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Heading variant="title">Blog coming soon!</Heading>
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

export default Blog;
