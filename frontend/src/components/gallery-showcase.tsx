import {
    Flex,
    Grid,
    GridItem,
    Box,
    Card,
    Heading,
    Text,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useRouter } from "next/router";
  
  const gallery = () => {
    const galleryData = [
      {
        id: 1,
        title: "EESTEC ACADEMY: ROBOTICS",
        description:
          "Back from the future, back with ROBOTICS ...",
        imageUrl: "/images/events-showcase/ea-robotics.png",
      },
      {
        id: 2,
        title: "Back 2 Basics",
        description:
          "The main idea for this event is series of programming sessions aimed for freshman students...",
        imageUrl: "/images/events-showcase/b2b.png",
      },
      {
        id: 3,
        title: "Learn How To",
        description:
          "“The opportunity for self-improvement through the non-formal education offered by this wonderful organization”",
        imageUrl: "/images/events-showcase/gamedev.png",
      },
    ];
  
    const router = useRouter();
  
    return (
      <Flex h="100vh" pt={"5%"}>
        <Flex flexDirection="column">
          <Heading mb={"50px"} variant="h2" textAlign="center">
            Gallery
          </Heading>
  
          <Grid marginBottom="20px" gap={6} templateColumns="repeat(3, 1fr)">
            {galleryData.map((gallery) => (
              <GridItem key={gallery.id}>
                <Card padding="20px" h="60vh">
                  <VStack h="100%" spacing={5} align="stretch">
                    <Box
                      paddingBottom="81%"
                      backgroundImage={`url(${gallery.imageUrl})`}
                      backgroundSize={"cover"}
                      border="3px solid #E52A30"    
                    />
  
                    <Heading variant="h4" textTransform="uppercase">
                      {gallery.title}
                    </Heading>
                    <Text
                      textAlign="justify"
                      overflowX="hidden"
                      overflowY="hidden"
                      paddingRight="10px"
                    >
                      {gallery.description}
                    </Text>
                  </VStack>
                </Card>
              </GridItem>
            ))}
          </Grid>
  
          <Button alignSelf="center" onClick={() => router.replace("/gallery")}>
            See More
          </Button>
        </Flex>
      </Flex>
    );
  };
  
  export default gallery;
  