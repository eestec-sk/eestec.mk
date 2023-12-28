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
      name: "Hristijan Saveski",
      position: "Chairperson",
      imageUrl: "/images/board/hristijan.png",
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
    },
    {
      id: 4,
      name: "Kristina Srbinoska",
      position: "FR Coordinator",
      imageUrl: "/images/board/kristina.png",
    },
    {
      id: 5,
      name: "Petar Hristovski",
      position: "IT Coordinator",
      imageUrl: "/images/board/petar.png",
    },
  ];

  return (
    <Box pt={"10%"} pb={"10%"}>
      <Center>
        <Heading variant="h2">Board 2023/2024</Heading>
      </Center>
      <HStack pt={"50px"}>
        {boardMembers.map((boardMember) => (
          <Stack key={boardMember.id} direction="column" w="full">
            <Center>
              <Circle
                size={{ base: "20", md: "36", lg: "52" }}
                backgroundImage={`url("${boardMember.imageUrl}")`}
                backgroundSize={"cover"}
                color="white"
                marginBottom="2"
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
