import {
  Box,
  Stack,
  HStack,
  Heading,
  Center,
  Circle,
  Text
} from "@chakra-ui/react";

const MeetTheBoard = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Vasilaki Tocili",
      position: "Chairperson",
      imageUrl: "/images/board/vasilaki.png",
    },
    {
      id: 2,
      name: "Matej Filipovski",
      position: "Contact Person",
      imageUrl: "/images/board/matej.png",
    },
    {
      id: 3,
      name: "Martina Klimoska",
      position: "Tresurer",
      imageUrl: "/images/board/martina.png",
      test: "<br/>",
    },
    {
      id: 4,
      name: "Marina Klimoska",
      position: "PR Coordinator",
      imageUrl: "/images/board/marina.jpeg",
    },
    {
      id: 5,
      name: "Ivana Koceva",
      position: "IT Coordinator",
      imageUrl: "/images/board/ivana.jpeg",
    },
    {
      id: 6,
      name: "Toni Hristovski",
      position: "HR Coordinator",
      imageUrl: "/images/board/toni.jpeg",
    },
    {
      id: 7,
      name: "Kristina Srbinoska",
      position: "FR Coordinator",
      imageUrl: "/images/board/kristina.png",
    },
  ];

  return (
    <Box pt={"10%"} pb={"10%"}>
      <Center>
        <Heading variant="h2">Board 2023/2024</Heading>
      </Center>
      <HStack pt={"40px"}>
        {boardMembers.map((boardMember) => (
          <Stack key={boardMember.id} direction="column" w="full">
            <Center>
              <Circle
                size={{ base: "20", md: "36", lg: "52" }}
                backgroundImage={`url("${boardMember.imageUrl}")`}
                backgroundSize={"cover"}
                color="white"
                marginBottom="2"
                marginRight="2"
                border={"5px solid #e52a30"}
              ></Circle>
            </Center>
            <Center>
              <Heading variant="h3red">{boardMember.name}</Heading>
            </Center>
            <Center>
              <Heading variant="h4">{boardMember.position}</Heading>             
            </Center>
          </Stack>
        ))}
      </HStack>
    </Box>
  );
};

export default MeetTheBoard;
